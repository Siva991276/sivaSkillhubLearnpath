import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
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
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div class="logo_details">
            <div class="logo_name">
              {" "}
              <img src={sideimage} alt="logo" width="125px" />
            </div>
            <i
              id="btn"
              onClick={toggleSidebar}
              className={`bx bx-menu ${
                isOpen ? "bx-menu-alt-right" : "bx-menu"
              }`}
            ></i>
          </div>
          <ul class="nav-list">
            <li>
              <span class="tooltip">Dashboard</span>
            </li>
            <li>
              <a href="#" className="bg-secondary">
                <i class="bx bx-grid-alt"></i>
                <span class="link_name">Dashboard</span>
              </a>
              <span class="tooltip">Dashboard</span>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-house "></i>

                <span class="link_name">HomePage</span>
              </a>
              <span class="tooltip">HomePage</span>
            </li>
            <li onClick={toggleInstitutions}>
              <a href="#">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <span className="link_name ">
                  INSTITUTIONS{" "}
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </a>
              <span className="tooltip">Institutions</span>
            </li>
            {isInstitutionsOpen && (
              <div>
                <li>
                  <a href="./AdminDashboard">
                    <i className="fa-solid fa-building-columns"></i>
                    <span className="link_name">institutions</span>
                  </a>
                  <span className="tooltip">institutions</span>
                </li>
                <li>
                  <a href="/BatchYear">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span className="link_name">Batch Years</span>
                  </a>
                  <span className="tooltip">Batch Years</span>
                </li>
                <li>
                  <a href="/Batches">
                    <i className="fa-solid fa-building-columns"></i>
                    <span className="link_name">Batches</span>
                  </a>
                  <span className="tooltip">Batches</span>
                </li>
                <li>
                  <a href="/UsersDetails">
                    <i className="fa-solid fa-user"></i>
                    <span className="link_name">Users</span>
                  </a>
                  <span className="tooltip">Users</span>
                </li>
                <li>
                  <a href="/SearchOption">
                    <i className="fa-brands fa-searchengin"></i>
                    <span className="link_name">Search Users</span>
                  </a>
                  <span className="tooltip">Search Users</span>
                </li>
              </div>
            )}
            <li onClick={toggleQuestionBank}>
              <a href="#">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <span className="link_name ">
                  QUESTION BANK{" "}
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </a>
            </li>
              {isQuestionbankOpen && (
                <div>
                  <li onClick={toggleSelfCreatedQB}>
                    <a href="#">
                    <i class="fa-solid fa-circle-dot"></i>
                      <Link to="#">
                        <span className="link_name">
                        Self Created QB
                        </span>
                      </Link>
                    </a>
                  </li>
              {isSelfcreatedQBOpen && (
                  <div>
                  <li>
                      <a href="/QbSubject">
                        <i class="fa-solid fa-video"></i>
                        <Link to="/QbSubject">
                          <span className="link_name">
                            subjects
                          </span>
                        </Link>
                      </a>
                      <span className="tooltip">subjects</span>
                    </li>
                    <li>
                      <a href="/Chapter">
                        <i class="fa-solid fa-video"></i>
                        <Link to="/Chapter">
                          <span className="link_name">
                            chapters
                          </span>
                        </Link>
                      </a>
                      <span className="tooltip">chapters</span>
                    </li>
                  </div>
              )}
                  <li onClick={toggleMCQ}>
                  <a href="#">
                  <i class="fa-solid fa-circle-dot"></i>
                  <span className="link_name">MCQ Questions</span>                            
                  </a>
                  </li>
              {isMcqOpen && (
                  <div>
                  <li>
                      <a href="/CreateQuestion">
                        <i class="fa-solid fa-video"></i>
                        <Link to="/CreateQuestion">
                          <span className="link_name">
                            create
                          </span>
                        </Link>
                      </a>
                      <span className="tooltip">create</span>
                    </li>
                    <li>
                      <a href="/McqView">
                        <i class="fa-solid fa-video"></i>
                        <Link to="/McqView">
                          <span className="link_name">
                            View
                          </span>
                        </Link>
                      </a>
                      <span className="tooltip">View</span>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-video"></i>
                        <Link to="#">
                          <span className="link_name">
                            Upload
                          </span>
                        </Link>
                      </a>
                      <span className="tooltip">Upload</span>
                    </li>
                    </div>
              )}
                    <li onClick={toggleParagQuestions}>
                      <a href="#">
                      <i class="fa-solid fa-circle-dot"></i>
                        <Link to="#">
                          <span className="link_name">
                            Parag MCQ Questions
                        </span>
                        </Link>
                      </a>
                      <span className="tooltip">Parag MCQ Questions</span>
                    </li>
              {isParagQuestionOpen && (
                   <div>
                   <li>
                      <a href="/ParagHome">
                        <i class="fa-solid fa-video"></i>
                        <Link to="/ParagHome">
                          <span className="link_name">
                            Create
                        </span>
                        </Link>
                      </a>
                      <span className="tooltip">Create</span>
                    </li>
                    <li>
                      <a href="/ParagView">
                        <i class="fa-solid fa-video"></i>
                        <Link to="/ParagView">
                          <span className="link_name">
                            View
                        </span>
                        </Link>
                      </a>
                      <span className="tooltip">View</span>
                    </li>
                   </div>
              )}
                    <li onClick={toggleCodingQuestions}>
                      <a href="#">
                      <i class="fa-solid fa-circle-dot"></i>
                        <Link to="#">
                          <span className="link_name">
                            Coding Questions
                        </span>
                        </Link>
                      </a>
                      <span className="tooltip">Coding Questions</span>
                    </li>
              {isCodingQuestionOpen && (
                    <div>
                    <li>
                      <a href="/Coding">
                        <i class="fa-solid fa-video"></i>
                        <Link to="/Coding">
                          <span className="link_name">
                            Create
                        </span>
                        </Link>
                      </a>
                      <span className="tooltip">Create</span>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-video"></i>
                        <Link to="#">
                          <span className="link_name">
                            View
                        </span>
                        </Link>
                      </a>
                      <span className="tooltip">View</span>
                    </li>
                    </div>
              )}
                    </div>
                  
              )}                           
            <li onClick={toggleInstitutions1}>
              <a href="#">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <span className="link_name ">
                  LEARNING PATH{" "}
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </a>
              <span className="tooltip">Learning Path</span>
            </li>
            {isInstitutionsOpen1 && (
              <div>
                <li onClick={toggleInstitutions2}>
                  <a href="#">
                    <i class="fa-solid fa-school"></i>

                    <span className="link_name">Learning Path</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  <span className="tooltip">Learning Path</span>
                </li>
                {isInstitutionsOpen2 && (
                  <div>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-chalkboard"></i>
                        <Link to="/Learn">
                          <span className="link_name">
                            Learning Path
                          </span>
                        </Link>
                      </a>
                      <span className="tooltip">Learning Path</span>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-video"></i>
                        <Link to="/LearnPath">
                          <span className="link_name">
                            Video Folders
                          </span>
                        </Link>
                      </a>
                      <span className="tooltip">Video Folders</span>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-record-vinyl"></i>
                        <span className="link_name">Reports</span>
                      </a>
                      <span className="tooltip">Reports</span>
                    </li>
                  </div>
                )}

                <li>
                  <a href="#">
                    <i class="fa-brands fa-accessible-icon"></i>
                    <span className="link_name">Access</span>
                  </a>
                  <span className="tooltip">Access</span>
                </li>
              </div>
            )}
            <li class="profile">
              <div class="profile_details">
                <img src='' alt="profile image" />
                <div class="profile_content">
                  <div class="name">Sai </div>
                  <div class="designation">Admin</div>
                </div>
              </div>

              <i
                class="bx bx-log-out"
                id="log_out"
                onClick={handleLogout}
              ></i>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark d-lg-none p-0"  >
				<div className="container-fluid">
				<NavLink to="/" className="navbar-brand">
						<img
							src={sideimage}
							className="img-fluid skill_img "
							alt="img"
						/>
					</NavLink>
					{/* Toggle button for the sidebar */}
					<button
						className="navbar-toggler mx-3"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						{/* <span className="navbar-toggler-icon"></span> */}
						<i className="fa-solid fa-bars " ></i>

					</button>

					{/* Brand/logo */}
					

					{/* Navbar links */}
					<div className="collapse navbar-collapse p-3" id="navbarNav" style={{backgroundColor:"#000", height:"100%"}}>
						<ul className="navbar-nav ml-auto">
							{/* Add your navbar links here */}
							<li className="nav-item" style={{color:"#fff"}}>
								<NavLink to="/" className="nav-link">
									Dashboard
								</NavLink>
							</li>
							<li className="nav-item" style={{color:"#fff"}}>
								<NavLink to="" className="nav-link">
									Homepage
								</NavLink>
							</li>
							<li className="nav-item">
								<div className="mt-3">
									<div style={{ fontSize: "20px", color:"#fff" }}>Institution</div>

									<div
										className="employement my-1"
										style={{ cursor: "pointer" }}
										onClick={toggleInstitutions}
									>
										<div className="" style={{color:"#fff"}} >
											<div className=" d-flex justify-content-between" >
												<div>
												Instutions{" "}

												</div>
												{isInstitutionsOpen ? (
													<i className="fa-solid fa-angle-up "></i>
												) : (
													<i className="fa-solid fa-angle-down "></i>
												)}
											</div>
										</div>
									</div>
									{isInstitutionsOpen && (
										<div>
											<div className="mt-1">
												<NavLink
													to="/AddInstitutions"
													className="employement my-1"
												>
													<div className="d-flex "  style={{color:"#fff"}}>
														<div>
															<i className="fa-solid fa-building-columns pr-3 "></i>
														</div>
														<div className="">Instutions</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-1">
												<NavLink to="/BatchYearsTab" className="employement my-1">
													<div className="d-flex ">
														<div>
															<i className="fa-solid fa-user-group pr-3 "></i>
														</div>
														<div className="">Batch Year</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-1">
												<NavLink to="/BatchesTab" className="employement my-1">
													<div className="d-flex ">
														<div>
															<i className="fa-solid fa-people-group pr-3 "></i>
														</div>
														<div className="">Batches</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-1">
												<NavLink to="/Usertab" className="employement my-3 ">
													<div className="d-flex ">
														<div>
															<i className="fa-solid fa-users pr-3 "></i>
														</div>
														<div className="">Users</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-1">
												<NavLink to="/SearchUserTab" className="employement my-1">
													<div className="d-flex ">
														<div>
															<i className="fa-brands fa-searchengin pr-3"></i>
														</div>
														<div className="">Serch Users</div>
													</div>
												</NavLink>
											</div>
										</div>
									)}
								</div>
							</li>
							<li className="nav-item">
								<div className="pt-2 " style={{ fontSize: "20px", color:"#fff" }}>
									Learning Path
								</div>

								<div>
									<div className="" style={{ cursor: "pointer", color:"#fff" }}>
										<div className=" pt-3  d-flex justify-content-between" onClick={togglelearnopen}>
											<div>
											<i class="fa-regular fa-folder pr-3"></i> Learning Path{" "}
											</div>
											<div>
											{islearnOpen ? (
												<i className="fa-solid fa-angle-up "></i>
											) : (
												<i className="fa-solid fa-angle-down "></i>
											)}
											</div>
											
										</div>
									</div>
									{islearnOpen && (
										<div>
											<div className="mt-3">
												<NavLink to="/Learn" className="employement my-3  ">
													<div className="d-flex ">
														<div className="">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Lerning Paths
														</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/video" className="employement my-3  ">
													<div className="d-flex ">
														<div className="">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Video Folders{" "}
														</div>
													</div>
												</NavLink>
											</div>
											<div className="mt-3">
												<NavLink to="/batch" className="employement my-3 ">
													<div className="d-flex ">
														<div className="">
															{" "}
															<i
																class="fa-regular fa-circle-dot pr-3"
																style={{ fontSize: "10px" }}
															></i>{" "}
															Reports
														</div>
													</div>
												</NavLink>
											</div>
										</div>
									)}
									<div className="mt-3">
										<NavLink to="/Access" className="employement my-3 ">
											<div className="d-flex ">
												<div>
													<i class="fa-solid fa-pen "></i>{" "}
												</div>
												<div className="pl-3">Access</div>
											</div>
										</NavLink>
									</div>
								</div>
							</li>
						</ul>
						<div  className='col-md-5 my-2 ml-3'>
								{/* <p> {loginEmployee.firstName}<br/>{loginEmployee.employeeType}</p> */}
								</div>
								<div className='col-md-3 my-2 ml-3'>
									<button className='logout_button' onClick={handleLogout}><i class="ri-logout-box-line"></i></button>
								</div>
					</div>					
				</div>
			</nav>
    </div>
	);
}

export default Sidebar;
