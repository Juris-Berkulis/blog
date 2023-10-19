import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommentsStore = defineStore('comments', () => {
    const commentsObj = ref({});

    const getCommentsListForPost = (postId) => {
        if (!commentsObj.value[postId]) {
            commentsObj.value[postId] = [];
        }
        
        return commentsObj.value[postId]
    };

    const getCommentsCountOfPost = (postId) => {
        return getCommentsListForPost(postId).length
    };

    const addCommentIntoPost = (postId, newComment) => {
        getCommentsListForPost(postId).unshift(newComment);
    };

    const deleteCommentFromPost = (postId, commentId) => {
        const commentsList = getCommentsListForPost(postId);
        const deletedCommentIndex =  commentsList.findIndex((comment) => {
            return comment.id === commentId
        });
        commentsList.splice(deletedCommentIndex, 1);
    };

    const deleteAllCommentsFromPost = (postId) => {
        delete commentsObj.value[postId];
    };

    return {
        getCommentsListForPost,
        getCommentsCountOfPost,
        addCommentIntoPost,
        deleteCommentFromPost,
        deleteAllCommentsFromPost,
    }
});
