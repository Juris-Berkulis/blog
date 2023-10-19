import { watchEffect } from "vue";

export const useLocalStorage = () => {
    const setIntoLocalStorage = (key, element) => {
        watchEffect(() => {
            localStorage.setItem(key, JSON.stringify(element));
        });
    };

    const getFromLocalStorage = (key) => {
        const element = localStorage.getItem(key);

        return element ? JSON.parse(element) : null
    };

    return {
        setIntoLocalStorage,
        getFromLocalStorage,
    }
};
