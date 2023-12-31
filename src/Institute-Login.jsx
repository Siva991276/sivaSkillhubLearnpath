import { Link } from "react-router-dom";
import React from "react";
import sideimage from "./All Images/Logo133.jpeg";
import Login from "./All Images/Login-Page.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiList from "./liberary/apiList";
import Cookies from 'js-cookie';

function InstituteLogin() {
  let navigate = useNavigate();

  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const isValidEmail = (UserEmail) => {
    // A simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(UserEmail);
  };

  console.log(UserEmail);
  const usersData = {
    UserEmail: UserEmail,
    UserPassword: UserPassword,
  };
  console.log(usersData);

  const onSubmitBtn = (e) => {
    e.preventDefault();

    if (UserEmail && UserPassword !== "") {
      if (!isValidEmail(UserEmail, UserPassword)) {
        toast.error("Enter a valid UserEmail address", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      const userData = { UserEmail, UserPassword };

      axios
        .post(`${apiList.Userlogin}`, userData)
        .then((response) => {
          if (response.status === 200) {
            let jwtToken = response.data.token;
            Cookies.set("token", jwtToken);

            toast.success("Successfully logged in!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(function () {
              navigate("/PerfexHome");
            }, 3000);
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
              if (error.response.data.message === "Email not found") {
                toast.error(
                  "UserEmail not found. Please check your UserEmail.",
                  {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  }
                );
              } else if (error.response.data.message === "Incorrect password") {
                toast.error("Incorrect password. Please check your password.", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }
            } else {
              toast.error(
                "An error occurred on the server. Please try again later.",
                {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                }
              );
            }
          } else {
            toast.error(
              "An error occurred. Please check your network connection and try again.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
            console.error(error);
          }
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };

  const [loginpassword, setloginpassword] = useState(false);

  const ShowcomfirmPassword = () => {
    setloginpassword(!loginpassword);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     navigate("/Dashboard");
  //   }
  // }, []);
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      navigate("/PerfexHome");
    }
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="container51">
            <div class="container mt-5">
              <div class="row">
                <div class="col-12 col-md-4 d-none d-md-block">
                  <div class=" mt-5">
                    <img
                      src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
                      alt={sideimage}
                      className=""
                    />
                  </div>
                </div>
                <div class="col-12 col-md-2"></div>
                <div class="col-12 col-md-6 mt-5">
                  <div class="card shadow logincard1 ">
                    <div class="loginheader">
                      <Link to="/UserLogin">
                        <img
                          src={sideimage}
                          alt={sideimage}
                          className="w-25 m-2"
                        />
                      </Link>
                    </div>

                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />

                    <ToastContainer />
                    <form className="forms2" onSubmit={onSubmitBtn}>
                      <label className="heading123 m-2">Email ID</label>
                      <br />
                      <input
                        type="text"
                        className="p1 p-3"
                        style={{ border: "1px solid #c9bed7" }}
                        placeholder="  Enter your UserEmail ID"
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={UserEmail}
                      />
                      <br />

                      <div className="input-with-icon">
                        <label className="heading123 m-2">Password</label>
                        <br />
                        <div className="">
                          <input
                            type={loginpassword ? "text" : "password"}
                            className="p-3 p10912"
                            style={{ border: "1px solid #c9bed7" }}
                            placeholder="   Minimum 6 characters"
                            onChange={(e) => setUserPassword(e.target.value)}
                            value={UserPassword}
                          />
                          <i
                            class="fa-regular fa-eye icon1"
                            onClick={ShowcomfirmPassword}
                          ></i>
                        </div>
                      </div>

                      <a
                        href="/ForgotPassword"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="forgetpassword1">
                          Forgot password?
                        </span>
                      </a>
                      <br />

                      <button
                        class=" col-12 col-md-3 Registerbtn11  mb-3 p-2 m-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </form>
                    {/* <form className="forms2" onSubmit={onSubmitBtn1}>
                      <label className="heading123 m-2">Email ID</label>
                      <br />
                      <input
                        type="text"
                        className="p1"
                        style={{ border: "1px solid #c9bed7" }}
                        placeholder="  Enter your UserEmail ID"
                        onChange={(e) => setuserEmail(e.target.value)}
                        value={userEmail}
                      />
                      <br />

                      <div className="input-with-icon">
                        <label className="heading123 m-2">Password</label>
                        <br />
                        <div className="">
                          <input
                            type={loginpassword ? "text" : "password"}
                            className="p-2 p10912"
                            style={{ border: "1px solid #c9bed7" }}
                            placeholder="   Minimum 6 characters"
                            onChange={(e) => setPassword(e.target.value)}
                            value={Password}
                          />
                          <i
                            class="fa-regular fa-eye icon1"
                            onClick={ShowcomfirmPassword}
                          ></i>
                        </div>
                      </div>

                      <a
                        href="/ForgotPassword"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="forgetpassword1">
                          Forgot password?
                        </span>
                      </a>
                      <br />

                      <button
                        class=" col-12 col-md-3 Registerbtn11  mb-3 p-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InstituteLogin;
