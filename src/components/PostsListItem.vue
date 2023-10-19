<script setup>
import { ref } from 'vue';
import PostsForm from '@/components/PostsForm.vue';
import { usePostsStore } from '@/stores/posts';
import { useCommentsStore } from '@/stores/comments';
import { useDate } from '@/composables/date';

defineProps({
    post: {
        required: false,
        type: Object,
    },
});

const { converteSavedDateToShow } = useDate();

const { deletePost } = usePostsStore();
const { getCommentsCountOfPost } = useCommentsStore();

const isEditing = ref(false);

const togglePostEditing = () => {
    isEditing.value = !isEditing.value;
};
</script>

<template>
<article class="post list-item" @click="$router.push(`posts/${post.id}`)">
    <div class="post__btns">
        <button 
            class="post__btn post__btn_edit button button_animation" 
            @click.stop="togglePostEditing"
        >{{ isEditing ? 'Отмена' : 'Редактировать' }}</button>
        <button 
            class="post__btn post__btn_delete button button_animation" 
            @click.stop="deletePost(post)"
        >Удалить</button>
    </div>
    <PostsForm 
        class="post__form" 
        v-if="isEditing" 
        @click.stop :post="post" 
        :togglePostEditing="togglePostEditing" 
    />
    <div class="post__main" v-else>
        <h2 class="post__title">{{ post.title }}</h2>
        <p class="post__description">{{ post.shortDescription }}</p>
        <div class="post__additionaly">
            <p class="post__commentsInfo">
                <span>Комментарии: </span>
                <span>{{ getCommentsCountOfPost(post.id) }}</span>
            </p>
            <p class="post__date">{{ converteSavedDateToShow(post.date) }}</p>
        </div>
    </div>
</article>
</template>

<style scoped lang="scss">
$mb: 10px;

.post {
    padding: 15px;
    border-radius: 10px;
    background-color: var(--dark-blue, #2e4a64);
    color: var(--white, #ffffff);
}

.post__btns {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-end;
}

.post__btn {
    display: inline-block;
    padding: 8px 16px;
    color: var(--white, #ffffff);

    &_edit {
        background-color: var(--blue, #2a358c);
    }

    &_delete {
        background-color: var(--dark-red, #8a1515);
    }
}

.post__title {
    margin-bottom: $mb;
    text-align: center;
}

.post__description {
    margin-bottom: $mb;
}

.post__additionaly {
    display: flex;
    justify-content: space-between;
    opacity: 0.7;
}
</style>
