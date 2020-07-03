<template >
  <div class="dr-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dr-checkBox-Group",
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      CheckBoxGroup: this
    };
  }
};
</script>

<style lang="scss" scoped>
</style>>
    
</style>