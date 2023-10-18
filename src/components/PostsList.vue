<script setup>
import { usePostsStore } from '@/stores/posts';
import PostsListItem from '@/components/PostsListItem.vue';

const {
    postsList,
} = usePostsStore();
</script>

<template>
<div>
    <PostsListItem v-for="post of postsList" :key="post.id" :post="post" />
</div>
</template>

<style scoped lang="scss">
</style>
