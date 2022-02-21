let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
export const addToCart = (newProduct, next) => {
    const cartPro = cart.find((item) => newProduct.id === item.id);
    if (!cartPro) {
        cart.push(newProduct);
    } else {
        cartPro.quantity = newProduct.quantity + cartPro.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const increaseQuantity = (id, next) => {
    cart.find((item) => item.id == id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decreaseQuantity = (id, next) => {
    cart.find((item) => item.id == id).quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeCart = (id, next) => {
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};