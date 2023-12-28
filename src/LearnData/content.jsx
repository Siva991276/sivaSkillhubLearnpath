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
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";

const Content = () => {
  const { id, topicId } = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [addblogslist1, setAddblogslist1] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
  const [institutetypeCounts, setInstitutetypeCounts] = useState({});

  const [individualInstitute, setIndividualInstitute] = useState([]);
  const [individualInstitute1, setIndividualInstitute1] = useState("");
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDatatopic();
    fetchData1();
    fetchData();
    set_id(id);
    setcontentTime(new Date().toLocaleString());
    if (token == undefined) {
      navigate("/");
    }
  }, []);

  const fetchDatatopic = async () => {
    console.log(id);
    try {
      const response = await axios.get(`http://localhost:4010/getTopic/${id}`);
      setIndividualInstitute1(response.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  console.log(individualInstitute1);
  const fetchData1 = async () => {
    console.log(id);
    try {
      const response = await axios.get(
        `http://localhost:4010/getTopic/${id}/${topicId}`
      );
      setIndividualInstitute1(response.data);
      setTopicName(response.data.topicName);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4010/getAllContents/${id}/${topicId}/${id}`
      );
      setIndividualInstitute(response.data.contents);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // fetchData();

  console.log(individualInstitute);
  console.log(individualInstitute1);

  //Add Institute
  const [topicName, setTopicName] = useState("");
  const [contentTitle, setcontentTitle] = useState("");
  const [contentdes, setcontentdes] = useState("");
  const [contentimg, setcontentimg] = useState("");
  const [publish, setpublish] = useState("");
  const [contentTime, setcontentTime] = useState("");
  const [_id, set_id] = useState("");
  console.log(topicName);

  const [data1, setdata1] = useState([]);
  if (!contentTime) {
    setcontentTime(new Date().toLocaleString());
  }

  const AddTopicDetails = {
    topicName: topicName,
    contentTitle: contentTitle,
    contentdes: contentdes,
    contentimg: contentimg,
    publish: publish,
    contentTime: contentTime,
    _id: _id,
  };
  console.log(AddTopicDetails);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      topicName &&
      contentTitle &&
      contentdes &&
      contentimg &&
      publish &&
      contentTime &&
      _id !== ""
    ) {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };

      const AddContentDetails = {
        topicName: topicName,
        contentTitle: contentTitle,
        contentdes: contentdes,
        contentimg: contentimg,
        publish: publish,
        contentTime: contentTime,
        _id: _id,
      };

      axios
        .post(
          `http://localhost:4010/addContentOfTopicsinlearningpath/${id}`,
          AddContentDetails,
          {
            headers,
          }
        )
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast("Content Add Successfully", {
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

            setTimeout(function () {
              // navigate("/Content/${id}/${topicId}/${id}")
            }, 3000);
          }
          fetchData();
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            toast("Topic name already exists", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              className: "custom-toast-custom",
            });
          } else {
            console.log(error.message);
          }
        });
    } else {
      toast("Enter the Required Details", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast-custom",
      });
    }
  };

  console.log(data1);
  const handleDelete = async (contentTitle) => {
    try {
      if (!contentTitle) {
        setError("Invalid content title provided for deletion.");
        return;
      }

      const response = await axios.delete(
        `http://localhost:4010/onselectedContentinTopicinLearningPath/${id}/${topicId}/${contentTitle}`
      );

      if (response.status === 200) {
        toast("Delete Successfully", {
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

        setTimeout(function () {}, 3000);
        fetchData();
      } else {
        console.log(response.data);
        toast("Topic name already exists", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: "custom-toast-custom",
        });
        setError("An error occurred while deleting the content.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the content.");
    }
  };

  console.log(contentTitle);
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

  console.log(contentTitle);

  // Corporate Office
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
                <div className=" ">
                  <i
                    className="fa-solid fa-bars bars d-lg-block d-none"
                    onClick={toggleSidebar}
                  ></i>
                  <div class="mx-5">
                    <div className="batch_card p-3">
                      <div className="batch_flex mb-4">
                        {individualInstitute1 ? (
                          <p style={{ fontSize: "20px" }}>
                            Topic: {individualInstitute1.AboutLearnPath}
                          </p>
                        ) : (
                          <p>Data not found</p>
                        )}
                        <div>
                          <button type="button" class="year">
                            + Add Content
                          </button>
                          <div className="content-options">
                            <p
                              className="m-0"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                              <i className="fa-solid fa-t"></i> Text Content
                            </p>

                            <p className="m-0">
                              <i className="fa-solid fa-video"></i> Video
                              Content
                            </p>
                            <p className="m-0">
                              <i className="fa-solid fa-file"></i> Assessment
                            </p>
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
                          <div class="modal mx-5" id="myModal">
                            <div class="modal-dialog modal-md">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h4 class="modal-title">Add Content</h4>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                  ></button>
                                </div>

                                <form action="">
                                  <div className="col-12 col-md-11 p-2">
                                    <div class="">
                                      <div>
                                        <div className="batch_card p-3">
                                          <div>
                                            <p>Text Content Title</p>
                                            <input
                                              type="text"
                                              className="form-control"
                                              style={{
                                                border: "1px solid #dee2e6",
                                              }}
                                              onChange={(e) =>
                                                setcontentTitle(e.target.value)
                                              }
                                              value={contentTitle}
                                            />
                                          </div>
                                        </div>

                                        <div className="batch_card p-3">
                                          <div>
                                            <p>Content</p>
                                            {/* <input type="text" className="form-control"/> */}
                                            <textarea
                                              className="form-control"
                                              rows={4}
                                              onChange={(e) =>
                                                setcontentdes(e.target.value)
                                              }
                                              value={contentdes}
                                            ></textarea>
                                          </div>
                                        </div>

                                        <div className="mt-3">
                                          <p className=" p-2">Insert Image</p>
                                          <input
                                            type="file"
                                            style={{
                                              border: "1px solid #dee2e6",
                                            }}
                                            className="p-2 w-100"
                                            onChange={(e) =>
                                              setcontentimg(e.target.value)
                                            }
                                            value={contentimg}
                                          />
                                        </div>
                                        <div className="batch_card p-3">
                                          <p>Publish</p>
                                          <select
                                            className="p-1 form-control"
                                            onChange={(e) =>
                                              setpublish(e.target.value)
                                            }
                                          >
                                            <option value="" hidden>
                                              --Select Publish --
                                            </option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                          </select>
                                        </div>

                                        <div className=" mx-3 p-2">
                                          <button
                                            className="create_btn"
                                            onClick={onSubmitForm}
                                            data-bs-dismiss="modal"
                                          >
                                            Create
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3">
                            Search :
                            <input
                              type="text"
                              className="form-control"
                              style={{ border: "1px solid #dee2e6" }}
                              placeholder="Search"
                            />
                          </div>
                        </div>
                      </div>

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
                              <th style={{ fontWeight: "500" }}>S NO</th>
                              <th style={{ fontWeight: "500" }}>Title</th>
                              <th style={{ fontWeight: "500" }}>
                                Content Type
                              </th>
                              <th style={{ fontWeight: "500" }}>Display</th>
                              <th style={{ fontWeight: "500" }}>Last Update</th>
                              <th style={{ fontWeight: "500" }}>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* {loading ? (
                              <p>Loading...</p>
                            ) : individualInstitute &&
                              individualInstitute.length > 0 ? (
                              individualInstitute.map((content, index) => (
                                <tr key={content.id}>
                                  <td className="p-1">{index + 1}</td>
                                  <td className="p-1">
                                    {content.contentTitle}
                                  </td>
                                  <td className="p-1">Text</td>
                                  <td className="p-1">
                                    <i
                                      className="fa-solid fa-toggle-on"
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    ></i>
                                  </td>
                               
                                  <td className="p-1">{content.contentTime}</td>
                                  <td className="p-1">
                                    <Link
                                      to={`/ContentUpdate/${id}/${topicId}/${content.contentTitle}`}
                                    >
                                      <i className="fa-solid fa-pencil pencile"></i>
                                    </Link>

                                    <i
                                      className="fa-solid fa-trash delete"
                                      onClick={() =>
                                        handleDelete(content.contentTitle)
                                      }
                                    ></i>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <p>Data not found</p>
                            )} */}

                            {loading ? (
                              <p>Loading...</p>
                            ) : individualInstitute &&
                              individualInstitute.length > 0 ? (
                              individualInstitute.map((content, index) => {
                                // Calculate time difference
                                const storedTime = new Date(
                                  content.contentTime
                                );
                                console.log(storedTime);
                                const currentTime = new Date();
                                const timeDifferenceInSeconds = Math.floor(
                                  (currentTime - storedTime) / 1000
                                );

                                // Display different messages based on the time difference
                                let timeDisplay;
                                if (timeDifferenceInSeconds < 60) {
                                  timeDisplay = "Just now";
                                } else {
                                  const minutesDifference = Math.floor(
                                    timeDifferenceInSeconds / 60
                                  );
                                  if (minutesDifference < 60) {
                                    timeDisplay = `${minutesDifference} minute${
                                      minutesDifference > 1 ? "s" : ""
                                    } ago`;
                                  } else {
                                    const hoursDifference = Math.floor(
                                      minutesDifference / 60
                                    );
                                    timeDisplay = `${hoursDifference} hour${
                                      hoursDifference > 1 ? "s" : ""
                                    } ago`;
                                  }
                                }

                                return (
                                  <tr key={content.id}>
                                    <td className="p-1">{index + 1}</td>
                                    <td className="p-1">
                                      {content.contentTitle}
                                    </td>
                                    <td className="p-1">Text</td>
                                    <td className="p-1">
                                      <i
                                        className="fa-solid fa-toggle-on"
                                        style={{
                                          fontSize: "25px",
                                          color: "green",
                                        }}
                                      ></i>
                                    </td>
                                    <td className="p-1">{timeDisplay}</td>

                                    <td className="p-1">
                                      <Link
                                        to={`/ContentUpdate/${id}/${topicId}/${content.contentTitle}`}
                                      >
                                        <i className="fa-solid fa-pencil pencile"></i>
                                      </Link>
                                      <i
                                        className="fa-solid fa-trash delete"
                                        onClick={() =>
                                          handleDelete(content.contentTitle)
                                        }
                                      ></i>
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <p>Data not found</p>
                            )}
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
  );
};

export default Content;
