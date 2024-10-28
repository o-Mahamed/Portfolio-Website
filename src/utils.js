export const getImageUrl = (path) => {
    return new URL(`/assetsport1/${path}`, import.meta.url).href;
};