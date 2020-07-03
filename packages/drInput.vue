<template>
  <div class="dr-input" :class="[{'dr-input--suffix': noIcon}]">
    <input
      :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
      class="dr-input__inner"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :class="[{'is-disabled':disabled}]"
      :value="value"
      @input="inputEvent"
      @click="clear"
    />
    <span v-if="noIcon" class="dr-input__suffix">
      <i class="dr-icon-shanchu" v-if="clearable && value" @click="clear"></i>
      <i class="dr-icon-shezhi" :class="{'dr-icon-shezhi-active': passwordVisible }"  v-if="showPassword" @click="changeType"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "dr-Input",
  data(){
    return {
      passwordVisible: false
    }
  },
  props: {
    value: "",
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
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
  methods: {
    inputEvent(e) {
      this.$emit("input", e.target.value);
    },
    clear(){
      this.$emit('clear','')
    },
    changeType(){
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    noIcon() {
      return this.clearable || this.showPassword;
    }
  },
};
</script>>

<style lang="scss" scoped>
.dr-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .dr-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 355, 1);
    width: 100%;
  }
  .dr-icon-shezhi-active{
    color: blue;
  }
  &:focus {
    outline: none;
    border-color: #409eff;
  }
  .is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    cursor: not-allowed;
  }
}
   .dr-input--suffix {
    .dr-input__inner{
      padding-right: 30px;
    }
    .dr-input__suffix{
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
    }
  }
</style>