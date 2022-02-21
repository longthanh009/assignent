import $ from "jquery";
import validate from "jquery-validation";
import { Created } from "../api/users";

const Signup = {
    render() {
        return /* html */ `
        <section class="vh-100">
            <div class="container-fluid">
                <div class="row">
                <div class="col-sm-6 text-black">

                <div class="px-5 ms-xl-4">
                    <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                    style="color: #709085;"></i>
                    <span class="h1 fw-bold mb-0"><img src="img/core-img/logo.png"></span>
                </div>

                <div
                    class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                    <form style="width: 23rem;" class="mt-5" id="formSignup">
                    <div class="form-outline mb-4">
                            <label class="form-label" for="formEmail">Email Address</label>
                            <input type="email" id="formEmail" name="formEmail"
                            class="form-control form-control-lg" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="formUser">User Name</label>
                        <input type="text" id="formUser" name = "formUser"
                        class="form-control form-control-lg"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label"
                        for="formPassword">Password</label>
                        <input type="password" id="formPassword" name="formPass"
                        class="form-control form-control-lg" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label"
                        for="formConfirm">Confirm Password</label>
                        <input type="password" id="formConfirm" name="formConfirm"
                        class="form-control form-control-lg" />
                    </div>
                    <div class="pt-1 mb-4">
                        <button class="btn btn-info btn-lg btn-block"
                        >Signup</button>
                    </div>
                    <p>Your have an account? <a href="./login"
                        class="link-info">Register here</a></p>

                    </form>

                </div>

                </div>
                <div class="col-sm-6 px-0 d-none d-sm-block">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                    alt="Login image" class="w-100 vh-100"
                    style="object-fit: cover; object-position: left;">
                </div>
            </div>
            </div>
        </section>
        `;
    },
    afterRender() {
        $("#formSignup").validate({
            rules: {
                formEmail: "required",
                formUser: "required",
                formPass: "required",
                formConfirm: "required",
            },
            messages: {
                formEmail: "* Không được bỏ trống email",
                formUser: " * Phải nhập User Name",
                formPass: " * Không được để trống mật khẩu",
                formConfirm: "* Xác nhận PassWord",
            },
            submitHandler: (e) => {
                Created({
                    email: document.querySelector("#formEmail").value,
                    username: document.querySelector("#formUser").value,
                    password: document.querySelector("#formPassword").value,
                    role: 0,
                }).then((data) => {
                    localStorage.setItem("user", JSON.stringify(data.data));
                    window.location.href = "/#/";
                    alert("Đăng ký thành công");
                });
                e.reset();
            },
        });
    },
};
export default Signup;