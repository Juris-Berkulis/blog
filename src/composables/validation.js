import { watch, ref } from 'vue';

export const useValidation = () => {
    const maxLengthForTitle = 50;
    const maxLengthForShortDescription = 100;
    const maxLengthForLongDescription = 255;
    const maxLengthForAuthorName = 50;
    const maxLengthForAuthorEmail = 50;
    const maxLengthForCommentText = 255;
    const regExpForFullName = /^[a-z]{1,}@[a-z]{1,10}\.[a-z]{1,8}$/i;
    const textForRequiredFieldError = 'Поле не заполненно';
    const textForRegExpError = 'Неверный формат';
    const textForEmailError = `${textForRegExpError}: example@example.example`;
    const textForMaxLengthError = (minLength) => `Максимальная длина ${minLength} символов`;

    const isShowFormErrors = ref(false);

    const requiredField = (value) => {
        return !!value
    };

    const regExpMatching = (value, regExp) => {
        return regExp.test(value)
    };
    
    const maxLength = (value, maxStrLength) => {
        return value.length <= maxStrLength
    };

    const fieldValueAndError = (params) => {
        return { fieldValue: params.defaultValue || '', fieldError: '', ...params }
    };

    const errorForForm = (fieldObj) => {
        for (let field in fieldObj.value) {
            if (fieldObj.value[field].fieldError) return true
        }
    
        return false
    };

    const checkField = (field, fieldObj, validatedObj) => {
        for (let i = 0; i < validatedObj[field].length; i++) {
            const fieldOptions = validatedObj[field][i];
    
            if (!fieldOptions.isValid(fieldObj.value[field].fieldValue)) {
                fieldObj.value[field].fieldError = fieldOptions.errorText; return
            }
        }
    
        fieldObj.value[field].fieldError = '';
    };
    
    const checkAllFields = (fieldObj, validatedObj) => {
        for (let field in validatedObj) {
            checkField(field, fieldObj, validatedObj);
        }
    };
    
    const watchFieldObj = (fieldObj, validatedObj) => {
        for (let field in fieldObj.value) {
            watch([() => fieldObj.value[field].fieldValue], () => {
                if (isShowFormErrors.value) {
                    checkField(field, fieldObj, validatedObj);
                }
            });
        }
    };

    return {
        maxLengthForTitle,
        maxLengthForShortDescription,
        maxLengthForLongDescription,
        maxLengthForAuthorName,
        maxLengthForAuthorEmail,
        maxLengthForCommentText,
        regExpForFullName,
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
    }
};
