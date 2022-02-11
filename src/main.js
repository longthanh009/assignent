import Navigo from "navigo";
import categoriesIndex from "./pages/admin/categories";
import categoriAdd from "./pages/admin/categories/add";
import cateEdit from "./pages/admin/categories/edit";
import Dashboard from "./pages/admin/dasboard";
import productAdmin from "./pages/admin/products";
import productAdd from "./pages/admin/products/add";
import productEdit from "./pages/admin/products/edit";
import HomePage from "./pages/home";
import Lognin from "./pages/lognin";
import ProductsPage from "./pages/products";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on({
    "/": () => print(HomePage),
    "/home": () => print(HomePage),
    "/products": () => print(ProductsPage),
    "/admin/dashboard": () => print(Dashboard),
    "/admin": () => print(Dashboard),
    "/admin/categories": () => print(categoriesIndex),
    "/admin/categories/add": () => print(categoriAdd),
    "/admin/categories/:id/edit": ({ data }) => print(cateEdit, data.id),
    "/admin/products": () => print(productAdmin),
    "/admin/products/add": () => print(productAdd),
    "/lognin": () => print(Lognin),
    "/admin/products/:id/edit": () => print(productEdit),
});
router.resolve();