import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useCommentsStore } from '@/stores/comments';

export const usePostsStore = defineStore('posts', () => {
    const { deleteAllCommentsFromPost } = useCommentsStore();

    const postsList = ref([]);

    const getPostIndex = (postId) => {
        return postsList.value.findIndex((post) => post.id === postId)
    };

    const getPostById = (postId) => {
        return postsList.value[getPostIndex(postId)]
    };

    const addNewPost = (newPost) => {
        postsList.value.push(newPost);
    };

    const deletePost = (deletedPost) => {
        const deletedPostIndex = getPostIndex(deletedPost.id);
        postsList.value.splice(deletedPostIndex, 1);
        deleteAllCommentsFromPost(deletedPost.id);
    };

    const editPost = (editedPost) => {
        const editedPostIndex = getPostIndex(editedPost.id);
        postsList.value.splice(editedPostIndex, 1, editedPost);
    };

    return {
        postsList,
        getPostById,
        addNewPost,
        deletePost,
        editPost,
    }
});
