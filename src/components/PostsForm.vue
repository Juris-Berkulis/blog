<script setup>
import { ref } from 'vue';
import { usePostsStore } from '@/stores/posts';
import { useDate } from '@/composables/date';

const props = defineProps({
    post: {
        required: false,
        type: Object,
    },
    togglePostEditing: {
        required: false,
        type: Function,
    },
});

const { addNewPost, editPost } = usePostsStore();

const {
    converteDateToSave,
} = useDate();

const title = ref(props.post?.title || '');
const shortDescription = ref(props.post?.shortDescription || '');
const longDescription = ref(props.post?.longDescription || '');

const clearForm = () => {
    title.value = '';
    shortDescription.value = '';
    longDescription.value = '';
};

const createPostId = (date) => {
    return `post-${date.getTime()}`
};

const submit = () => {
    const date = new Date();

    const id = props.post?.id ? props.post.id : createPostId(date);

    const post = {
        id,
        title: title.value,
        shortDescription: shortDescription.value,
        longDescription: longDescription.value,
        date: converteDateToSave(date),
    };

    if (props.post) editPost(post);
    else addNewPost(post);

    clearForm();
    if (props.togglePostEditing) props.togglePostEditing();
};
</script>

<template>
<form @submit.prevent="submit">
    <input v-model="title" type="text" id="title">
    <textarea v-model="shortDescription" id="shortDescription"></textarea>
    <textarea v-model="longDescription" id="longDescription"></textarea>
    <button type="submit">Добавить</button>
</form>
</template>

<style scoped lang="scss">
</style>
