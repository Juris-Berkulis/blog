<script setup>
import { usePostsStore } from '@/stores/posts';
import PostsListItem from '@/components/PostsListItem.vue';

const {
    postsList,
} = usePostsStore();
</script>

<template>
<div class="post-list">
    <PostsListItem class="post-list__item" v-for="post of postsList" :key="post.id" :post="post" />
</div>
</template>

<style scoped lang="scss">
.post-list__item {
    margin-bottom: 30px;
}
</style>
