<template>
  <div
    class="yz-switch"
    :class="{ 'is-checked': value }"
    @click="handleClick"
  >
    <input type="checkbox" ref="input" :name="name" class="yz-switch__input">
    <span class="yz-switch__core" ref="core">
      <span class="yz-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'YzSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 点击的时候，还需要修改背景色
      console.log(this.value)
      // 等待value发生了改变，再setColor()
      // 数据修改后，等待DOM更新，在修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const clr = this.value ? this.activeColor : this.inactiveColor
        console.log(clr)
        this.$refs.core.style.borderColor = clr
        this.$refs.core.style.backgroundColor = clr
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
.yz-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .yz-switch__input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .yz-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .yz-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.yz-switch.is-checked {
  .yz-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .yz-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
