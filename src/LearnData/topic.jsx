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
import Cookies from "js-cookie";

const Topic = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [individualInstitute, setIndividualInstitute] = useState([]);

  const [isNavVisible, setIsNavVisible] = useState(false);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    if (token == undefined) {
      navigate("/");
    }
    set_id(id);
    setTopicTime(new Date().toLocaleString());
  }, [id]);

  const fetchData = async () => {
    console.log(id);
    try {
      const response = await axios.get(`http://localhost:4010/getTopic/${id}`);
      setIndividualInstitute(response.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  fetchData();

  console.log(individualInstitute);
  //Add Institute

  const [topicName, settopicName] = useState("");
  const [description, setdescription] = useState("");
  const [publish, setpublish] = useState("");
  const [TopicTime, setTopicTime] = useState("");
  const [_id, set_id] = useState("");

  const [data1, setdata1] = useState([]);
  if (!TopicTime) {
    setTopicTime(new Date().toLocaleString());
  }

  const AddTopicDetails = {
    topicName: topicName,
    description: description,
    publish: publish,
    TopicTime: TopicTime,
    _id: _id,
  };
  console.log(AddTopicDetails);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (topicName && description && publish && TopicTime && _id !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk", // Replace with your actual token
      };

      const AddTopicsDetails = {
        topicName: topicName,
        description: description,
        publish: publish,
        TopicTime: TopicTime,
        _id: _id,
      };

      axios
        .post(`http://localhost:4010/addTopic/${id}`, AddTopicsDetails, {
          headers,
        })
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast("Topic Add  Successfully", {
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
          }
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

  // const handleDelete = async (id) => {
  //   try {
  //     if (!id) {
  //       setError("Invalid ID provided for deletion.");
  //       return;
  //     }

  //     console.log("Deleting learning path with ID:", id);

  //     const response = await axios.delete(
  //       `http://localhost:4010/onselectedLearningPath/${id}/${topic._Id}`
  //     );

  //     if (response.status === 200) {
  //       toast.success("Learn Path deleted successfully", {
  //         position: "top-right",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });

  //       fetchData();
  //     } else {
  //       console.log(response.data);
  //       alert("Error: " + response.data);
  //       setError("An error occurred while deleting the learning path.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setError("An error occurred while deleting the learning path.");
  //   }
  // };
  const handleDelete = async (topicId) => {
    try {
      if (!topicId) {
        setError("Invalid ID provided for deletion.");
        return;
      }

      console.log("Deleting topic with ID:", topicId);

      const response = await axios.delete(
        `http://localhost:4010/onselectedTopicinLearningPath/${id}/${topicId}`
      );

      if (response.status === 200) {
        toast("Topic deleted successfully", {
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

        fetchData(); // Assuming fetchData() is a function to update your UI or fetch data again
      } else {
        console.log(response.data);
        alert("Error: " + response.data);
        setError("An error occurred while deleting the topic.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the topic.");
      toast("An error occurred while deleting the topic.", {
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
                <div className="">
                  <i
                    className="fa-solid fa-bars bars  d-lg-block d-none"
                    onClick={toggleSidebar}
                  ></i>
                  <div class="">
                    <div className="batch_card p-3">
                      <div className="batch_flex mb-4">
                        {loading ? (
                          <p>Loading...</p>
                        ) : individualInstitute ? (
                          <p style={{ fontSize: "20px" }}>
                            Topic :{individualInstitute.learningPathTitle}
                          </p>
                        ) : (
                          <p>Data not found</p>
                        )}

                        <div>
                          <button
                            type="button"
                            class="year"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                          >
                            + Add Top
                          </button>
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
                          <div class="modal" id="myModal">
                            <div class="modal-dialog modal-sm">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h4 class="modal-title">Add Topic</h4>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                  ></button>
                                </div>

                                <form action="">
                                  <div class="modal-body">
                                    <div className="row">
                                      <div
                                        className="col-lg-12"
                                        style={{ textAlign: "start" }}
                                      >
                                        <label className="my-2">
                                          Topic Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          style={{
                                            border: "1px solid #dee2e6",
                                          }}
                                          onChange={(e) =>
                                            settopicName(e.target.value)
                                          }
                                          value={topicName}
                                        />
                                      </div>
                                      <div
                                        className="col-lg-12"
                                        style={{ textAlign: "start" }}
                                      >
                                        <label className="my-2">
                                          Description
                                        </label>

                                        <textarea
                                          className="form-control"
                                          rows={5}
                                          onChange={(e) =>
                                            setdescription(e.target.value)
                                          }
                                          value={description}
                                        ></textarea>
                                      </div>
                                      <div
                                        className="col-lg-12"
                                        style={{ textAlign: "start" }}
                                      >
                                        <div>
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
                                      </div>
                                    </div>
                                  </div>

                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn text-white"
                                      style={{
                                        backgroundColor: "#a83ea1",
                                      }}
                                      onClick={onSubmitForm}
                                      data-bs-dismiss="modal"
                                    >
                                      Add Topics
                                    </button>
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
                      <div className="mb-3 col-lg-2 col-md-2">
                        <select className="p-1 form-control">
                          <option value="" hidden>
                            0
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
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
                              <th style={{ fontWeight: "500" }}>Topics</th>
                              <th style={{ fontWeight: "500" }}>Last Update</th>
                              <th style={{ fontWeight: "500" }}>Publish</th>
                              <th style={{ fontWeight: "500" }}>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {loading ? (
                              <p>Loading...</p>
                            ) : individualInstitute ? (
                              individualInstitute.topics.map((topic, index) => {
                                // Convert stored time string to Date object
                                const storedTime = new Date(topic.TopicTime);

                                // Calculate the time difference in milliseconds
                                const timeDifference = new Date() - storedTime;

                                // Convert milliseconds to minutes and hours
                                const minutes = Math.floor(
                                  timeDifference / (1000 * 60)
                                );
                                const hours = Math.floor(minutes / 60);

                                // Display different messages based on time difference
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
                                  <tr key={topic._id}>
                                    <td className="p-1">{index + 1}</td>
                                    <td className="p-1">{topic.topicName}</td>
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
                                    <td className="p-1">
                                      <Link
                                        to={`/Content/${_id}/${topic._id}/${_id}`}
                                      >
                                        <button className="topic_btn p-1 m-2">
                                          content
                                        </button>
                                      </Link>
                                      <Link
                                        to={`/TopicUpdate/${_id}/${topic._id}`}
                                      >
                                        <i className="fa-solid fa-pencil pencile"></i>
                                      </Link>

                                      <i
                                        class="fa-solid fa-trash delete"
                                        onClick={() => handleDelete(topic._id)}
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

export default Topic;
