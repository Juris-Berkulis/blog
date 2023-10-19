<script setup>
import { ref } from 'vue';
import BaseFormFieldWrapper from '@/components/base/BaseFormFieldWrapper.vue';
import BaseFormField from '@/components/base/BaseFormField.vue';
import { useCommentsStore } from '@/stores/comments';
import { useValidation } from '@/composables/validation';

const props = defineProps({
    postId: {
        type: String,
    },
});

const {
    addCommentIntoPost,
} = useCommentsStore();

const {
    maxLengthForAuthorName,
    maxLengthForAuthorEmail,
    maxLengthForCommentText,
    regExpForEmail,
    textForRequiredFieldError,
    textForEmailError,
    isShowFormErrors,
    textForMaxLengthError,
    requiredField,
    regExpMatching,
    maxLength,
    fieldValueAndError,
    errorForForm,
    checkAllFields,
    watchFieldObj,
} = useValidation();

const commentFieldObj = ref({
    authorName: fieldValueAndError({ label: 'Имя', fieldType: 'input'}),
    authorEmail: fieldValueAndError({ label: 'Email', fieldType: 'input'}),
    commentText: fieldValueAndError({ label: 'Комментарий', fieldType: 'textarea'}),
});

const commentValidatedObj = {
    authorName: [
        { isValid: (fieldValue) => requiredField(fieldValue), errorText: textForRequiredFieldError },
        { isValid: (fieldValue) => maxLength(fieldValue, maxLengthForAuthorName), errorText: textForMaxLengthError(maxLengthForAuthorName) },
    ],
    authorEmail: [
        { isValid: (fieldValue) => regExpMatching(fieldValue, regExpForEmail), errorText: textForEmailError },
        { isValid: (fieldValue) => maxLength(fieldValue, maxLengthForAuthorEmail), errorText: textForMaxLengthError(maxLengthForAuthorEmail) },
    ],
    commentText: [
        { isValid: (fieldValue) => requiredField(fieldValue), errorText: textForRequiredFieldError },
        { isValid: (fieldValue) => maxLength(fieldValue, maxLengthForCommentText), errorText: textForMaxLengthError(maxLengthForCommentText) },
    ],
};

const resetForm = () => {
    for (let field in commentFieldObj.value) {
        commentFieldObj.value[field].fieldValue = '';
    }
};

const createCommentId = (date) => {
    return `comment-${date.getTime()}`
};

const submit = () => {
    checkAllFields(commentFieldObj, commentValidatedObj);

    if (!errorForForm(commentFieldObj)) {
        const comment = {
            id: createCommentId(new Date()), 
            authorName: commentFieldObj.value.authorName.fieldValue, 
            authorEmail: commentFieldObj.value.authorEmail.fieldValue.toLowerCase(), 
            text: commentFieldObj.value.commentText.fieldValue,
        };

        addCommentIntoPost(props.postId, comment);
        isShowFormErrors.value = false;
        resetForm();
    }
};

watchFieldObj(commentFieldObj, commentValidatedObj);
</script>

<template>
<form class="form" @submit.prevent="submit" @input="isShowFormErrors = true">
    <BaseFormFieldWrapper
        class="form__field-wrapper" 
        v-for="fieldValue, field of commentFieldObj" 
        :key="field" 
        :error="fieldValue.fieldError"
    >
        <BaseFormField
            class="form__field"
            :class="{form__field_error: fieldValue.fieldError}"
            v-model:inputedValue="fieldValue.fieldValue" 
            :label="fieldValue.label" 
            :fieldType="fieldValue.fieldType"
        />
    </BaseFormFieldWrapper>
    <button class="form__btn button button_animation" type="submit">Добавить</button>
</form>
</template>

<style scoped lang="scss">
</style>
