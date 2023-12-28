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

const TopicUpdate = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [individualInstitute, setIndividualInstitute] = useState({
    topicName: "",
    description: "",
    publish: "",
  });
  const { id, topicId } = useParams();

  const onSubmitForm = (e) => {
    e.preventDefault();

    const UserData = {
      topicName: individualInstitute.topicName,
      description: individualInstitute.description,
      publish: individualInstitute.publish,
    };

    axios
      .put(`http://localhost:4010/updateTopic/${id}/${topicId}`, UserData)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          toast("Update Successful", {
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
            navigate(`/topic/${id}`);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the Learn Path.");
        console.log(error.message);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      console.log(topicId);
      try {
        const response = await axios.get(
          `http://localhost:4010/getTopic/${id}/${topicId}`
        );

        setIndividualInstitute(response.data);
        console.log(response.data);

        // Now you can access properties of the topic object
        // console.log("Topic Name:", topicName);
        // console.log("Description:", description);
        // console.log("Publish:", publish);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, topicId]);

  console.log(individualInstitute);

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
                    {loading ? (
                      <p>Loading...</p>
                    ) : individualInstitute ? (
                      <div className="col-12 col-md-9 mx-5">
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

                          <form action="">
                            <div class="modal-body">
                              <div className="row">
                                <div
                                  className="col-lg-12"
                                  style={{ textAlign: "start" }}
                                >
                                  <label className="my-2">Topic Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    style={{
                                      border: "1px solid #dee2e6",
                                    }}
                                    // value={individualInstitute.topicName}
                                    // onChange={(e) =>
                                    //   setIndividualInstitute({
                                    //     ...individualInstitute,
                                    //     topicName: e.target.value,
                                    //   })
                                    // }
                                    value={individualInstitute.topicName}
                                    onChange={(e) =>
                                      setIndividualInstitute({
                                        ...individualInstitute,
                                        topicName: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div
                                  className="col-lg-12"
                                  style={{ textAlign: "start" }}
                                >
                                  <label className="my-2">Description</label>

                                  <textarea
                                    className="form-control"
                                    rows={5}
                                    value={individualInstitute.description}
                                    onChange={(e) =>
                                      setIndividualInstitute({
                                        ...individualInstitute,
                                        description: e.target.value,
                                      })
                                    }
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
                                      value={individualInstitute.publish}
                                      onChange={(e) =>
                                        setIndividualInstitute({
                                          ...individualInstitute,
                                          publish: e.target.value,
                                        })
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

                            <div class="modal-footer1 mt-5">
                              <button
                                type="button"
                                class="btn text-white mx-2"
                                style={{
                                  backgroundColor: "#a83ea1",
                                }}
                                onClick={onSubmitForm}
                              >
                                Add Topics
                              </button>
                              <Link to={`/topic/${id}`}>
                                <button className="create_btn1">Back</button>
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <p>Data not found</p>
                    )}
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

export default TopicUpdate;
