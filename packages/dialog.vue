<template>
  <transition name="dialog-fade">

    <!-- clicl.self self指只有点中自己才能命中 -->
    <div class="yz-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="yz-dialog" :style="{ width: width, marginTop: top }">
        <div class="yz-dialog__header">
          <slot name="title">
            <span class="yz-dialog__title">{{ title }}</span>
          </slot>
          <button class="yz-dialog__headerbtn" @click="handleClose">
            <i class="yz-icon-wode"></i>
          </button>
        </div>
        <div class="yz-dialog__body">
          <slot></slot>
        </div>
        <div class="yz-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'YzDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      console.log('哈哈')
      //   this.visible = false  报错
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.yz-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .yz-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .yz-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .yz-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .yz-icon-wode {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /*
        深度选择器 sass中的深度选择器 ::v-deep  less中的深度选择器 /deep/
        css中的深度选择器 >>>
      */
      ::v-deep .yz-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.5s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
