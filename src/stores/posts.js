import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', () => {
    const postsList = ref([]);

    const addNewPost = (newPost) => {
        postsList.value.push(newPost);
    };

    const deletePost = (deletedPost) => {
        const deletedPostIndex = postsList.value.findIndex((post) => post.id === deletedPost.id);
        postsList.value.splice(deletedPostIndex, 1);
    };

    const editPost = (editedPost) => {
        const editedPostIndex = postsList.value.findIndex((post) => post.id === editedPost.id);
        postsList.value.splice(editedPostIndex, 1, editedPost);
    };

    return {
        postsList,
        addNewPost,
        deletePost,
        editPost,
    }
});
