import instance from "./config";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (pro) => {
    const url = "/products";
    return instance.post(url, pro);
};
export const deletel = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url, id);
};
export const update = (pro) => {
    const url = `/products/${pro.id}`;
    return instance.put(url, pro);
};