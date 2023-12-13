import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import sideimage from "./All Images/Logo133.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import siva from "../src/All Images/Siva Image.jpeg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const PerfexHome = () => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	const [isNavVisible, setIsNavVisible] = useState(false);
	const [addblogslist, setAddblogslist] = useState([]);
	const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
	const [showUsersOptions, setShowUsersOptions] = useState([]);

	useEffect(() => {
		fetchblogs();
		fetchblogs1();
		if (token == undefined) {
			navigate("/");
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
	};

	const fetchblogs1 = async () => {
		const api = "http://localhost:4010/allUsersData";
		const authToken =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
		try {
			const response = await axios.get(api, {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			});
			setShowUsersOptions(response.data);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	const fetchblogs = async () => {
		const api = "http://localhost:4010/allAddInstitutes";
		const authToken =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
		try {
			const response = await axios.get(api, {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			});
			setAddblogslist(response.data);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};

	const [isNavOpen, setIsNavOpen] = useState(false);

	const openNav = () => {
		setIsNavOpen(true);
	};

	const closeNav = () => {
		setIsNavOpen(false);
	};

	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		menuBtnChange();
	};

	const menuBtnChange = () => {
		const sidebar = document.querySelector(".sidebar");
		const closeBtn = document.querySelector("#btn");
		const searchBtn = document.querySelector(".bx-search");

		if (sidebar?.classList.contains("open")) {
			closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right");
		} else {
			closeBtn?.classList.replace("bx-menu-alt-right", "bx-menu");
		}
	};
	const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);

	const toggleInstitutions = () => {
		setIsInstitutionsOpen(!isInstitutionsOpen);
	};
	const [isInstitutionsOpen1, setIsInstitutionsOpen1] = useState(true);

	const toggleInstitutions1 = () => {
		setIsInstitutionsOpen1(!isInstitutionsOpen1);
	};
	const [isInstitutionsOpen2, setIsInstitutionsOpen2] = useState(true);

	const toggleInstitutions2 = () => {
		setIsInstitutionsOpen2(!isInstitutionsOpen2);
	};
	// const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	// 		  const toggleSidebar1 = () => {
	// 			  setIsSidebarOpen(!isSidebarOpen);
	// 		  };
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					{isOpen && (
						<div className="col-12 col-lg-3 col-md-12 sectioncard1">
							<Sidebar />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
						{" "}
						<div className="">
							<i
								className="fa-solid fa-bars bars  d-lg-block d-none"
								onClick={toggleSidebar}
							></i>
						</div>
						<div className="p-3 card_item">
							<div class="text-start">
								<h6 className="welcometo">Welcome back !</h6>
								<h4>Skillhub Dashboard</h4>
								<div className="row my-4">
									<div
										className="  col-12 col-md-2 p-1 text-center"
									>
										<a href="/AdminDashboard">
											<button class="buttons212 m-2 ">Institute Count</button>
										</a>
                    <div>
                    <span className="count098 mx-3 ">
											{addblogslist.length}
										</span>
                    </div>
										
									</div>

									<div className=" col-12 col-md-2 text-center  p-1">
										<a href="/UsersDetails">
											<button class="buttons212 m-2 ">Users</button>
										</a>
                      <div>
                      <span className="count098 mx-3 ">
											{showUsersOptions.length}
										</span>
                      </div>
										
									</div>
									<div className="text-center col-12 col-lg-2 col-md-3  p-1">
										<a href="/UsersDetails">
											<button class="buttons212 m-2 ">Active Users</button>
										</a>
                      <div >
                      <span className="count098 mx-3 ">
											{showUsersOptions.length}
										</span>
                      </div>
									
									</div>
									<div className="text-center col-12 col-lg-2 col-md-3 p-1">
										<a href="/AdminDashboard">
											<button class="buttons212 m-2 ">Assessment</button>
										</a>
                    <div>
										<span className="count098 mx-3 ">0</span>
                    </div>
									</div>
									<div className="text-center col-12 col-lg-2 col-md-3   p-1">
										<a href="/AdminDashboard">
											<button class="buttons212 m-2 ">Course</button>
										</a>
                      <div>
                      <span className="count098 mx-3 ">0</span>

                      </div>
									</div>
									<div className=" text-center col-12 col-lg-2 col-md-3 p-1">
										<a href="/AdminDashboard">
											<button class="buttons2121 m-2 ">Questions</button>
										</a>
                    <div>
										<span className="count098 mx-3 ">1</span>

                    </div>
									</div>
								</div>
								<div
									className="row my-4"
								>
									<div className=" col-12 col-lg-2 col-md-3 text-center">
										<a href="/AdminDashboard">
											<button class="buttons212 m-2 ">
												Assessment Participation
											</button>
										</a>
                    <div className="text-center">
										<span className="count098  ">17</span>
                    </div>
									</div>

									<div className="col-12 col-lg-2 col-md-3  text-center">
										<a href="/AdminDashboard">
											<button class="buttons2121 m-2">
												Questions Attempted
											</button>
										</a>
                    <div className="text-center">
										<span className="count098  ">219</span>

                    </div>
									</div>
									<div className=" col-12 col-lg-2 col-md-3 text-center">
										<a href="/AdminDashboard">
											<button class="buttons2121 m-2 ">
												Coding Submissions
											</button>
										</a>
                    <div className="text-center">
										<span className="count098  ">0</span>

                    </div>
									</div>
									<div className=" col-12 col-lg-2 col-md-3 text-center ">
										<a href="/AdminDashboard">
											<button class="buttons2121 m-2 ">
												Tastcases Executed
											</button>
										</a>
                      <div className="text-center">
                      <span className="count098  ">0</span>
                      </div>
									</div>
									<div className=" col-12 col-lg-2 col-md-3 text-center">
										<a href="/AdminDashboard">
											<button class="buttons2121 m-2">Courses Enrolled</button>
										</a>
                    <div className="text-center">
										<span className="count098  ">15</span>

                    </div>
									</div>
                  <div className=" col-12 col-lg-2 col-md-3 text-center">
										<a href="/AdminDashboard">
											<button
												class="buttons212 m-2 "
												style={{
													textDecoration: "none",
													color: "green",
												}}
											>
												RT Tests
											</button>
										</a>
                        <div className="text-center">
                        <span className="count098  ">17</span>
                        </div>
									</div>
								</div>
								<div className=" row my-4" >
									

									<div className=" col-12 col-lg-6 col-md-6 p-2 text-center">
										<a href="/AdminDashboard">
											<button class="buttons2121 m-2 ">
												Speaking Evaluations
											</button>
										</a>
										<div className=" text-center">
											<div>
												<p className="count09812  ">0/0</p>
												<p className="count0981 ">Usage/Limit</p>
											</div>
											<div className="mx-5">
												<p className="count09812  ">RS. 0</p>
												<p className="count0981 ">Total Cost</p>
											</div>
										</div>
									</div>
									<div className=" col-12 col-lg-6 col-md-6 p-2 text-center">
										<a href="/AdminDashboard">
											<button class="buttons2121 m-2 ">
												Writing Evaluations
											</button>
										</a>
										<div className="text-center">
											<div>
												<p className="count09812  ">0/0</p>
												<p className="count0981 ">Usage/Limit</p>
											</div>
											<div className="mx-5">
												<p className="count09812  ">RS. 0</p>
												<p className="count0981 ">Total Cost</p>
											</div>
										</div>
									</div>
								</div>

								{/* <a href="/">
                      <button class="buttons1 col-12 col-md-3  mx-2">
                        Users
                      </button>
                    </a> */}
								{/* <a href="/">
                      <button class="buttons1 col-12 col-md-3 mx-2  ">
                        Active Users
                      </button>
                    </a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PerfexHome;
