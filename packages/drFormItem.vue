<template>
    <div class="dr-form-item">
        <label class="dr-form-item__label" style="labelStyle">{{label}}</label>
        <div class="dr-form-item__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dr-form-item',
    props: {
        label: String
    }
}
</script>

<style lang="scss" scoped>
    .dr-form-item{
        margin-bottom: 25px;
        .dr-form-item__label{
            text-align: center;
            vertical-align: middle;
            float: left;
            font-size: 14px;
            color: #606266;
            line-height: 40px;
            padding: 0 12px 0 0;
            box-sizing: border-box;
        }
        .dr-form-item__content{
            line-height: 40px;
            position: relative;
            font-size: 14px;
            overflow: hidden;
        }
    }
</style>