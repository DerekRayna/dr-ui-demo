<template>
  <div>
    <label class="dr-radio" :class="{'is-checked': label==model}">
      <span class="dr-radio__input">
        <span class="dr-radio__inner"></span>
        <input type="radio" class="dr-radio__original" :value="label" name="name" v-model="model" />
      </span>
    </label>
    <span class="dr-radio__label">
      <slot>{{label}}</slot>
    </span>
  </div>
</template>


<script>
export default {
  name: "dr-Radio",
  data() {
    return {};
  },
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  },
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.RadioGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.RadioGroup.$emit("input",value)
          : this.$emit("input", value);
      }
    },
    isGroup() {
    return !!this.RadioGroup;
  }
  },
  
};
</script>

<style lang="scss" scoped>
.dr-radio {
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
  .dr-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .dr-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.15s ease-in;
      }
    }
    .dr-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .dr-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.is-checked {
  .dr-radio__input {
    background-color: blue;
  }
  .dr-radio__label {
    color: blue;
  }
}
</style>