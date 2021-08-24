<template>
  <div class="yz-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YzRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style lang="scss" scoped></style>
