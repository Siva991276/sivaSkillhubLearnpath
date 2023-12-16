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
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";

const VideoPage = () => {
  const { VideofolderName } = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [addblogslist1, setAddblogslist1] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
  const [institutetypeCounts, setInstitutetypeCounts] = useState({});
  const [selectedVideo, setSelectedVideo] = useState("");
  const [error, setError] = useState(null);
  const [addInstitutelist, setInstitutelist] = useState([]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // const [formData, setFormData] = useState({
  //   InstituteName: "",
  //   PrimaryEmail: "",
  //   HeadName: "",
  //   PrimaryContactNumber: "",
  //   SecondaryEmail: "",
  //   SecondaryContactNumber: "",
  //   Address: "",
  //   City: "",
  //   InstituteCode: "",
  //   InstituteType: "",
  //   AxiosPlans: "",
  //   Password: "",

  //   // Add other form fields here
  // });

  // const openEditForm = (item) => {
  //   setEditingItem(item);
  //   setFormData({
  //     Sno: item.Sno,
  //     InstituteName: item.InstituteName,
  //     PrimaryEmail: item.PrimaryEmail,
  //     HeadName: item.HeadName,
  //     PrimaryContactNumber: item.PrimaryContactNumber,
  //     SecondaryEmail: item.SecondaryEmail,
  //     SecondaryContactNumber: item.SecondaryContactNumber,
  //     Address: item.Address,
  //     City: item.City,
  //     InstituteCode: item.InstituteCode,
  //     InstituteType: item.InstituteType,
  //     AxiosPlans: item.AxiosPlans,
  //     Password: item.Password,

  //     // Populate other form fields as well
  //   });
  // };

  // const updateItem = () => {
  //   const updatedList = addblogslist.map((item) => {
  //     if (item._id === editingItem._id) {
  //       return {
  //         ...item,
  //         Sno: formData.Sno,
  //         InstituteName: formData.InstituteName,
  //         PrimaryEmail: formData.PrimaryEmail,
  //         HeadName: formData.HeadName,
  //         InstituteCode: formData.InstituteCode,
  //         // Update other fields as well
  //       };
  //     }
  //     return item;
  //   });

  //   setAddblogslist(updatedList);
  //   setEditingItem(null);
  // };
  // const onUpdate = (e) => {
  //   e.preventDefault();
  //   updateItem();
  // };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  useEffect(() => {
    // VideoFoldersDatas();
    fetchData();
    if (token == undefined) {
      navigate("/");
    }
  }, []);

  const fetchData = async () => {
    console.log(VideofolderName);
    try {
      const response = await axios.get(
        `http://localhost:4010/foldersVideoData/${VideofolderName}`
      ); // Replace with your API endpoint
      setAddblogslist(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const VideoFoldersDatas = async () => {
  //   const api = "http://localhost:4010/allAddVideosData";
  //   const authToken =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
  //   try {
  //     const response = await axios.get(api, {
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     });
  //     setInstitutelist(response.data);
  //   } catch (error) {
  //     console.error("Error fetching blogs:", error);
  //   }
  // };
  //Add Institute

  // const [VideofolderName1, setVideofolderName] = useState("");
  const [VideoTitleName, setVideoTitleName] = useState("");
  const [SourceName, setSourceName] = useState("");
  const [Video1, setVideo1] = useState("");

  const [data1, setdata1] = useState([]);

  const AddVideosDetails = {
    VideofolderName: VideofolderName,
    VideoTitleName: VideoTitleName,
    SourceName: SourceName,
    Video1: Video1,
  };
  console.log(AddVideosDetails);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (VideoTitleName && Video1 !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk", // Replace with your actual token
      };

      const AddVideosDetails = {
        VideofolderName: VideofolderName,
        VideoTitleName: VideoTitleName,
        SourceName: SourceName,
        Video1: Video1,
      };

      axios
        .post("http://localhost:4010/AddVideoFilesData", AddVideosDetails, {
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
            fetchData();
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
        "http://localhost:4010/deleteInstitute/" + id
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

        // Update your state or fetch updated data as needed
        // For example, if addblogslist is updated from the server, you can update it here.

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
  const [sourceopen, setSourceopen] = useState(false);
  const OpenSourceCode = () => {
    setSourceopen(!sourceopen);
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
      <div className="container-fluid">
        <div className="row">
          <div className=" ">
            <div className="row">
            {isOpen && (
              <div className=" col-12 col-lg-3 col-md-12 sectioncard121">
              <Sidebar/>
              </div>
					  )}
             <div className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}>
                              <i className="fa-solid fa-bars bars  d-lg-block d-none" onClick={toggleSidebar}></i>

<div className="col-12 col-md-12">
                <div class="">
                  <div className="card section-31 shadow">
                    <div className="d-flex flex-row">
                      <div>
                        <h2 className="mt-2 mx-4 mt-3">Categories</h2>
                      </div>
                      <div className="col-12 col-md-7"></div>

                      <div style={{ marginLeft: "auto" }} class="m-2">
                        {/* <b class="resumeh7 ">+ Add Employment</b> */}
                        <div>
                          {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                          <button
                            style={{ border: "none", backgroundColor: "white" }}
                            className=""
                          >
                            <div className="d-flex flex-row">
                              <p
                                class="resumeh7 row mx-2 "
                                onClick={OpenSourceCode}
                              >
                                +Add Content{" "}
                              </p>
                              <i class="fa-solid fa-caret-down text-danger"></i>
                            </div>
                            {sourceopen && (
                              <div>
                                <span
                                  className="mb-2"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#myModal23"
                                  onClick={(e) => {
                                    setSourceName(e.target.textContent); // Use textContent instead of value
                                    console.log(e.target.textContent); // Print to console
                                  }}
                                >
                                  <i class="fa-brands fa-youtube"></i> Youtube
                                </span>
                                <br />

                                <span
                                  className="mb-2"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#myModal23"
                                  onClick={(e) => {
                                    setSourceName(e.target.textContent); // Use textContent instead of value
                                    console.log(e.target.textContent); // Print to console
                                  }}
                                >
                                  <i class="fa-solid fa-video"></i> Vimeo
                                </span>
                              </div>
                            )}
                          </button>

                          <div class="modal" id="myModal23">
                            <div class="modal-dialog ">
                              <div class="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                  <h4 class="modal-title">Add Vieo Folder</h4>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    onClick={OpenSourceCode}
                                  ></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                  <form action="" onSubmit={onSubmitForm}>
                                    <div className="">
                                      {/* <select
                                        name=""
                                        id=""
                                        className="p-2"
                                        onChange={(e) =>
                                          setVideofolderName(e.target.value)
                                        }
                                      >
                                        <option value="SelectInstitutions">
                                          ---Select Video Folder---
                                        </option>
                                        {addInstitutelist.map((institute) => (
                                          <option
                                            key={institute.id}
                                            value={institute.VideofolderName}
                                          >
                                            {institute.VideofolderName}
                                          </option>
                                        ))}
                                      </select> */}
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Video Title :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Folder Name"
                                        onChange={(e) =>
                                          setVideoTitleName(e.target.value)
                                        }
                                        value={VideoTitleName}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Video Link:
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Video Link"
                                        onChange={(e) =>
                                          setVideo1(e.target.value)
                                        }
                                        value={Video1}
                                      />
                                    </div>
                                    <hr />
                                    <div class=" mt-3">
                                      <button
                                        type="submit"
                                        class="btn text-start"
                                        style={{
                                          backgroundColor: "#a5059d",
                                          color: "white",
                                        }}
                                        data-bs-dismiss="modal1"
                                      >
                                        Add Video
                                      </button>
                                    </div>
                                  </form>
                                </div>

                                {/* <!-- Modal footer --> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
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
                      <div className=" col-12 col-lg-12">
                        <div className="table-responsive">
                          <table className="table table-striped text-center">
                            <thead>
                              <tr className="table-dark">
                                <th>S.NO</th>
                                <th>FOLDER NAME</th>
                                <th>VIDEOS TITLE</th>
                                <th>SOURCE</th>
                                <th>WATCH</th>
                              </tr>
                            </thead>
                            <tbody>
                              {addblogslist.map((blog) => (
                                <tr key={blog.id}>
                                  <td className="mt-2">{blog.Sno}</td>

                                  <td>{blog.VideofolderName}</td>
                                  <td>{blog.VideoTitleName}</td>
                                  <td>{blog.SourceName}</td>

                                  <td className="text-center">
                                    <button
                                      key={blog._id}
                                      type="button"
                                      className="btn btn-secondary btn-sm" // Add btn-primary and btn-sm classes
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      style={{
                                        borderRadius: "5px",
                                      }}
                                      onClick={() =>
                                        setSelectedVideo(blog.Video1)
                                      }
                                    >
                                      <div className="d-flex flex-row">
                                        <a href="#" style={{ color: "white" }}>
                                          <span className="material-symbols-outlined">
                                            videocam
                                          </span>
                                        </a>
                                        <h6 className="mt-1 mx-1">
                                          {" "}
                                          Watch Video
                                        </h6>
                                      </div>
                                    </button>
                                    <div class="modal" id="myModal">
                                      <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <button
                                              type="button"
                                              class="btn-close"
                                              data-bs-dismiss="modal"
                                            ></button>
                                          </div>

                                          {selectedVideo && (
                                            <ReactPlayer
                                              url={selectedVideo}
                                              playing
                                              controls
                                              width="875px"
                                              height="600px"
                                            />
                                          )}
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      style={{
                                        border: "none",
                                      }}
                                      className="btn"
                                    >
                                      <Link>
                                        <span
                                          type="button"
                                          className="material-symbols-outlined p-1 m-2 bg-secondary"
                                          style={{
                                            color: "white",

                                            borderRadius: "5px",
                                          }}
                                        >
                                          edit_square
                                        </span>
                                      </Link>
                                    </button>

                                    {/* <button
                                      className="material-symbols-outlined mx-1 p-1"
                                      type="submit"
                                      style={{
                                        backgroundColor: "red",
                                        border: "none",
                                        borderRadius: "5px",
                                      }}
                                      onClick={() => handleDelete(blog._id)}
                                    >
                                      delete
                                    </button> */}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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

export default VideoPage;
