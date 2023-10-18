<script setup>
import { RouterLink } from 'vue-router';
import OpenedPost from '@/components/OpenedPost.vue';
import CommentsForm from '@/components/CommentsForm.vue';
import CommentsList from '@/components/CommentsList.vue';
import { usePostsStore } from '@/stores/posts';

const props = defineProps({
    postId: {
        type: String,
    },
});

const {
    getPostById,
} = usePostsStore();

const openedPost = getPostById(props.postId);
</script>

<template>
<article>
    <div v-if="openedPost">
        <OpenedPost :openedPost="openedPost" />
        <RouterLink to="/">К списку постов</RouterLink>
        <CommentsForm :postId="postId" />
        <CommentsList :postId="postId" />
    </div>
    <div v-else class="postNotFound">
        <h1>404</h1>
        <p>Статья не найдена</p>
        <RouterLink to="/">Вернуться на главную</RouterLink>
    </div>
</article>
</template>

<style scoped lang="scss">
</style>
