<script setup>
import { computed } from 'vue';
import CommentsListItem from '@/components/CommentsListItem.vue';
import { useCommentsStore } from '@/stores/comments';

const props = defineProps({
    postId: {
        type: String,
    },
});

const {
    getCommentsListForPost,
} = useCommentsStore();

const commentsList = computed(() => {
    return getCommentsListForPost(props.postId)
});
</script>

<template>
<div>
    <CommentsListItem 
        class="comments-list__item" 
        v-for="comment of commentsList" 
        :key="comment.id" 
        :postId="postId" 
        :comment="comment" 
    />
</div>
</template>

<style scoped lang="scss">
.comments-list__item {
    margin-bottom: 30px;
}
</style>
