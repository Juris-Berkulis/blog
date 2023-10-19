<script setup>
import PostsForm from '@/components/PostsForm.vue';
import PostsList from '@/components/PostsList.vue';
</script>

<template>
<button 
    class="posts__show-form-btn button button_animation"
    @click="isShowForm = !isShowForm"
>{{ isShowForm ? 'Скрыть' : 'Показать' }} форму</button>
<PostsForm class="posts__form" v-if="isShowForm" />
<PostsList class="posts__list" />
</template>

<style scoped lang="scss">
.posts__show-form-btn {
    margin: 0 auto 20px;
    padding: 16px 32px;
    display: block;
    background-color: var(--green, #00ae5b);
}

.posts__form {
    margin-bottom: 40px;
}
</style>
