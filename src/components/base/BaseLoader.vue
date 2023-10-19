<script setup>
</script>

<template>
<div class="loader">
    <div class="loader__spiner"></div>
</div>
</template>

<style scoped lang="scss">
.loader {
    display: flex;
    justify-content: center;
}

@keyframes rotate {
    from {
        transform: rotateZ(0);
    }

    to {
        transform: rotateZ(360deg);
    }
}

.loader__spiner {
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 10px solid currentColor;
    border-right-color: transparent;
    animation: rotate 0.4s linear 0s infinite normal;
}
</style>
