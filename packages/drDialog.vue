<template>
  <transition name="fade">
    <div class="dr-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="dr-dialog" :style="{width,marginTop:top}">
        <div class="dr-dialog__header">
          <slot name="title">
            <span class="dr-dialog__title">{{title}}</span>
          </slot>
          <button class="dr-dialog__headerbtn dr-button" @click="handleClose">
            <i class="dr-icon-shanchu"></i>
          </button>
        </div>
        <div class="dr-dialog__body">
          <slot></slot>
        </div>
        <div class="dr-dialog__footer" v-if="this.$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "dr-Dialog",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss">
.dr-dialog__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  // display: flex;
  // justify-content: center;
  background-color: rgba(24, 23, 23, 0.3);
  z-index: 10;
  width: 100%;
  height: 100%;
}
.dr-dialog {
  margin: 0 auto;
  width: 540px;
  padding: 10px 10px;
  background-color: #fff;
}
.dr-dialog__header {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  width: 100%;
}
.dr-dialog__headerbtn {
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
  &:hover,
  &:active {
    color: #fff;
    background-color: #7f8c8d;
  }
}
.dr-dialog__body {
  min-height: 50px;
  padding: 10px 0;
}
.dr-dialog__footer {
  padding: 10px 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  
}
.fade-leave-to {
  opacity: 0;
}
</style>
