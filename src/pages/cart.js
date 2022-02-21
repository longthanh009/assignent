import Footer from "../componemt/footer";
import Header from "../componemt/header";
import { reRender } from "../utils/index";
import { decreaseQuantity, increaseQuantity, removeCart } from "../utils/cart";

const Cart = {
    render() {
        let cart = [];
        let total = 0;
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            cart.forEach((item) => {
                total += item.price * item.quantity;
            });
        }
        return /* html */`
        <div class="search-wrapper section-padding-100">
            <div class="search-close">
                <i class="fa fa-close" aria-hidden="true"></i>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="search-content">
                            <form action="#" method="get">
                                <input type="search" name="search" id="search"
                                    placeholder="Type your keyword...">
                                <button type="submit"><img
                                        src="img/core-img/search.png"
                                        alt=""></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="main-content-wrapper d-flex clearfix">
        ${Header.render()}
        <div class="cart-table-area section-padding-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="cart-title mt-50">
                        <h2>Shopping Cart</h2>
                    </div>

                    <div class="cart-table clearfix">
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                            ${cart.map((item) => /* html */`
                            <tr>
                                    <td class="cart_product_img">
                                        <a href="/#/products/${item.id}"><img
                                                src="${item.img}"
                                                alt="Product"></a>
                                    </td>
                                    <td class="cart_product_desc">
                                        <h5>${item.product_name}</h5>
                                    </td>
                                    <td class="price">
                                        <span>$${item.price}</span>
                                    </td>
                                    <td class="qty">
                                        <div class="qty-btn d-flex">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" data-id="${item.id}" class="btn btn-xs btn-secondary btn-decrease">-</button>
                                                <div class="quantity">
                                                    <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="${item.quantity}">
                                                </div>
                                                <button data-id="${item.id}" type="button" class="btn btn-xs btn-secondary btn-increase">+</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><button data-id="${item.id}" class="btn btn-danger btn-removeCart">Deletel</button></td>
                                </tr>
                            `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="cart-summary">
                        <h5>Cart Total</h5>
                        <ul class="summary-table">
                            <li><span>subtotal:</span> <span>$${total}</span>
                            </li>
                            <li><span>delivery:</span> <span>Free</span>
                            </li>
                            <li><span>total:</span> <span>$${total}</span>
                            </li>
                        </ul>
                        <div class="cart-btn mt-100">
                            <a href="/#/checkout"
                                class="btn amado-btn w-100 btn-warning">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <section class="newsletter-area section-padding-100-0">
            <div class="container">
                <div class="row align-items-center">
                    <!-- Newsletter Text -->
                    <div class="col-12 col-lg-6 col-xl-7">
                        <div class="newsletter-text mb-100">
                            <h2>Subscribe for a <span>25% Discount</span></h2>
                            <p>Nulla ac convallis lorem, eget euismod nisl. Donec in
                                libero sit amet mi vulputate consectetur. Donec
                                auctor interdum purus, ac finibus massa bibendum
                                nec.</p>
                        </div>
                    </div>
                    <!-- Newsletter Form -->
                    <div class="col-12 col-lg-6 col-xl-5">
                        <div class="newsletter-form mb-100">
                            <form action="#" method="post">
                                <input type="email" name="email" class="nl-email"
                                    placeholder="Your E-mail">
                                <input type="submit" value="Subscribe">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ${Footer.render()}
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(Cart, "#app");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(Cart, "#app");
                    });
                } else if (btn.classList.contains("btn-removeCart")) {
                    removeCart(id, () => {
                        reRender(Cart, "#app");
                    });
                }
            });
        });
    },
};
export default Cart;