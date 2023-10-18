<script setup>
import { ref } from 'vue';
import { usePostsStore } from '@/stores/posts';
import PostsForm from '@/components/PostsForm.vue';

defineProps({
    post: {
        required: false,
        type: {
            id: `post-${string}`,
            title: string,
            shortDescription: string,
            longDescription: string,
            date: string,
        },
    },
});

const { deletePost } = usePostsStore();

const isEditing = ref(false);

const togglePostEditing = () => {
    isEditing.value = !isEditing.value;
};
</script>

<template>
<article>
    <div>
        <button @click="togglePostEditing">{{ isEditing ? 'Отмена' : 'Редактировать' }}</button>
        <button @click="deletePost(post)">Удалить</button>
    </div>
    <PostsForm v-if="isEditing" :post="post" :togglePostEditing="togglePostEditing" />
    <div class="post__main" v-else>
        <h2 class="post__title">{{ post.title }}</h2>
        <p class="post__description">{{ post.shortDescription }}</p>
        <div class="post__ddditionaly">
            <p class="post__commentsInfo">
                <span>Комментарии:</span>
                <span>0</span>
            </p>
            <p class="post__date">{{ post.date }}</p>
        </div>
    </div>
</article>
</template>

<style scoped lang="scss">
</style>
