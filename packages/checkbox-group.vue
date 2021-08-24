<template>
  <div class="yz-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YzCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped></style>
