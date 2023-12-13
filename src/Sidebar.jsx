import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import sideimage from "./All Images/Logo133.jpeg";
import { Link } from "react-router-dom";
import siva from "../src/All Images/Siva Image.jpeg";

function Sidebar() {
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

	const [isNavLinksVisible, setIsNavLinksVisible] = useState(false);

	const toggleNavLinks = () => {
		setIsNavLinksVisible(!isNavLinksVisible);
	};

	const menuBtnChange = () => {
		const sidebar = document.querySelector(".sidebar");
		const closeBtn = document.querySelector("#btn");
		const searchBtn = document.querySelector(".bx-search");

		if (sidebar.classList.contains("open")) {
			closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
		} else {
			closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
		}
	};
	const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);

	const toggleInstitutions = () => {
		setIsInstitutionsOpen(!isInstitutionsOpen);
	};
	const [isQuestionbankOpen, setIsQuestionbankOpen] = useState(false);

	const toggleQuestionBank = () => {
		setIsQuestionbankOpen(!isQuestionbankOpen);
	};
	const [isSelfcreatedQBOpen, setIsSelfcreatedQBOpen] = useState(false);

	const toggleSelfCreatedQB = () => {
		setIsSelfcreatedQBOpen(!isSelfcreatedQBOpen);
	};
	const [isMcqOpen, setIsMcqOpen] = useState(false);

	const toggleMCQ = () => {
		setIsMcqOpen(!isMcqOpen);
	};
	const [isParagQuestionOpen, setIsParagQuestionOpen] = useState(false);

	const toggleParagQuestions = () => {
		setIsParagQuestionOpen(!isParagQuestionOpen);
	};
	const [isCodingQuestionOpen, setIsCodingQuestionOpen] = useState(false);

	const toggleCodingQuestions = () => {
		setIsCodingQuestionOpen(!isCodingQuestionOpen);
	};

	const [isInstitutionsOpen1, setIsInstitutionsOpen1] = useState(true);

	const toggleInstitutions1 = () => {
		setIsInstitutionsOpen1(!isInstitutionsOpen1);
	};
	const [isInstitutionsOpen2, setIsInstitutionsOpen2] = useState(true);

	const toggleInstitutions2 = () => {
		setIsInstitutionsOpen2(!isInstitutionsOpen2);
	};

	const [isSidebarOpen, setSidebarOpen] = useState(true);
	//   const toggleSidebar = () => {
	//     setSidebarOpen(!isSidebarOpen);
	//   };
	//   const [isOpen, setisOpen] = useState(false);
	// 	const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);

	// 	const toggle = () => setisOpen(!isOpen);
	// 	const toggleInstitutions = () => setIsInstitutionsOpen(!isInstitutionsOpen);

	const [islearnOpen, setIslearnOpen] = useState(false);

	const togglelearnopen = () => setIslearnOpen(!islearnOpen);

	return (
		<div>
			<div className="side_item d-none d-lg-block">
				<div
					className={`sidebar ${isOpen ? "open" : ""}`}
					style={{ height: "100vh", overflowY: "scroll" }}
				>
					<div class="logo_details  ">
						<div class="logo_name fixed-top">
							{" "}
							<img
								src={sideimage}
								alt="logo"
								width="150px"
								style={{ borderRadius: "7px" }}
							/>
						</div>
						{/* <i
              id="btn"
              onClick={toggleSidebar}
              className={`bx bx-menu ${
                isOpen ? "bx-menu-alt-right" : "bx-menu"
              }`}
            ></i> */}
					</div>
					<ul class="nav-list">
						<li>
							<span class="tooltip">Dashboard</span>
						</li>
						<li>
							<a href="#" className="">
								<i class="bx bx-grid-alt"></i>
								<span class="link_name">Dashboard</span>
							</a>
							{/* <span class="tooltip">Dashboard</span> */}
						</li>
						<li>
							<a href="/PerfexHome">
								<i class="fa-solid fa-house "></i>

								<span class="link_name">HomePage</span>
							</a>
							{/* <span class="tooltip">HomePage</span> */}
						</li>
						<li
							className="d-flex justify-content-between align-items-center"
							onClick={toggleInstitutions}
						>
							<div>
								<a href="#">
									<i class="fa-solid fa-ellipsis-vertical"></i>
									<span className="link_name ">INSTITUTIONS </span>
								</a>
							</div>
							<div>
								<i className="fa-solid fa-chevron-down"></i>
							</div>

							<span className="tooltip">Institutions</span>
						</li>
						{isInstitutionsOpen && (
							<div className="icons_items">
								<li>
									<a href="./AdminDashboard">
										<i className="fa-solid fa-building-columns icons"></i>
										<span className="link_name">institutions</span>
									</a>
									{/* <span className="tooltip">institutions</span> */}
								</li>
								<li>
									<a href="/BatchYear">
										<i class="fa-solid fa-calendar-days icons"></i>
										<span className="link_name">Batch Years</span>
									</a>
									{/* <span className="tooltip">Batch Years</span> */}
								</li>
								<li>
									<a href="/Batches">
										<i className="fa-solid fa-building-columns icons"></i>
										<span className="link_name">Batches</span>
									</a>
									{/* <span className="tooltip">Batches</span> */}
								</li>
								<li>
									<a href="/UsersDetails">
										<i className="fa-solid fa-user icons"></i>
										<span className="link_name">Users</span>
									</a>
									{/* <span className="tooltip">Users</span> */}
								</li>
								<li>
									<a href="/SearchOption">
										<i className="fa-brands fa-searchengin icons"></i>
										<span className="link_name">Search Users</span>
									</a>
									{/* <span className="tooltip">Search Users</span> */}
								</li>
							</div>
						)}
						<li
							className="d-flex justify-content-between"
							onClick={toggleQuestionBank}
						>
							<div>
								<a href="#">
									<i class="fa-solid fa-ellipsis-vertical"></i>
									<span className="link_name ">QUESTION BANK </span>
								</a>
							</div>
							<div>
								<i className="fa-solid fa-chevron-down"></i>
							</div>
						</li>
						{isQuestionbankOpen && (
							<div className="icons_items">
								<li onClick={toggleSelfCreatedQB}>
									<a href="#">
										<i class="fa-solid fa-circle-dot icons"></i>
										<Link to="#">
											<span className="link_name">Self Created QB</span>
										</Link>
									</a>
								</li>
								{isSelfcreatedQBOpen && (
									<div className="icons_items">
										<li>
											<a href="/QbSubject">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/QbSubject">
													<span className="link_name">subjects</span>
												</Link>
											</a>
											{/* <span className="tooltip">subjects</span> */}
										</li>
										<li>
											<a href="/Chapter">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/Chapter">
													<span className="link_name">chapters</span>
												</Link>
											</a>
											{/* <span className="tooltip">chapters</span> */}
										</li>
									</div>
								)}
								<li onClick={toggleMCQ}>
									<a href="#">
										<i class="fa-solid fa-circle-dot icons"></i>
										<span className="link_name">MCQ Questions</span>
									</a>
								</li>
								{isMcqOpen && (
									<div className="icons_items">
										<li>
											<a href="/CreateQuestion">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/CreateQuestion">
													<span className="link_name">create</span>
												</Link>
											</a>
											{/* <span className="tooltip">create</span> */}
										</li>
										<li>
											<a href="/McqView">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/McqView">
													<span className="link_name">View</span>
												</Link>
											</a>
											{/* <span className="tooltip">View</span> */}
										</li>
										<li>
											<a href="/upload">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/upload">
													<span className="link_name">Upload</span>
												</Link>
											</a>
											{/* <span className="tooltip">Upload</span> */}
										</li>
									</div>
								)}
								<li onClick={toggleParagQuestions}>
									<a href="#">
										<i class="fa-solid fa-circle-dot icons"></i>
										<Link to="#">
											<span className="link_name">Parag MCQ Questions</span>
										</Link>
									</a>
									{/* <span className="tooltip">Parag MCQ Questions</span> */}
								</li>
								{isParagQuestionOpen && (
									<div className="icons_items">
										<li>
											<a href="/ParagHome">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/ParagHome">
													<span className="link_name">Create</span>
												</Link>
											</a>
											{/* <span className="tooltip">Create</span> */}
										</li>
										<li>
											<a href="/ParagView">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/ParagView">
													<span className="link_name">View</span>
												</Link>
											</a>
											{/* <span className="tooltip">View</span> */}
										</li>
									</div>
								)}
								<li onClick={toggleCodingQuestions}>
									<a href="#">
										<i class="fa-solid fa-circle-dot icons"></i>
										<Link to="#">
											<span className="link_name">Coding Questions</span>
										</Link>
									</a>
									{/* <span className="tooltip">Coding Questions</span> */}
								</li>
								{isCodingQuestionOpen && (
									<div className="icons_items">
										<li>
											<a href="/Coding">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/Coding">
													<span className="link_name">Create</span>
												</Link>
											</a>
											{/* <span className="tooltip">Create</span> */}
										</li>
										<li>
											<a href="#">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/Codingview">
													<span className="link_name">View</span>
												</Link>
											</a>
											{/* <span className="tooltip">View</span> */}
										</li>
									</div>
								)}
								<li onClick={toggleCodingQuestions}>
									<a href="/AssignQB">
										<i class="fa-solid fa-circle-dot icons"></i>
										<Link to="/AssignQB">
											<span className="link_name">Assign QB</span>
										</Link>
									</a>
									{/* <span className="tooltip">Assign QB</span> */}
								</li>
							</div>
						)}
						<li
							className="d-flex justify-content-between"
							onClick={toggleInstitutions1}
						>
							<div>
								<a href="#">
									<i class="fa-solid fa-ellipsis-vertical"></i>
									<span className="link_name ">LEARNING PATH </span>
								</a>
							</div>
							<div>
								<i className="fa-solid fa-chevron-down"></i>
							</div>
						</li>
						{isInstitutionsOpen1 && (
							<div className="icons_items">
								<li onClick={toggleInstitutions2}>
									<a href="#">
										<i class="fa-solid fa-school icons"></i>

										<span className="link_name">Learning Path</span>
									</a>
									{/* <span className="tooltip">Learning Path</span> */}
								</li>
								{isInstitutionsOpen2 && (
									<div className="icons_items">
										<li>
											<a href="#">
												<i class="fa-solid fa-chalkboard icons"></i>
												<Link to="/Learn">
													<span className="link_name">Learning Path</span>
												</Link>
											</a>
											{/* <span className="tooltip">Learning Path</span> */}
										</li>
										<li>
											<a href="#">
												<i class="fa-solid fa-video icons"></i>
												<Link to="/LearnPath">
													<span className="link_name">Video Folders</span>
												</Link>
											</a>
											{/* <span className="tooltip">Video Folders</span> */}
										</li>
										<li>
											<a href="#">
												<i class="fa-solid fa-record-vinyl icons"></i>
												<span className="link_name">Reports</span>
											</a>
											{/* <span className="tooltip">Reports</span> */}
										</li>
									</div>
								)}

								<li>
									<a href="#">
										<i class="fa-brands fa-accessible-icon icons"></i>
										<span className="link_name">Access</span>
									</a>
									{/* <span className="tooltip">Access</span> */}
								</li>
							</div>
						)}
						<li className="profile " >
							<div className="fixed-bottom d-flex login_profile">
								<div>
									<i className="fa-solid fa-user"></i>
								</div>
								{/* <img src='' alt="profile image" /> */}
								<div class="profile_content">
									<div class="name">Sai </div>
									<div class="designation">Admin</div>
								</div>
								<div>
									<i
										class="bx bx-log-out"
										id="log_out"
										onClick={handleLogout}
									></i>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark d-lg-none d-md-block p-0 ">
				<div className="container-fluid">
					<NavLink to="/" className="navbar-brand">
						<img src={sideimage} className="img-fluid skill_img " alt="img" />
					</NavLink>
					{/* Toggle button for the sidebar */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={toggleNavLinks}
					>
						{/* <span className="navbar-toggler-icon"></span> */}
						<i className="fa-solid fa-bars "></i>
					</button>

					{/* Brand/logo */}

					{/* Navbar links */}
					<div
						className={`collapse navbar-collapse p-3 ${
							isNavLinksVisible ? "show" : ""
						}`}
						id="navbarNav"
						style={{ backgroundColor: "transparent", height: "100%" }}
					>
						<ul class="nav-list">
							
							<li>
								<a href="#" className="" style={{fontSize:"15px"}}>
									<i class="bx bx-grid-alt "></i>
									<span class="link_name" style={{paddingLeft:"10px"}}>Dashboard</span>
								</a>
								{/* <span class="tooltip">Dashboard</span> */}
							</li>
							<li className="mt-2">
								<a href="/PerfexHome" style={{fontSize:"15px"}}>
									<i class="fa-solid fa-house "></i>

									<span class="link_name"  style={{paddingLeft:"10px"}}>HomePage</span>
								</a>
								{/* <span class="tooltip">HomePage</span> */}
							</li>
							<li
								className="d-flex justify-content-between align-items-center mt-2"
								onClick={toggleInstitutions}
							>
								<div>
									<a href="#" style={{fontSize:"15px"}}>
										<i class="fa-solid fa-ellipsis-vertical"></i>
										<span className="link_name "  style={{paddingLeft:"10px"}}>INSTITUTIONS </span>
									</a>
								</div>
								<div>
									<i className="fa-solid fa-chevron-down"></i>
								</div>

								<span className="tooltip">Institutions</span>
							</li>
							{isInstitutionsOpen && (
								<div className="icons_items">
									<li className="mt-2">
										<a href="./AdminDashboard" style={{fontSize:"15px"}}>
											<i className="fa-solid fa-building-columns icons"></i>
											<span className="link_name" style={{paddingLeft:"10px"}}>institutions</span>
										</a>
										{/* <span className="tooltip">institutions</span> */}
									</li>
									<li className="mt-2">
										<a href="/BatchYear" style={{fontSize:"15px"}}>
											<i class="fa-solid fa-calendar-days icons" ></i>
											<span className="link_name" style={{paddingLeft:"10px"}}>Batch Years</span>
										</a>
										{/* <span className="tooltip">Batch Years</span> */}
									</li>
									<li className="mt-2">
										<a href="/Batches" style={{fontSize:"15px"}}>
											<i className="fa-solid fa-building-columns icons"></i>
											<span className="link_name" style={{paddingLeft:"10px"}}>Batches</span>
										</a>
										{/* <span className="tooltip">Batches</span> */}
									</li>
									<li className="mt-2">
										<a href="/UsersDetails" style={{fontSize:"15px"}}>
											<i className="fa-solid fa-user icons"></i>
											<span className="link_name" style={{paddingLeft:"10px"}}>Users</span>
										</a>
										{/* <span className="tooltip">Users</span> */}
									</li>
									<li className="mt-2">
										<a href="/SearchOption"  style={{fontSize:"15px"}}>
											<i className="fa-brands fa-searchengin icons"></i>
											<span className="link_name" style={{paddingLeft:"10px"}}>Search Users</span>
										</a>
										{/* <span className="tooltip">Search Users</span> */}
									</li>
								</div>
							)}
							<li
								className="d-flex justify-content-between"
								onClick={toggleQuestionBank}
							>
								<div className="mt-2">
									<a href="#">
										<i class="fa-solid fa-ellipsis-vertical"></i>
										<span className="link_name " style={{paddingLeft:"10px"}}>QUESTION BANK </span>
									</a>
								</div>
								<div>
									<i className="fa-solid fa-chevron-down"></i>
								</div>
							</li>
							{isQuestionbankOpen && (
								<div className="icons_items">
									<li onClick={toggleSelfCreatedQB} className="mt-2">
										<a href="#" style={{fontSize:"15px"}}>
											<i class="fa-solid fa-circle-dot icons"></i>
											<Link to="#">
												<span className="link_name" style={{paddingLeft:"10px"}}>Self Created QB</span>
											</Link>
										</a>
									</li>
									{isSelfcreatedQBOpen && (
										<div className="icons_items">
											<li className="mt-2">
												<a href="/QbSubject" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/QbSubject">
														<span className="link_name" style={{paddingLeft:"10px"}}>subjects</span>
													</Link>
												</a>
												{/* <span className="tooltip">subjects</span> */}
											</li>
											<li className="mt-2">
												<a href="/Chapter" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/Chapter">
														<span className="link_name" style={{paddingLeft:"10px"}}>chapters</span>
													</Link>
												</a>
												{/* <span className="tooltip">chapters</span> */}
											</li>
										</div>
									)}
									<li onClick={toggleMCQ} className="mt-2">
										<a href="#" style={{fontSize:"15px"}}>
											<i class="fa-solid fa-circle-dot icons"></i>
											<span className="link_name" style={{paddingLeft:"10px"}}>MCQ Questions</span>
										</a>
									</li>
									{isMcqOpen && (
										<div className="icons_items">
											<li className="mt-2">
												<a href="/CreateQuestion" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/CreateQuestion">
														<span className="link_name" style={{paddingLeft:"10px"}}>create</span>
													</Link>
												</a>
												{/* <span className="tooltip">create</span> */}
											</li>
											<li className="mt-2">
												<a href="/McqView" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/McqView">
														<span className="link_name" style={{paddingLeft:"10px"}}>View</span>
													</Link>
												</a>
												{/* <span className="tooltip">View</span> */}
											</li>
											<li className="mt-2">
												<a href="/upload" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/upload">
														<span className="link_name" style={{paddingLeft:"10px"}}>Upload</span>
													</Link>
												</a>
												{/* <span className="tooltip">Upload</span> */}
											</li>
										</div>
									)}
									<li onClick={toggleParagQuestions}  className="mt-2">
										<a href="#" style={{fontSize:"15px"}}>
											<i class="fa-solid fa-circle-dot icons"></i>
											<Link to="#">
												<span className="link_name" style={{paddingLeft:"10px"}}>Parag MCQ Questions</span>
											</Link>
										</a>
										{/* <span className="tooltip">Parag MCQ Questions</span> */}
									</li>
									{isParagQuestionOpen && (
										<div className="icons_items">
											<li className="mt-2">
												<a href="/ParagHome" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/ParagHome">
														<span className="link_name" style={{paddingLeft:"10px"}}>Create</span>
													</Link>
												</a>
												{/* <span className="tooltip">Create</span> */}
											</li>
											<li className="mt-2">
												<a href="/ParagView" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/ParagView">
														<span className="link_name" style={{paddingLeft:"10px"}}>View</span>
													</Link>
												</a>
												{/* <span className="tooltip">View</span> */}
											</li>
										</div>
									)}
									<li onClick={toggleCodingQuestions} className="mt-2">
										<a href="#" style={{fontSize:"15px"}}>
											<i class="fa-solid fa-circle-dot icons"></i>
											<Link to="#">
												<span className="link_name" style={{paddingLeft:"10px"}}>Coding Questions</span>
											</Link>
										</a>
										{/* <span className="tooltip">Coding Questions</span> */}
									</li>
									{isCodingQuestionOpen && (
										<div className="icons_items">
											<li className="mt-2">
												<a href="/Coding" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/Coding">
														<span className="link_name"  style={{paddingLeft:"10px"}}>Create</span>
													</Link>
												</a>
												{/* <span className="tooltip">Create</span> */}
											</li>
											<li className="mt-2">
												<a href="#" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/Codingview">
														<span className="link_name"  style={{paddingLeft:"10px"}}>View</span>
													</Link>
												</a>
												{/* <span className="tooltip">View</span> */}
											</li>
										</div>
									)}
									<li onClick={toggleCodingQuestions}  className="mt-2">
										<a href="/AssignQB" style={{fontSize:"15px"}}>
											<i class="fa-solid fa-circle-dot icons"></i>
											<Link to="/AssignQB">
												<span className="link_name" style={{paddingLeft:"10px"}}>Assign QB</span>
											</Link>
										</a>
										{/* <span className="tooltip">Assign QB</span> */}
									</li>
								</div>
							)}
							<li
								className="d-flex justify-content-between mt-2"
								onClick={toggleInstitutions1} 
							>
								<div>
									<a href="#">
										<i class="fa-solid fa-ellipsis-vertical"></i>
										<span className="link_name " style={{paddingLeft:"10px"}}>LEARNING PATH </span>
									</a>
								</div>
								<div>
									<i className="fa-solid fa-chevron-down"></i>
								</div>
							</li>
							{isInstitutionsOpen1 && (
								<div className="icons_items">
									<li onClick={toggleInstitutions2} className="mt-2">
										<a href="#" style={{fontSize:"15px"}}>
											<i class="fa-solid fa-school icons"></i>

											<span className="link_name" style={{paddingLeft:"10px"}} >Learning Path</span>
										</a>
										{/* <span className="tooltip">Learning Path</span> */}
									</li>
									{isInstitutionsOpen2 && (
										<div className="icons_items">
											<li className="mt-2">
												<a href="#" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-chalkboard icons"></i>
													<Link to="/Learn">
														<span className="link_name" style={{paddingLeft:"10px"}}>Learning Path</span>
													</Link>
												</a>
												{/* <span className="tooltip">Learning Path</span> */}
											</li>
											<li className="mt-2">
												<a href="#" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-video icons"></i>
													<Link to="/LearnPath">
														<span className="link_name" style={{paddingLeft:"10px"}}>Video Folders</span>
													</Link>
												</a>
												{/* <span className="tooltip">Video Folders</span> */}
											</li>
											<li className="mt-2">
												<a href="#" style={{fontSize:"15px"}}>
													<i class="fa-solid fa-record-vinyl icons"></i>
													<span className="link_name" style={{paddingLeft:"10px"}}>Reports</span>
												</a>
												{/* <span className="tooltip">Reports</span> */}
											</li>
										</div>
									)}

									<li className="mt-2">
										<a href="#" style={{fontSize:"15px"}}>
											<i class="fa-brands fa-accessible-icon icons"></i>
											<span className="link_name" style={{paddingLeft:"10px"}}>Access</span>
										</a>
										{/* <span className="tooltip">Access</span> */}
									</li>
								</div>
							)}
							{/* <li className="profile ">
								<div className="profile_details d-flex justify-content-between">
									<div>
										<i className="fa-solid fa-user"></i>
									</div>
									<div class="profile_content">
										<div class="name">Sai </div>
										<div class="designation">Admin</div>
									</div>
									<div>
										<i
											class="bx bx-log-out"
											id="log_out"
											onClick={handleLogout}
										></i>
									</div>
								</div>
							</li> */}
						</ul>

						
						
						<div className="text-center">
							<button className="logout_button" onClick={handleLogout}> Logout
								<i class="ri-logout-box-line"></i>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;
