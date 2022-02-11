import AdminFooter from "../../../componemt/AdminFooter";
import AdminHeader from "../../../componemt/AdminHeader";

const productEdit = {
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
                        <div class="col-md-6 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Categories</h4>
                                    <p class="card-description">
                                        Update categories
                                    </p>
                                    <form class="forms-sample">
                                        <div class="form-group">
                                            <label
                                                for="exampleInputUsername1">Username</label>
                                            <input type="text"
                                                class="form-control"
                                                id="exampleInputUsername1"
                                                placeholder="Username">
                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleInputEmail1">Email
                                                address</label>
                                            <input type="email"
                                                class="form-control"
                                                id="exampleInputEmail1"
                                                placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <label>File upload</label>
                                            <input type="file" name="img[]"
                                                class="file-upload-default">
                                            <div class="input-group col-xs-12">
                                                <input type="text"
                                                    class="form-control file-upload-info"
                                                    disabled
                                                    placeholder="Upload Image">
                                                <span
                                                    class="input-group-append">
                                                    <button
                                                        class="file-upload-browse btn btn-primary"
                                                        type="button">Upload</button>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleInputPassword1">Password</label>
                                            <input type="password"
                                                class="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleInputConfirmPassword1">Confirm
                                                Password</label>
                                            <input type="password"
                                                class="form-control"
                                                id="exampleInputConfirmPassword1"
                                                placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <label>Single select box using
                                                select 2</label>
                                            <select
                                                class="js-example-basic-single w-100">
                                                <option value="AL">Alabama
                                                </option>
                                                <option value="WY">Wyoming
                                                </option>
                                                <option value="AM">America
                                                </option>
                                                <option value="CA">Canada
                                                </option>
                                                <option value="RU">Russia
                                                </option>
                                            </select>
                                        </div>
                                        <div
                                            class="form-check form-check-flat form-check-primary">
                                            <label class="form-check-label">
                                                <input type="checkbox"
                                                    class="form-check-input">
                                                Remember me
                                            </label>
                                        </div>
                                        <button type="submit"
                                            class="btn btn-primary mr-2">Submit</button>
                                        <button
                                            class="btn btn-light">Cancel</button>
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
};
export default productEdit;