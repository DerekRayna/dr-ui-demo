<template>
  <div class="dr-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="dr-switch__core" ref="core">
      <span class="dr-switch__button"></span>
    </span>
    <input type="checkbox" :checked="value" :name="name" class="dr-switch__input" ref="check">
  </div>
</template>

<script>
export default {
  name: "dr-Switch",
  props: {
    value: {
      type: Boolean,
      default: true
    },
    //自定义选中color
    activeColor: {
      type: String,
      default: ""
    },
    //自定义未选中color
    inactiveColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      await this.$nextTick();//当我们改变数据后就想dom样式发生改变时通过nextTick()
      this.changeStatus();
    },
    changeStatus() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
        this.$refs.check.value = this.value;
      }
    }
  },
  mounted() {
    this.changeStatus();
  }
};
</script>

<style lang="scss" scoped>
.dr-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .dr-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.03, background-color 0.3s;
    vertical-align: middle;
    .dr-switch__button {
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
.dr-switch.is-checked {
  .dr-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .dr-switch__button {
      transform: translateX(20px);
    }
  }
}
  .dr-switch__input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>