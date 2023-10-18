<script setup>
import { useCommentsStore } from '@/stores/comments';

defineProps({
    postId: {
        type: String,
    },
    comment: {
        type: Object,
    },
});

const {
    deleteCommentFromPost,
} = useCommentsStore();
</script>

<template>
<div class="comment">
    <div class="comment__additionaly">
        <div class="comment__info">
            <p class="comment__author">{{ comment.authorName }}</p>
            <p class="comment__email">{{ comment.authorEmail }}</p>
        </div>
        <button class="comment__delete" @click="() => deleteCommentFromPost(postId, comment.id)">Удалить</button>
    </div>
    <p class="comment__text">{{ comment.text }}</p>
</div>
</template>

<style scoped lang="scss">
</style>
