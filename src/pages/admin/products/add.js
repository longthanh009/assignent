import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import { getAll } from "../../../api/categories";
import { addPro } from "../../../api/products";
import AdminFooter from "../../../componemt/AdminFooter";
import AdminHeader from "../../../componemt/AdminHeader";

const productAdd = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="container-scroller">
        <!-- partial:./partials/_navbar.html -->
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div
                class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a class="navbar-brand brand-logo mr-5" href="/admin"><img
                        src="./img/logo.svg" class="mr-2" alt="logo" /></a>
                <a class="navbar-brand brand-logo-mini" href="./index.html"><img
                        src="img/logo-mini.svg" alt="logo" /></a>
            </div>
            <div
                class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button class="navbar-toggler navbar-toggler align-self-center"
                    type="button" data-toggle="minimize">
                    <span class="icon-menu"></span>
                </button>
                <ul class="navbar-nav mr-lg-2">
                    <li class="nav-item nav-search d-none d-lg-block">
                        <div class="input-group">
                            <div class="input-group-prepend hover-cursor"
                                id="navbar-search-icon">
                                <span class="input-group-text" id="search">
                                    <i class="icon-search"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control"
                                id="navbar-search-input"
                                placeholder="Search now" aria-label="search"
                                aria-describedby="search">
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item dropdown">
                        <a class="nav-link count-indicator dropdown-toggle"
                            id="notificationDropdown" href="#"
                            data-toggle="dropdown">
                            <i class="icon-bell mx-0"></i>
                            <span class="count"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                            aria-labelledby="notificationDropdown">
                            <p
                                class="mb-0 font-weight-normal float-left dropdown-header">
                                Notifications</p>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-success">
                                        <i class="ti-info-alt mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6
                                        class="preview-subject font-weight-normal">
                                        Application
                                        Error</h6>
                                    <p
                                        class="font-weight-light small-text mb-0 text-muted">
                                        Just now
                                    </p>
                                </div>
                            </a>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-warning">
                                        <i class="ti-settings mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6
                                        class="preview-subject font-weight-normal">
                                        Settings</h6>
                                    <p
                                        class="font-weight-light small-text mb-0 text-muted">
                                        Private message
                                    </p>
                                </div>
                            </a>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-info">
                                        <i class="ti-user mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6
                                        class="preview-subject font-weight-normal">
                                        New user
                                        registration</h6>
                                    <p
                                        class="font-weight-light small-text mb-0 text-muted">
                                        2 days ago
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle" href="#"
                            data-toggle="dropdown" id="profileDropdown">
                            <img src="./images/faces/face28.jpg"
                                alt="profile" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown"
                            aria-labelledby="profileDropdown">
                            <a class="dropdown-item">
                                <i class="ti-settings text-primary"></i>
                                Settings
                            </a>
                            <a class="dropdown-item">
                                <i class="ti-power-off text-primary"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                    <li class="nav-item nav-settings d-none d-lg-flex">
                        <a class="nav-link" href="#">
                            <i class="icon-ellipsis"></i>
                        </a>
                    </li>
                </ul>
                <button
                    class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                    type="button" data-toggle="offcanvas">
                    <span class="icon-menu"></span>
                </button>
            </div>
        </nav>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
                ${AdminHeader.render()}
                <!-- partial -->
                <div class="main-panel">
                <div class="content-wrapper">
                <div class="row">
                    <div class="col-md-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">Create Product</h4>
                        <p class="card-description">
                            Create new a product in products
                        </p>
                        <form class="forms-sample" id="form-Product">
                            <div class="form-group">
                                <label for="exampleInputID">ID</label>
                                <input type="text" class="form-control"
                                    id="exampleInputID" placeholder="ID AUTO" disabled>
                                <label class="err"></label>

                            </div>
                            <div class="form-group">
                                <label for="productName">Product Name</label>
                                <input type="text" class="form-control"
                                    id="proName" placeholder="Tên sản phẩm"
                                    name = "proName">
                            </div>
                            <div class="form-group">
                                <label for="productPrice">Price</label>
                                <input type="text" class="form-control"
                                    id="proPrice"  placeholder="Giá của sản phẩm"
                                    name ="proPrice">
                            </div>
                            <div class="form-group">
                                <label for="productSale">Sale</label>
                                <input type="text" class="form-control"
                                    id="proSale"  placeholder="Giá sale của sản phẩm" value="0" name = "proSale">
                            </div>
                            <div class="form-group">
                                <label for="formFile" class="form-label">Default file input example</label>
                                <input class="form-control" type="file" id="formFile">
                                <div class="text-center my-3">
                                    <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg"
                                    alt="profile" id = "imgPreview" width="170px" style="border: 1px solid rgb(172, 171, 171);"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Categoried Products</label>
                                <select class="js-example-basic-single w-100" id="proCate" name="proCate">
                                    <option value="">Chose</option>
                                ${data.map((value) => `
                                    <option value="${value.id}">${value.name}</option>
                                `)}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="productDesc">Description</label>
                                <textarea class="form-control" name="proDesc" id="proDesc" cols="30" rows="40" placeholder="Mô tả sản phẩm"></textarea>
                            </div>
                            <div>
                                <button
                                class="btn btn-primary mr-2">Submit</button>
                                <a class="btn btn-light">Cancel</a>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                ${AdminFooter.render()}
            </div>
        </div>
    </div>
        `;
    },
    afterRender() {
        const formFile = document.querySelector("#formFile");
        const imgPreview = document.querySelector("#imgPreview");
        const url = "https://api.cloudinary.com/v1_1/df4kjrav4/image/upload";
        let imgLink = "";
        formFile.addEventListener("change", async (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        $("#form-Product").validate({
            rules: {
                proName: "required",
                proPrice: "required",
                proCate: "required",
            },
            messages: {
                proName: "Không được để trống tên sản phẩm",
                proPrice: "Giá sản phẩm",
                proCate: "Danh mục sản phẩm",
            },
            submitHandler: () => {
                async function addProduct() {
                    const file = formFile.files[0];
                    const formData = new FormData();
                    if (file) {
                        formData.append("file", file);
                        formData.append("upload_preset", "ha9jmrbt");
                        const { data } = await axios.post(url, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        imgLink = data.url;
                    }
                    addPro({
                        product_name: document.querySelector("#proName").value,
                        price: +document.querySelector("#proPrice").value,
                        sale: +document.querySelector("#proSale").value,
                        desc: document.querySelector("#proDesc").value,
                        img: imgLink || "",
                        catePro: +document.querySelector("#proCate").value,
                        view: 0,
                        createAt: JSON.stringify(new Date()),
                    });
                }
                addProduct().then(() => {
                    alert("Thêm sản phẩm thành công !");
                });
            },
        });
    },
};
export default productAdd;