import Navigo from "navigo";
import categoriesIndex from "./pages/admin/categories";
import categoriAdd from "./pages/admin/categories/add";
import cateEdit from "./pages/admin/categories/edit";
import Dashboard from "./pages/admin/dasboard";
import postAdmin from "./pages/admin/posts";
import postsAdd from "./pages/admin/posts/add";
import postUpdate from "./pages/admin/posts/edit";
import productAdmin from "./pages/admin/products";
import productAdd from "./pages/admin/products/add";
import productEdit from "./pages/admin/products/edit";
import blogsPage from "./pages/blogs";
import blogDetail from "./pages/blogs/detail_post";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import HomePage from "./pages/home";
import Signin from "./pages/login";
import ProductPageCate from "./pages/products/cateProduct";
import ProductsPage from "./pages/products/index";
import ProductDetail from "./pages/products/product_detail";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
// router.on("/admin/*", () => {}, {
//     before(done, match) {
//         // do something
//         if (localStorage.getItem("user")) {
//             const userId = JSON.parse(localStorage.getItem("user")).role;
//             if (userId == 1) {
//                 done();
//             } else {
//                 document.location.href = "/";
//             }
//         } else {
//             document.location.href = "/";
//         }
//     },
// });
router.on({
    "/": () => print(HomePage),
    "/home": () => print(HomePage),
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(ProductDetail, data.id),
    "/products/cate/:id": ({ data }) => print(ProductPageCate, data.id),
    "/blogs": () => print(blogsPage),
    "/blogs/:id": ({ data }) => print(blogDetail, data.id),
    "/cart": () => print(Cart),
    "/checkout": () => print(Checkout),
    "/admin/dashboard": () => print(Dashboard),
    "/admin": () => print(Dashboard),
    "/admin/categories": () => print(categoriesIndex),
    "/admin/categories/add": () => print(categoriAdd),
    "/admin/categories/:id/edit": ({ data }) => print(cateEdit, data.id),
    "/admin/products": () => print(productAdmin),
    "/admin/products/:id/edit": ({ data }) => print(productEdit, data.id),
    "/admin/products/add": () => print(productAdd),
    "/admin/posts": () => print(postAdmin),
    "/admin/posts/add": () => print(postsAdd),
    "/admin/posts/:id/edit": ({ data }) => print(postUpdate, data.id),
    "/login": () => print(Signin),
    "/signup": () => print(Signup),
});
router.resolve();