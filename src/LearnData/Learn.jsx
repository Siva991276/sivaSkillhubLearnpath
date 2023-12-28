import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Sidebar from "../Sidebar";
import Cookies from "js-cookie";

const Learn = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(addblogslist);

  useEffect(() => {
    const fetchData = async () => {
      await fetchblogs();
    };

    fetchData();

    if (token === undefined) {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    handleSearch();
  }, [selectedOption, addblogslist]);

  const fetchblogs = async () => {
    const api = "http://localhost:4010/alllearningpathsDetails";
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

  const handleDelete = async (id) => {
    try {
      if (!id) {
        setError("Invalid ID provided for deletion.");
        return;
      }

      console.log("Deleting learning path with ID:", id);

      const response = await axios.delete(
        `http://localhost:4010/onselectedLearningPath/${id}`
      );

      if (response.status === 200) {
        toast("Learn Path deleted successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: "custom-toast-custom",
        });

        fetchblogs();
      } else {
        console.log(response.data);
        alert("Error: " + response.data);
        setError("An error occurred while deleting the learning path.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the learning path.");
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    menuBtnChange();
  };

  const menuBtnChange = () => {
    const sidebar = document.querySelector(".sidebar");

    if (sidebar) {
      const closeBtn = document.querySelector("#btn");
      const searchBtn = document.querySelector(".bx-search");

      if (sidebar.classList.contains("open")) {
        closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn?.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    } else {
      console.error("Sidebar element not found");
    }
  };

  const handleSearch = () => {
    let filtered;
    if (selectedOption && selectedOption !== "0") {
      filtered = addblogslist.slice(0, parseInt(selectedOption, 10));
    } else {
      filtered = addblogslist;
    }

    if (searchTerm) {
      filtered = filtered.filter((blog) =>
        blog.learningPathTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    let filtered;
    if (selectedOption && selectedOption !== "0") {
      filtered = addblogslist.slice(0, parseInt(selectedOption, 10));
    } else {
      filtered = addblogslist;
    }

    if (term) {
      filtered = filtered.filter((blog) =>
        blog.learningPathTitle.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className=" ">
            <div className="row">
              {isOpen && (
                <div className=" col-12 col-lg-3 col-md-12 sectioncard121">
                  <Sidebar />
                </div>
              )}
              <div
                className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
                  isOpen ? 9 : 12
                }`}
              >
                <div className="">
                  <i
                    className="fa-solid fa-bars bars  d-lg-block d-none"
                    onClick={toggleSidebar}
                  ></i>
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
                  <div className="">
                    <div className="batch_card p-3">
                      <div className="batch_flex mb-4">
                        <p style={{ fontSize: "20px" }}>Learning Path</p>
                        <div>
                          <Link to="/learning">
                            <button className="year">
                              + Add Learning Path
                            </button>
                          </Link>
                          <div className="mt-3">
                            Search :
                            <input
                              type="text"
                              className="form-control"
                              style={{ border: "1px solid #dee2e6" }}
                              placeholder="Search"
                              value={searchTerm}
                              onChange={handleInputChange}
                            />
                            {/* <button
                              className="mt-1 searchcontent text-white w-50 p-2"
                              style={{
                                backgroundColor: "#a5059d",
                                border: "none",
                              }}
                              onClick={handleSearch}
                            >
                              Search
                            </button> */}
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 col-lg-2 col-md-2">
                        <h6>Show:</h6>
                        <select
                          className="p-1 form-control"
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        >
                          <option value="0" hidden>
                            0
                          </option>
                          {[...Array(addblogslist.length).keys()].map(
                            (value) => (
                              <option key={value + 1} value={value + 1}>
                                {value + 1}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <h6>Entries:</h6>
                      <div className=" mb-4" style={{ overflowX: "scroll" }}>
                        <table class="table table-bordered text-center">
                          <thead
                            style={{
                              color: "#fff",
                              backgroundColor: "#333333",
                              fontWeight: "400",
                            }}
                          >
                            <tr>
                              <th style={{ fontWeight: "800" }}>S NO</th>
                              <th style={{ fontWeight: "800" }}>Name</th>
                              <th style={{ fontWeight: "800" }}>Topics</th>
                              <th style={{ fontWeight: "800" }}>Last Update</th>
                              <th style={{ fontWeight: "800" }}>Publish</th>
                              <th style={{ fontWeight: "800" }}>Subcription</th>
                              <th style={{ fontWeight: "800" }}>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredData.map((blog, index) => {
                              const storedTime = new Date(blog.CurrentTime);

                              const currentTime = new Date();

                              const timeDifference = currentTime - storedTime;

                              const hours = Math.floor(
                                timeDifference / (1000 * 60 * 60)
                              );
                              const minutes = Math.floor(
                                (timeDifference % (1000 * 60 * 60)) /
                                  (1000 * 60)
                              );

                              let timeDisplay;
                              if (minutes < 1) {
                                timeDisplay = "Just now";
                              } else if (minutes < 60) {
                                timeDisplay = `${minutes} ${
                                  minutes === 1 ? "minute" : "minutes"
                                } ago`;
                              } else {
                                timeDisplay = `${hours} ${
                                  hours === 1 ? "hour" : "hours"
                                } ago`;
                              }

                              return (
                                <tr key={index}>
                                  <td className="p-1">{index + 1}</td>
                                  <td className="p-1">
                                    {blog.learningPathTitle}
                                  </td>
                                  <td className="p-1">{blog.topics.length}</td>
                                  <td className="p-1">{timeDisplay}</td>
                                  <td className="p-1">
                                    <i
                                      className="fa-solid fa-toggle-on"
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    ></i>
                                  </td>
                                  <td className="p-1">{blog.subscription}</td>
                                  <td className="p-1">
                                    <Link to={`/topic/${blog._id}`}>
                                      <button className="topic_btn  m-2">
                                        Topics
                                      </button>
                                    </Link>
                                    <Link to="/AccessPage">
                                      <i className="fa-regular fa-file file p-2 m-2"></i>
                                    </Link>
                                    <Link to={`/LearnUpdate/${blog._id}`}>
                                      <i className="fa-solid fa-pencil pencile"></i>
                                    </Link>
                                    <i
                                      className="fa-solid fa-trash delete"
                                      onClick={() => handleDelete(blog._id)}
                                    ></i>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>{" "}
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

export default Learn;
