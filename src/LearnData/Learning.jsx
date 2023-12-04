import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
// import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import sideimage from "../All Images/Logo133.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import siva from "../All Images/Siva Image.jpeg";

const Learning = () => {
  const [subscriptionType, setSubscriptionType] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [addblogslist1, setAddblogslist1] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
  const [institutetypeCounts, setInstitutetypeCounts] = useState({});

  const [error, setError] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  useEffect(() => {
    fetchblogs();
    fetchblogs1();
    if (token == undefined) {
      navigate("/");
    }
  }, []);

  const fetchblogs1 = async () => {
    const api = "http://localhost:4010/DisplayAllVideos";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk"; // Replace with your actual authentication token

    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = response.data;
      setAddblogslist1(data);

      const institutetypeCounts = {};
      data.forEach((item) => {
        const VideofolderName = item.VideofolderName;
        if (institutetypeCounts[VideofolderName]) {
          institutetypeCounts[VideofolderName] += 1;
        } else {
          institutetypeCounts[VideofolderName] = 1;
        }
      });

      setInstitutetypeCounts(institutetypeCounts);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  console.log(institutetypeCounts);

  const fetchblogs = async () => {
    const api = "http://localhost:4010/allAddVideosData";
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
  //Add Institute

  const [VideofolderName, setVideofolderName] = useState("");

  const [data1, setdata1] = useState([]);

  const AddVideosDetails = {
    VideofolderName: VideofolderName,
  };
  console.log(AddVideosDetails);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (VideofolderName !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk", // Replace with your actual token
      };

      const AddVideosDetails = {
        VideofolderName: VideofolderName,
      };

      axios
        .post("http://localhost:4010/AddVideoPath", AddVideosDetails, {
          headers,
        })
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Video Folder Created Successfully", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
            fetchblogs();
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            toast.warning("Video path with the same name already exists", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            console.log(error.message);
          }
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };

  console.log(data1);

  const handleDelete = async (id) => {
    try {
      if (!id) {
        setError("Invalid ID provided for deletion.");
        return;
      }
      console.log("Deleting institute with ID:", id);
      const response = await axios.delete(
        "http://localhost:4010/deleteVideo/" + id
      );
      if (response.status === 200) {
        toast.success("Success: Institute deleted", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        fetchblogs();

        const updatedListLength = addblogslist.length - 1;
        console.log("Updated list length:", updatedListLength);
      } else {
        console.log(response.data);
        alert("Error: " + response.data);
        setError("An error occurred while deleting the institute.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the institute.");
    }
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
  const [isInstitutionsOpen1, setIsInstitutionsOpen1] = useState(true);

  const toggleInstitutions1 = () => {
    setIsInstitutionsOpen1(!isInstitutionsOpen1);
  };
  const [isInstitutionsOpen2, setIsInstitutionsOpen2] = useState(true);

  const toggleInstitutions2 = () => {
    setIsInstitutionsOpen2(!isInstitutionsOpen2);
  };

  // Corporate Office
  return (
    <div>
      <div className="container1">
        <div className="row">
          <div className=" mt-1">
            <div className="row">
              <div className=" col-12 col-md-2  sectioncard121">
                <div className={`sidebar ${isOpen ? "open" : ""}`}>
                  <div class="logo_details">
                    <div class="logo_name">
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
                      <a href="/PerfexHome">
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
                          Institutions{" "}
                          <i className="fa-solid fa-chevron-down"></i>
                        </span>
                      </a>
                      <span className="tooltip">Institutions</span>
                    </li>
                    {isInstitutionsOpen && (
                      <div>
                        <li className="">
                          <a href="/AdminDashboard">
                            <i className="fa-solid fa-building-columns"></i>{" "}
                            <span
                              className="link_name"
                              style={{ color: "#06f9f9" }}
                            >
                              institutions
                            </span>
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
                                <Link to="/LearnPath">
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
                                <span
                                  className="link_name "
                                  style={{ color: "#06f9f9" }}
                                >
                                  Video Folders
                                </span>
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
                        <img src={siva} alt="profile image" />
                        <div class="profile_content">
                          <div class="name">Siva</div>
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

              {/* //Sia */}
              <div className="col-12 col-md-9 mx-5">
                <div class="">
                  <div>
                    <div className="batch_card p-3">
                      <div>
                        <p>Learning Path</p>
                        <input
                          type="text"
                          className="form-control"
                          style={{ border: "1px solid #dee2e6" }}
                        />
                      </div>
                    </div>
                    <div className="batch_card p-3">
                      <div>
                        <p>Tags</p>
                        <select className="p-1 form-control">
                          <option value="">--Select Relavent Tags --</option>
                          <option value="AWS">AWS</option>
                          <option value="Database">Database</option>
                          <option value="DataScience">DataScience</option>
                          <option value="DevOps">DevOps</option>
                          <option value="Mobile App Developement">
                            Mobile App Developement
                          </option>
                          <option value="Programming">Programming</option>
                          <option value="Scripting">Scripting</option>
                          <option value="Software Testing">
                            Software Testing
                          </option>
                          <option value="Test Preparation">
                            Test Preparation
                          </option>
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="Web Services">Web Services</option>
                          <option value="Verbal and Communication">
                            Verbal and Communication
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="batch_card p-3">
                      <div>
                        <p>Cover Letter</p>
                        {/* <input type="text" className="form-control"/> */}
                        <textarea className="form-control" rows={4}></textarea>
                      </div>
                    </div>
                    <div className="batch_card p-3">
                      <div>
                        <p>Defficulty</p>
                        <select className="p-1 form-control">
                          <option value="">--Select Defficulty --</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                    </div>
                    <div className="batch_card p-3">
                      <div>
                        <p>Subcription</p>
                        <select
                          className="p-1 form-control"
                            onChange={(e) => setSubscriptionType(e.target.value)}
                        >
                          <option value="">--Select Subcription --</option>
                          <option value="Free">Free</option>
                          <option value="Paid">Paid</option>
                        </select>
                      </div>
                    </div>
                    {subscriptionType === "Paid" && (
                      <div>
                        <div className="batch_card p-3">
                          <div>
                            <p>Price</p>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                        <div className="batch_card p-3">
                          <div>
                            <p>Discount</p>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="batch_card p-3">
                      <div>
                        <p>About This Learning Path</p>
                        <textarea className="form-control" rows={6}></textarea>

                        {/* <select className="p-1 form-control">
									<option value="">--Select Subcription --</option>
									<option value="Corporate">Free</option>
									<option value="Corporate">Paid</option>									
								</select> */}

                        {/* <CKEditor
									editor={ClassicEditor}
									// config={editorConfiguration} 
									data="<p>Hello from CKEditor 5!</p>"
									onInit={(editor) => {
										// You can store the "editor" and use when it is needed.
										console.log("Editor is ready to use!", editor);
									}}
									onChange={(event, editor) => {
										const data = editor.getData();
										console.log({ event, editor, data });
									}}
									onBlur={(event, editor) => {
										console.log("Blur.", editor);
									}}
									onFocus={(event, editor) => {
										console.log("Focus.", editor);
									}}
								/> */}
                      </div>
                    </div>
                    <div className="batch_card p-3">
                      <div>
                        <p>Author</p>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="author"
                        />
                      </div>
                    </div>
                    <div className="batch_card p-3">
                      <div className="row">
                        <div className="col-lg-3">
                          <div>
                            <p>Hours</p>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="author"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div>
                            <p>Minutes</p>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <p>Learning Page</p>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="author"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="batch_card p-3">
                      <div className="batch_flex mb-4">
                        <p>What You'll Learn</p>
                        <div>
                          <button className="year"> + Add</button>
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          style={{ border: "1px solid #dee2e6" }}
                        />
                      </div>
                    </div>
                    <div className="batch_card p-3">
                      <div className="batch_flex mb-4">
                        <p>Requirement</p>
                        <div>
                          <button className="year"> + Add</button>
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          style={{ border: "1px solid #dee2e6" }}
                        />
                      </div>
                    </div>
                    <div>
                      <button className="create_btn">Create</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
