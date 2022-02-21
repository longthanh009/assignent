import toastr from "toastr";
import Header from "../../componemt/header";
import Footer from "../../componemt/footer";
import { getPro, updatePro } from "../../api/products";
import "toastr/build/toastr.min.css";
import { addToCart } from "../../utils/cart";

const ProductDetail = {
    async render(id) {
        const { data } = await getPro(id);
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
                                    <input type="search" name="search" id="search" placeholder="Type your keyword...">
                                    <button type="submit"><img src="img/core-img/search.png" alt=""></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content-wrapper d-flex clearfix">
                ${Header.render()}
            <!-- Product Details Area Start -->
            <div class="single-product-area section-padding-100 clearfix">
                <div class="container-fluid">
    
                    <div class="row">
                        <div class="col-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mt-50">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Furniture</a></li>
                                    <li class="breadcrumb-item"><a href="#">Chairs</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">white modern chair</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-12 col-lg-7">
                            <div class="single_product_thumb">
                                <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li class="active" data-target="#product_details_slider" data-slide-to="0" style="background-image: url(${data.img});">
                                        </li>
                                        <li data-target="#product_details_slider" data-slide-to="1" style="background-image: url(${data.img});">
                                        </li>
                                        <li data-target="#product_details_slider" data-slide-to="2" style="background-image: url(${data.img});">
                                        </li>
                                        <li data-target="#product_details_slider" data-slide-to="3" style="background-image: url(${data.img});">
                                        </li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <a class="gallery_img" href="${data.img}">
                                                <img class="d-block w-100" src="${data.img}" alt="First slide">
                                            </a>
                                        </div>
                                        <div class="carousel-item">
                                            <a class="gallery_img" href="${data.img}">
                                                <img class="d-block w-100" src="${data.img}" alt="Second slide">
                                            </a>
                                        </div>
                                        <div class="carousel-item">
                                            <a class="gallery_img" href="${data.img}">
                                                <img class="d-block w-100" src="${data.img}" alt="Third slide">
                                            </a>
                                        </div>
                                        <div class="carousel-item">
                                            <a class="gallery_img" href="${data.img}">
                                                <img class="d-block w-100" src="${data.img}" alt="Fourth slide">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <div class="single_product_desc">
                                <!-- Product Meta Data -->
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">$${data.price}</p>
                                    <a href="product-details.html">
                                        <h6>${data.product_name}</h6>
                                    </a>
                                    <!-- Ratings & Review -->
                                    <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                        <div class="ratings">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <!-- Avaiable -->
                                    <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
                                </div>
    
                                <div class="short_overview my-5">
                                    <p>${data.desc}</p>
                                </div>
    
                                <!-- Add to Cart Form -->
                                <form class="cart clearfix" method="post">
                                    <div class="cart-btn d-flex mb-50">
                                        <p>Qty</p>
                                        <div class="quantity">
                                            <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                            <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1">
                                            <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                    <button name="addtocart" id="addCart" class="btn btn-warning">Add to cart</button>
                                </form>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Product Details Area End -->
        </div>
        <section class="newsletter-area section-padding-100-0">
            <div class="container">
                <div class="row align-items-center">
                    <!-- Newsletter Text -->
                    <div class="col-12 col-lg-6 col-xl-7">
                        <div class="newsletter-text mb-100">
                            <h2>Subscribe for a <span>25% Discount</span></h2>
                            <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
                        </div>
                    </div>
                    <!-- Newsletter Form -->
                    <div class="col-12 col-lg-6 col-xl-5">
                        <div class="newsletter-form mb-100">
                            <form action="#" method="post">
                                <input type="email" name="email" class="nl-email" placeholder="Your E-mail">
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
    async afterRender(id) {
        const { data } = await getPro(id);
        const btnAddCart = document.querySelector("#addCart");
        btnAddCart.addEventListener("click", (e) => {
            e.preventDefault();
            const count = document.querySelector("#qty").value;
            addToCart({ ...data, quantity: +count }, () => {
                toastr.success("Thêm sản phẩm thành công");
            });
        });
        updatePro({
            id,
            product_name: data.product_name,
            price: data.price,
            sale: data.sale,
            desc: data.desc,
            img: data.img,
            catePro: data.catePro,
            view: data.view + 1,
        });
    },
};
export default ProductDetail;