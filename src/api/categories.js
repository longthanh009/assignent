import instance from "./config";

export const getAll = () => {
    const url = "/categories";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};
export const add = (cate) => {
    const url = "/categories";
    return instance.post(url, cate);
};
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
};
export const update = (cate) => {
    const url = `/categories/${cate.id}`;
    return instance.put(url, cate);
};