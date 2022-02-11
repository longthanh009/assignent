import AdminFooter from "../../../componemt/AdminFooter";
import AdminHeader from "../../../componemt/AdminHeader";

const productAdmin = {
    render() {
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
                    <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                            <h4 class="card-title">Products</h4>
                            <p class="card-description">
                                All view
                            </p>
                            </div>
                            <div>
                            <a href="" class="btn btn-primary">Thêm</a>
                            </div>
                        </div>
                        
                        <div class="table-responsive">
                            <table class="table table-hover">
                            <thead>
                                <tr>
                                <th>STT</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Sale</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Jacob</td>
                                <td>Photoshop</td>
                                <td class="text-danger"> 28.76% <i
                                    class="ti-arrow-down"></i></td>
                                <td>
                                    <a href="" class="btn btn-sm btn-primary">Sửa</a>
                                    <a href="" class="btn btn-sm btn-danger">Xoá</a>
                                </td>
                                </tr>
                                <tr>
                                <td>1</td>

                                <td>Messsy</td>
                                <td>Flash</td>
                                <td class="text-danger"> 21.06% <i
                                    class="ti-arrow-down"></i></td>
                                <td>
                                    <a href="" class="btn btn-sm btn-primary">Sửa</a>
                                    <a href="" class="btn btn-sm btn-danger">Xoá</a>
                                </td>
                                </tr>
                                <tr>
                                <td>1</td>

                                <td>John</td>
                                <td>Premier</td>
                                <td class="text-danger"> 35.00% <i
                                    class="ti-arrow-down"></i></td>
                                <td>
                                    <a href="" class="btn btn-sm btn-primary">Sửa</a>
                                    <a href="" class="btn btn-sm btn-danger">Xoá</a>
                                </td>
                                </tr>
                                <tr>
                                <td>1</td>

                                <td>Peter</td>
                                <td>After effects</td>
                                <td class="text-success"> 82.00% <i
                                    class="ti-arrow-up"></i></td>
                                <td>
                                    <a href="" class="btn btn-sm btn-primary">Sửa</a>
                                    <a href="" class="btn btn-sm btn-danger">Xoá</a>
                                </td>
                                </tr>
                                <tr>
                                <td>1</td>

                                <td>Dave</td>
                                <td>53275535</td>
                                <td class="text-success"> 98.05% <i
                                    class="ti-arrow-up"></i></td>
                                <td>
                                    <a href="" class="btn btn-sm btn-primary">Sửa</a>
                                    <a href="" class="btn btn-sm btn-danger">Xoá</a>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                ${AdminFooter.render()}
            </div>
        </div>
    </div>`;
    },
};
export default productAdmin;