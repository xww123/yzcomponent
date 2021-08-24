<template>
  <label class="yz-radio" :class="{ 'is-checked': label === model }">
    <span class="yz-radio__input">
      <span class="yz-radio__inner"></span>
      <input
        type="radio"
        v-model="model"
        :name="name"
        :value="label"
        class="yz-radio__original"
      />
    </span>
    <span class="yz-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'YzRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        // 要考虑是否被 radioGroup 包裹
        // return this.value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件给当前组件注册的 input 事件
        // 要考虑是否被 radioGroup 包裹
        // this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.yz-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .yz-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .yz-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .yz-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .yz-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.yz-radio.is-checked {
  .yz-radio__input {
    .yz-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .yz-radio__label {
    color: #409eff;
  }
}
</style>
