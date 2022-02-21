import HomePage from "../pages/home";
import { reRender } from "../utils/index";

const Header = {
    render() {
        return /* html */`
        <div class="mobile-nav">
        <!-- Navbar Brand -->
        <div class="amado-navbar-brand">
            <a href="index.html"><img src="img/core-img/logo.png"
                    alt=""></a>
        </div>
        <!-- Navbar Toggler -->
        <div class="amado-navbar-toggler">
            <span></span><span></span><span></span>
        </div>
    </div>

    <!-- Header Area Start -->
    <header class="header-area clearfix">
        <!-- Close Icon -->
        <div class="nav-close">
            <i class="fa fa-close" aria-hidden="true"></i>
        </div>
        <!-- Logo -->
        <div class="logo">
            <a href="index.html"><img src="img/core-img/logo.png"
                    alt=""></a>
        </div>
        <!-- Amado Nav -->
        <nav class="amado-nav">
            <ul>
                <li class="js_active active"><a href="/#/home">Home</a></li>
                <li class="js_active"><a href="/#/products">Shop</a></li>
                <li class="js_active"><a href="/#/blogs">Blogs</a></li>
                <li class="js_active"><a href="">FEED</a></li>
            </ul>
        </nav>
        <!-- Button Group -->
        <div class="amado-btn-group mt-30 mb-100">
            <a href="#" class="btn amado-btn mb-15 btn-warning">%Discount%</a>
            <a href="#" class="btn amado-btn active">New this week</a>
        </div>
        <!-- Cart Menu -->
        <div class="cart-fav-search mb-100">
            ${localStorage.getItem("user") ? `
            <a href="/#/" class="cart-nav" id="userName"></a>
            <button class="fav-nav btn" id="logout"><img
            src="img/core-img/favorites.png" alt="" > LOGOUT</button>
        ` : `
            <a href="/#/login" class="fav-nav"><img
            src="img/core-img/favorites.png" alt=""> LOGIN</a>`}
            <a href="/#/cart" class="cart-nav"><img
                    src="img/core-img/cart.png" alt=""> Cart
                <span>(0)</span></a>
            
            <a href="#" class="search-nav"><img
                    src="img/core-img/search.png" alt=""> Search</a>
        </div>
        <!-- Social Button -->
        <div class="social-info d-flex justify-content-between">
            <a href="#"><i class="fa fa-pinterest"
                    aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-instagram"
                    aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-facebook"
                    aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
    </header>
        `;
    },
    afterRender() {
        const userName = document.querySelector("#userName");
        const btnLogout = document.querySelector("#logout");
        userName.innerHTML = JSON.parse(localStorage.getItem("user")).username;
        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("user");
            reRender(HomePage, "#app");
        });
    },
};
export default Header;