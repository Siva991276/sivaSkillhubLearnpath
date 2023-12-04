import React from "react";

import logo from "../src/All Images/Logo133.jpeg";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./FooterSkill";

import "react-toastify/dist/ReactToastify.css";
function RecentCourses() {
  return (
    <div>
      {/* <div className="container">
        <div className="row"> */}
      <nav class="  shadow navbar navbar-expand-sm">
        <div class="container">
          <img src={logo} alt="logo" width="200px" />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ backgroundcolor: "black" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="col-12 col-md-1"></div>
            <ul class="navbar-nav logostyle">
              <li class="nav-item">
                <a class="nav-link  mx-2 text-dark  " href="/Assessment">
                  ASSESSMENT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2 text-dark  " href="">
                  COURSES
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link mx-2  text-dark " href="#">
                  CODE#
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  mx-2  text-dark" href="#">
                  PRACTICE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  mx-2 text-dark " href="/PaymentMethod ">
                  BLOGS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2  text-dark " href="/Dashboard ">
                  DASHBOARD
                </a>
              </li>
              <div className="col-12 col-md-1"></div>
              <li class="nav-item">
                <button className="btn bg-dark text-white">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Your Recent Courses</h3>
          </div>
          <div className="col-12 card shadow m-1">
            <div className="p-2">
              <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-5">
                  <h5 style={{ fontWeight: "800" }}>JAVA Beginner</h5>
                  <h6>Amampred ne: Nov 15 2023, 10:44:46 AM</h6>
                </div>
                <div className="col-12 col-md-5"></div>
                <div className="m-2 col-12 col-md-4">
                  <button className="p-1 bg-success text-white btn btn-block">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 card shadow m-1">
            <div className="p-2">
              <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-5">
                  <h5 style={{ fontWeight: "800" }}>Data Structure Beginner</h5>
                  <h6>Amampred ne: Nov 15 2023, 10:44:46 AM</h6>
                </div>
                <div className="col-12 col-md-5"></div>
                <div className="m-2 col-12 col-md-4">
                  <button className="p-1 bg-success text-white btn btn-block">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 card shadow m-1">
            <div className="p-2">
              <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-5">
                  <h5 style={{ fontWeight: "800" }}>JAVA Advanced</h5>
                  <h6>Amampred ne: Nov 15 2023, 10:44:46 AM</h6>
                </div>
                <div className="col-12 col-md-5"></div>
                <div className="m-2 col-12 col-md-4">
                  <button className="p-1 bg-success text-white btn btn-block">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 card shadow m-1">
            <div className="p-2">
              <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-5">
                  <h5 style={{ fontWeight: "800" }}>JAVA OOPS</h5>
                  <h6>Amampred ne: Nov 15 2023, 10:44:46 AM</h6>
                </div>
                <div className="col-12 col-md-5"></div>
                <div className="m-2 col-12 col-md-4">
                  <button className="p-1 bg-success text-white btn btn-block">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 card shadow m-1">
            <div className="p-2">
              <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-5">
                  <h5 style={{ fontWeight: "800" }}>Data Structures Advanced</h5>
                  <h6>Amampred ne: Nov 15 2023, 10:44:46 AM</h6>
                </div>
                <div className="col-12 col-md-5"></div>
                <div className="m-2 col-12 col-md-4">
                  <button className="p-1 bg-success text-white btn btn-block">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* </div>
      </div> */}
      <Footer />
    </div>
  );
}
export default RecentCourses;
