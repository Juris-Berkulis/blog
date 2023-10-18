<script setup>
import { ref } from 'vue';
import { useCommentsStore } from '@/stores/comments';

const props = defineProps({
    postId: {
        type: String,
    },
});

const {
    addCommentIntoPost,
} = useCommentsStore();

const authorName = ref('');
const authorEmail = ref('');
const commentText = ref('');

const clearForm = () => {
    authorName.value = '';
    authorEmail.value = '';
    commentText.value = '';
};

const createCommentId = (date) => {
    return `comment-${date.getTime()}`
};

const submit = () => {
    const comment = {
        id: createCommentId(new Date()), 
        authorName: authorName.value, 
        authorEmail: authorEmail.value, 
        text: commentText.value
    };

    addCommentIntoPost(props.postId, comment);
    clearForm();
};
</script>

<template>
<form @submit.prevent="submit">
    <input v-model="authorName" type="text" id="authorName">
    <input v-model="authorEmail" type="text" id="authorEmail">
    <textarea v-model="commentText" id="commentText"></textarea>
    <button type="submit">Добавить</button>
</form>
</template>

<style scoped lang="scss">
</style>
