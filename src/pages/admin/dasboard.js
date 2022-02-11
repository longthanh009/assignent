import AdminFooter from "../../componemt/AdminFooter";
import AdminHeader from "../../componemt/AdminHeader";

const Dashboard = {
    render() {
        return /* html */`
            <div class="container-scroller">
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div
                class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a class="navbar-brand brand-logo mr-5" href="index.html"><img
                    src="img/logo.svg" class="mr-2" alt="logo" /></a>
                <a class="navbar-brand brand-logo-mini" href="index.html"><img
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
                    <input type="text" class="form-control" id="navbar-search-input"
                        placeholder="Search now" aria-label="search"
                        aria-describedby="search">
                    </div>
                </li>
                </ul>
                <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item dropdown">
                    <a class="nav-link count-indicator dropdown-toggle"
                    id="notificationDropdown" href="#" data-toggle="dropdown">
                    <i class="icon-bell mx-0"></i>
                    <span class="count"></span>
                    </a>
                    <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown">
                    <p class="mb-0 font-weight-normal float-left dropdown-header">
                        Notifications</p>
                    <a class="dropdown-item preview-item">
                        <div class="preview-thumbnail">
                        <div class="preview-icon bg-success">
                            <i class="ti-info-alt mx-0"></i>
                        </div>
                        </div>
                        <div class="preview-item-content">
                        <h6 class="preview-subject font-weight-normal">Application
                            Error</h6>
                        <p class="font-weight-light small-text mb-0 text-muted">
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
                        <h6 class="preview-subject font-weight-normal">Settings</h6>
                        <p class="font-weight-light small-text mb-0 text-muted">
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
                        <h6 class="preview-subject font-weight-normal">New user
                            registration</h6>
                        <p class="font-weight-light small-text mb-0 text-muted">
                            2 days ago
                        </p>
                        </div>
                    </a>
                    </div>
                </li>
                <li class="nav-item nav-profile dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                    id="profileDropdown">
                    <img src="img/face25.jpg" alt="profile" />
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
            <div class="main-panel">
                <div class="content-wrapper">
                <div class="row">
                    <div class="col-md-12 grid-margin">
                    <div class="row">
                        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                        <h3 class="font-weight-bold">Welcome Aamir</h3>
                        <h6 class="font-weight-normal mb-0">All systems are running
                            smoothly! You have <span class="text-primary">3 unread
                            alerts!</span></h6>
                        </div>
                        <div class="col-12 col-xl-4">
                        <div class="justify-content-end d-flex">
                            <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                            <button
                                class="btn btn-sm btn-light bg-white dropdown-toggle"
                                type="button" id="dropdownMenuDate2"
                                data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="true">
                                <i class="mdi mdi-calendar"></i> Today (10 Jan 2021)
                            </button>
                            <div class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuDate2">
                                <a class="dropdown-item" href="#">January - March</a>
                                <a class="dropdown-item" href="#">March - June</a>
                                <a class="dropdown-item" href="#">June - August</a>
                                <a class="dropdown-item" href="#">August - November</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                        <p class="card-title">Order Details</p>
                        <p class="font-weight-500">The total number of sessions within
                            the date range. It is the period time a user is actively
                            engaged with your website, page or app, etc</p>
                        <div class="d-flex flex-wrap mb-5">
                            <div class="mr-5 mt-3">
                            <p class="text-muted">Order value</p>
                            <h3 class="text-primary fs-30 font-weight-medium">12.3k
                            </h3>
                            </div>
                            <div class="mr-5 mt-3">
                            <p class="text-muted">Orders</p>
                            <h3 class="text-primary fs-30 font-weight-medium">14k</h3>
                            </div>
                            <div class="mr-5 mt-3">
                            <p class="text-muted">Users</p>
                            <h3 class="text-primary fs-30 font-weight-medium">71.56%
                            </h3>
                            </div>
                            <div class="mt-3">
                            <p class="text-muted">Downloads</p>
                            <h3 class="text-primary fs-30 font-weight-medium">34040
                            </h3>
                            </div>
                        </div>
                        <canvas id="order-chart"></canvas>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <p class="card-title">Sales Report</p>
                            <a href="#" class="text-info">View all</a>
                        </div>
                        <p class="font-weight-500">The total number of sessions within
                            the date range. It is the period time a user is actively
                            engaged with your website, page or app, etc</p>
                        <div id="sales-legend" class="chartjs-legend mt-4 mb-2"></div>
                        <canvas id="sales-chart"></canvas>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                        <p class="card-title">Advanced Table</p>
                        <div class="row">
                            <div class="col-12">
                            <div class="table-responsive">
                                <table id="example" class="display expandable-table"
                                style="width:100%">
                                <thead>
                                    <tr>
                                    <th>Quote#</th>
                                    <th>Product</th>
                                    <th>Business type</th>
                                    <th>Policy holder</th>
                                    <th>Premium</th>
                                    <th>Status</th>
                                    <th>Updated at</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                </table>
                            </div>
                            </div>
                        </div>
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
export default Dashboard;