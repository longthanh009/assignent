import Header from "../../componemt/header";
import Footer from "../../componemt/footer";
import { getPost } from "../../api/post";

const blogDetail = {
    async render(id) {
        const { data } = await getPost(id);
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
                <div class="amado-pro-catagory clearfix">
                    <div class="row justify-content-center mt-5">
                        <div class="col-lg-9 single-content">
                            <h1 class="mb-4 text-center">
                            ${data.title}
                            </h1>
                            <p class="mb-5">
                            <img src="${data.img}" alt="" width="100%">
                            </p>
                            <p>${data.content}</p>
                            <div class="pt-5">
                            <p><a href="#">Events</a> Tags: <a
                                href="#">#html</a>, <a href="#">#trends</a></p>
                        </div>
                    </div>
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
        ${Footer.render()}
<!-- ##### Footer Area End ##### -->
        `;
    },
};
export default blogDetail;