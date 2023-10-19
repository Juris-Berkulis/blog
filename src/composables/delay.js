import { onUnmounted, ref } from "vue";

export const useDelay = () => {
    const timerId = ref();

    const createDelay = (delayInSeconds) => {
        const promise = new Promise((resolve) => {
            timerId.value = setTimeout(() => {
                resolve();
            }, delayInSeconds * 1000);
        });

        return promise
    };

    onUnmounted(() => {
        clearTimeout(timerId.value);
    });

    return {
        createDelay,
    }
};
