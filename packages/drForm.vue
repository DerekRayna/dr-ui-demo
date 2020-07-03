<template>
    <div class="hr-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'dr-form',
    props: {
        value: {
            type: Object,
            required:true,
            default:{}
        }
    },
    provide(){
        return {
            form: this
        }
    }
}
</script>

<style lang="scss" scoped>

</style>