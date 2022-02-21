import instance from "./config";

export const getAllPost = () => {
    const url = "/posts";
    return instance.get(url);
};
export const getPost = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
export const addPost = (post) => {
    const url = "/posts";
    return instance.post(url, post);
};
export const removePost = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url, id);
};
export const updatePost = (post) => {
    const url = `/posts/${post.id}`;
    return instance.put(url, post);
};
export const getLimit = (count) => {
    const url = `/posts?&_limit${count}`;
    return instance.get(url);
};