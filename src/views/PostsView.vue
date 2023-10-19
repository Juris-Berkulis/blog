<script setup>
import { ref } from 'vue';
import PostsForm from '@/components/PostsForm.vue';
import PostsList from '@/components/PostsList.vue';

const isShowForm = ref(false);
</script>

<template>
<button 
    class="posts-view__show-form-btn button button_animation"
    @click="isShowForm = !isShowForm"
>{{ isShowForm ? 'Скрыть' : 'Показать' }} форму</button>
<PostsForm class="posts-view__form" v-if="isShowForm" />
<PostsList class="posts-view__list" />
</template>

<style scoped lang="scss">
.posts-view__show-form-btn {
    margin: 0 auto 20px;
    padding: 16px 32px;
    display: block;
    background-color: var(--green, #00ae5b);
}

.posts-view__form {
    margin-bottom: 40px;
}
</style>
