<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    class="dr-button"
    :class="[`dr-button--${type}`,
    {
      'is-plain':plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }]"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>>

<script>
export default {
  name: "dr-Button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.dr-button {
  font-size: 16px;
  line-height: 1;
  height: 36px;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  user-select: none;
  outline: none;
  cursor: pointer;
  color: #fff;
}
.dr-button--primary {
  background-color: #3498db;
}
.dr-button--success {
  background-color: #2ecc71;
}
.dr-button--info {
  background-color: #d1d8e0;
}
.dr-button--waring {
  background-color: #f1c40f;
}
.dr-button--danger {
  background-color: #e74c3c;
}

.dr-button--primary.is-plain {
  background-color: #bbdaee;
  color: #3498db;
  &:hover,
  &:active {
    background-color: #3498db;
    color: #fff;
  }
}
.dr-button--success.is-plain {
  background-color: #b1e7c7;
  color: #2ecc71;
  &:hover,
  &:active {
    background-color: #2ecc71;
    color: #fff;
  }
}
.dr-button--info.is-plain {
  background-color: #b8cee4;
  color: #d1d8e0;
  &:hover,
  &:active {
    background-color: #3498db;
    color: #fff;
  }
}
.dr-button--waring.is-plain {
  background-color: #f5eab6;
  color: #f1c40f;
  &:hover,
  &:active {
    background-color: #f1c40f;
    color: #fff;
  }
}
.dr-button--danger.is-plain {
  background-color: #f3b9b3;
  color: #e74c3c;
  &:hover,
  &:active {
    background-color: #e74c3c;
    color: #fff;
  }
}
.is-round {
  border-radius: 20px;
}
.is-circle {
  border-radius: 50%;
}
.dr-button [class*="dr-icon"] + span {
  margin-left: 5px;
}
.is-disabled {
 cursor:not-allowed;
}
</style>