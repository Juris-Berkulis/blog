<script setup>
defineProps({
    error: {
        type: String,
    },
});
</script>

<template>
<div class="error-text" v-if="error">{{ error }}</div>
</template>

<style scoped lang="scss">
.error-text {
    // position: absolute;
    top: calc(100% + 4px);
    left: 0;
    color: #ff5858;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}
</style>
