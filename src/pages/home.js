import Header from "../componemt/header";
import Footer from "../componemt/footer";

const HomePage = {
    render() {
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
<!-- Search Wrapper Area End -->

<!-- ##### Main Content Wrapper Start ##### -->
<div class="main-content-wrapper d-flex clearfix">
    ${Header.render()}
    <div class="products-catagories-area clearfix">
        <!-- slider section -->
        <section class="slider_section my-2">
            <div id="customCarousel1" class="carousel slide"
                data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container ">
                            <div class="row">
                                <div class="col-md-7 col-lg-6 d-flex">
                                    <div class="detail-box">
                                        <h1>
                                            Fast Food Restaurant
                                        </h1>
                                        <p>
                                            Doloremque, itaque aperiam
                                            facilis rerum, commodi,
                                            temporibus sapiente ad mollitia
                                            laborum quam quisquam esse error
                                            unde. Tempora ex doloremque,
                                            labore, sunt repellat dolore,
                                            iste magni quos nihil ducimus
                                            libero ipsam.
                                        </p>
                                        <div class="btn-box">
                                            <a href="" class="btn">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                    <img src="./img/product-img/pro-big-1.jpg" alt="">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container ">
                            <div class="row">
                                <div class="col-md-7 col-lg-6 d-flex">
                                    <div class="detail-box">
                                        <h1>
                                            Fast Food Restaurant
                                        </h1>
                                        <p>
                                            Doloremque, itaque aperiam
                                            facilis rerum, commodi,
                                            temporibus sapiente ad mollitia
                                            laborum quam quisquam esse error
                                            unde. Tempora ex doloremque,
                                            labore, sunt repellat dolore,
                                            iste magni quos nihil ducimus
                                            libero ipsam.
                                        </p>
                                        <div class="btn-box">
                                            <a href="" class="btn">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                    <img src="./img/product-img/pro-big-1.jpg" alt="">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container ">
                            <div class="row">
                                <div class="col-md-7 col-lg-6 d-flex">
                                    <div class="detail-box">
                                        <h1>
                                            Fast Food Restaurant
                                        </h1>
                                        <p>
                                            Doloremque, itaque aperiam
                                            facilis rerum, commodi,
                                            temporibus sapiente ad mollitia
                                            laborum quam quisquam esse error
                                            unde. Tempora ex doloremque,
                                            labore, sunt repellat dolore,
                                            iste magni quos nihil ducimus
                                            libero ipsam.
                                        </p>
                                        <div class="btn-box">
                                            <a href="" class="btn1">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                    <img src="./img/product-img/pro-big-1.jpg" alt="">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <ol class="carousel-indicators">
                        <li data-target="#customCarousel1" data-slide-to="0"
                            class="active"></li>
                        <li data-target="#customCarousel1"
                            data-slide-to="1"></li>
                        <li data-target="#customCarousel1"
                            data-slide-to="2"></li>
                    </ol>
                </div>
            </div>

        </section>
        <!-- end slider section -->
        <div class="amado-pro-catagory clearfix">

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/1.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $180</p>
                        <h4>Modern Chair</h4>
                    </div>
                </a>
            </div>

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/2.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $180</p>
                        <h4>Minimalistic Plant Pot</h4>
                    </div>
                </a>
            </div>

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/3.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $180</p>
                        <h4>Modern Chair</h4>
                    </div>
                </a>
            </div>

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/4.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $180</p>
                        <h4>Night Stand</h4>
                    </div>
                </a>
            </div>

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/5.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $18</p>
                        <h4>Plant Pot</h4>
                    </div>
                </a>
            </div>

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/6.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $320</p>
                        <h4>Small Table</h4>
                    </div>
                </a>
            </div>

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/7.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $318</p>
                        <h4>Metallic Chair</h4>
                    </div>
                </a>
            </div>

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/8.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $318</p>
                        <h4>Modern Rocking Chair</h4>
                    </div>
                </a>
            </div>

            <!-- Single Catagory -->
            <div class="single-products-catagory clearfix">
                <a href="shop.html">
                    <img src="img/bg-img/9.jpg" alt="">
                    <!-- Hover Content -->
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From $318</p>
                        <h4>Home Deco</h4>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <!-- Product Catagories Area End -->
</div>
<!-- ##### Main Content Wrapper End ##### -->

<!-- ##### Newsletter Area Start ##### -->
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
<!-- ##### Newsletter Area End ##### -->

<!-- ##### Footer Area Start ##### -->
        ${Footer.render()}
<!-- ##### Footer Area End ##### -->
        `;
    },
};
export default HomePage;