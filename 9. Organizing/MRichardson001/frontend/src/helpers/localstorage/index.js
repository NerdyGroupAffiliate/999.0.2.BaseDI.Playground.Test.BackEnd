export const setItem = (key, item) =>
    localStorage.setItem(key, JSON.stringify(item));

export const getItem = key => {
    const item = localStorage.getItem(key);
    return !!item ? JSON.parse(item) : undefined;
};

export const clear = () => localStorage.clear();
