<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
<main class="main">
    <RouterView />
</main>
</template>

<style scoped lang="scss">
.main {
    flex-grow: 1;
    width: 100%;
    padding: 40px max(50px, calc((100% - 1820px) / 2));
    background-color: var(--bg, #445b71);
    color: var(--white, #ffffff);
}
</style>
