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
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    color: #ff5858;
    font-size: 12px;
}
</style>
