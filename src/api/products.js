import instance from "./config";

export const getAllPro = () => {
    const url = "/products";
    return instance.get(url);
};
export const getPro = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const addPro = (pro) => {
    const url = "/products";
    return instance.post(url, pro);
};
export const removePro = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url, id);
};
export const updatePro = (pro) => {
    const url = `/products/${pro.id}`;
    return instance.put(url, pro);
};
export const filterCate = (id) => {
    const url = `/products?catePro=${id}`;
    return instance.get(url);
};
export const viewProduct = (count) => {
    const url = `products?=view&_order=asc&_limit=${count}`;
    return instance.get(url);
};