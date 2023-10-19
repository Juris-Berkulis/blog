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
<div class="comment list-item">
    <div class="comment__additionaly">
        <div class="comment__info">
            <span class="comment__author">{{ comment.authorName }}</span>
            <a class="comment__email" :href="`mailto:${comment.authorEmail}`">{{ comment.authorEmail }}</a>
        </div>
        <button class="comment__delete button button_animation" @click="() => deleteCommentFromPost(postId, comment.id)">Удалить</button>
    </div>
    <p class="comment__text">{{ comment.text }}</p>
</div>
</template>

<style scoped lang="scss">
.comment {
    padding: 15px;
    border-radius: 5px;
    background-color: var(--dark-green, #208b54);
    color: var(--white, #ffffff);
}

.comment__additionaly {
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

.comment__info {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.comment__delete {
    padding: 8px 16px;
    background-color: var(--dark-red, #8a1515);
    color: var(--white, #ffffff);
}
</style>
