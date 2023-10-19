<script setup>
import { useDate } from '@/composables/date';

defineProps({
    openedPost: {
        type: Object,
    },
});

const { converteSavedDateToShow } = useDate();
</script>

<template>
<div class="post">
    <h1 class="postTitle">{{ openedPost.title }}</h1>
    <p class="postDate">{{ converteSavedDateToShow(openedPost.date) }}</p>
    <div class="postDescription small">{{ openedPost.shortDescription }}</div>
    <div class="postDescription long">{{ openedPost.longDescription }}</div>
</div>
</template>

<style scoped lang="scss">
</style>
