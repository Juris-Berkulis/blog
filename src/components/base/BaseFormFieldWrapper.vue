<script setup>
import BaseFormFieldError from '@/components/base/BaseFormFieldError.vue';

defineProps({
    error: {
        type: String,
    },
});
</script>

<template>
<div class="base-form-field-wrapper base-form-field-wrapper__container">
    <slot />
    <BaseFormFieldError :error="error" />
</div>
</template>

<style scoped lang="scss">
.base-form-field-wrapper__container {
    position: relative;
}
</style>
