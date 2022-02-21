import Header from "../../componemt/header";
import Footer from "../../componemt/footer";
import { getAllPost } from "../../api/post";

const blogsPage = {
    async render() {
        const { data } = await getAllPost();
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
            <h1 class="text-center my-5 fw-bold">Blogs</h1>
            <div class="row">
                ${data.map((post) => /* html */`
                    <div class="col-md-4 fetured-post blog-post aos-init aos-animate" data-aos="fade-up">
                        <div class="blog-post-thumbnail-wrapper">
                            <img src="${post.img}" alt="blog post" width="100%">
                        </div>
                        <p class="blog-post-category mt-2">${post.creatPost}</p>
                        <a href="/#/blogs/${post.id}" class="blog-post-permalink">
                            <h6 class="blog-post-title">${post.content}</h6>
                        </a>
                    </div>
                `).join("")}
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
export default blogsPage;