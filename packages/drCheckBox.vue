<template>
  <label class="dr-checkbox" :class="{'is-checked': isChecked}">
    <span class="dr-checkbox__input">
      <span class="dr-checkbox__inner"></span>
      <input
        type="checkbox"
        class="dr-checkbox__original"
        :name="name"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="dr-checkbox__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "dr-checkBox",
  data() {
    return {};
  },
  inject: {
    CheckBoxGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckBoxGroup;
    },
    model: {
      get() {
        return this.isGroup ? this.CheckBoxGroup.value : this.value;
      },
      set(value) {
        return this.isGroup
          ? this.CheckBoxGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.model;
    }
  }
};
</script>

<style lang="scss" scoped>
.dr-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .dr-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .dr-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 29, 1.46);
      &::after {
        content: "";
        box-sizing: content-box;
        border: 1px solid #fff;
        border-top: 0;
        border-left: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.5s;
        transform-origin: center;
      }
    }
    .dr-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .dr-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.dr-checkbox.is-checked {
  .dr-checkbox__input {
    .dr-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .dr-checkbox__label {
    color: #409eff;
  }
}
</style>