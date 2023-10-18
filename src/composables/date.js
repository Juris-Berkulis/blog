export const useDate = () => {
    const addZeroToBeginingOfNumber = (num) => {
        return num < 10 ? `0${num}` : `${num}`
    };

    const converteDateToSave = (date) => {
        const utcYear = date.getUTCFullYear();
        const utcMonth = date.getUTCMonth() + 1;
        const utcDayNumber = date.getUTCDate();
    
        return `${utcYear}-${addZeroToBeginingOfNumber(utcMonth)}-${addZeroToBeginingOfNumber(utcDayNumber)}`
    };

    const converteSavedDateToShow = (oldDateFormat) => {
        return oldDateFormat.split('-').reverse().join('.')
    };

    return {
        converteDateToSave,
        converteSavedDateToShow,
    }
};
