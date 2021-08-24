<template>
  <div class="yz-input" :class="{ 'yz-input--suffix': showSuffix }">
    <input
      :disabled="disabled"
      :name="name"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      class="yz-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
    <span class="yz-input__suffix">
      <i @click="clear" class="yz-input__icon yz-icon-circle-close" v-if="clearable && value"></i>
      <i class="yz-input__icon yz-icon-view" :class="{ 'yz-icon-view-active': passwordVisible }" v-if="showPassword" @click="handlePassword"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'YzInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.yz-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .yz-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &:is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.yz-input--suffix {
  .yz-input__inner {
    padding-right: 30px;
  }
  .yz-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .yz-icon-view-active {
      color: blue;
    }
  }
}
</style>
