import instance from "./config";

export const Created = (user) => {
    const url = "/users";
    return instance.post(url, user);
};
export const Login = (user) => {
    const url = "/users";
    return instance.get(url, user);
};