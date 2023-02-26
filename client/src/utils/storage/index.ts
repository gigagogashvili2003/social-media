const storage = (key: string) => ({
    getItem: () => {
        const item: any = localStorage.getItem(key);
        return typeof item === 'object' ? JSON.parse(item) : item;
    },

    setItem: (data: any) => {
        const setItem = typeof data === 'object' ? JSON.stringify(data) : data;
        localStorage.setItem(key, setItem);
    },

    removeItem: () => {
        localStorage.removeItem(key);
    },
});

export default storage;
