<template>
  <div class="dr-radio">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dr-Radio-Group",
  props: {
    value: null
  },
  provide() {
    return {
      RadioGroup: this
    };
  }
};
</script>

<style lang="scss" scoped>
</style>