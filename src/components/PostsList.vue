<script setup>
import PostsListItem from '@/components/PostsListItem.vue';
import { usePostsStore } from '@/stores/posts';

const {
    postsList,
} = usePostsStore();
</script>

<template>
<div class="posts-list">
    <PostsListItem 
        class="posts-list__item" 
        v-for="post of postsList" 
        :key="post.id" 
        :post="post" 
    />
</div>
</template>

<style scoped lang="scss">
.posts-list__item {
    margin-bottom: 30px;
}
</style>
