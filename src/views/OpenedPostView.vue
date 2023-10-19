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
<div class="post" v-if="openedPost">
    <OpenedPost class="post__article" :openedPost="openedPost" />
    <RouterLink class="post__to-posts-list button button_animation" to="/">К списку постов</RouterLink>
    <CommentsForm class="post__comments-form" :postId="postId" />
    <CommentsList class="post__comments-list" :postId="postId" />
</div>
<div class="post-not-found" v-else>
    <h1 class="post-not-found__title">404</h1>
    <p class="post-not-found__description">Статья не найдена</p>
    <RouterLink class="post-not-found__back-to-posts-list button button_animation" to="/">Вернуться на главную</RouterLink>
</div>
</template>

<style scoped lang="scss">
$mb: 30px;

.post {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.post__article {
    width: 100%;
    margin-bottom: $mb;
}

.post__to-posts-list {
    margin-bottom: $mb;
    padding: 8px 16px;
    display: inline-block;
    background-color: var(--dark_grey, #84909b);
}

.post__comments-form {
    width: 100%;
    margin-bottom: $mb;
}

.post__comments-list {
    width: 100%;
}

.post-not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.post-not-found__title {
    margin-bottom: $mb;
}

.post-not-found__description {
    margin-bottom: $mb;
}

.post-not-found__back-to-posts-list {
    padding: 8px 16px;
    display: inline-block;
    background-color: var(--dark_grey, #84909b);
}
</style>
