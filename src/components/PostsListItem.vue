<script setup>
import { ref } from 'vue';
import { usePostsStore } from '@/stores/posts';
import { useCommentsStore } from '@/stores/comments';
import PostsForm from '@/components/PostsForm.vue';

defineProps({
    post: {
        required: false,
        type: Object,
    },
});

const { deletePost } = usePostsStore();
const { getCommentsCountOfPost } = useCommentsStore();

const isEditing = ref(false);

const togglePostEditing = () => {
    isEditing.value = !isEditing.value;
};
</script>

<template>
<article @click="$router.push(`posts/${post.id}`)">
    <div>
        <button @click.stop="togglePostEditing">{{ isEditing ? 'Отмена' : 'Редактировать' }}</button>
        <button @click.stop="deletePost(post)">Удалить</button>
    </div>
    <PostsForm v-if="isEditing" @click.stop :post="post" :togglePostEditing="togglePostEditing" />
    <div class="post__main" v-else>
        <h2 class="post__title">{{ post.title }}</h2>
        <p class="post__description">{{ post.shortDescription }}</p>
        <div class="post__ddditionaly">
            <p class="post__commentsInfo">
                <span>Комментарии:</span>
                <span>{{ getCommentsCountOfPost(post.id) }}</span>
            </p>
            <p class="post__date">{{ post.date }}</p>
        </div>
    </div>
</article>
</template>

<style scoped lang="scss">
</style>
