import React from "react";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const ContentUpdate = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token == undefined) {
      navigate("/");
    }
  }, []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [individualInstitute, setIndividualInstitute] = useState({
    contentTitle: "",
    contentdes: "",
    contentimg: "",
    publish: "",
  });
  const { id, topicId, contentTitle } = useParams();

  //   const onSubmitForm = (e) => {
  //     e.preventDefault();

  //     const UserData = {
  //       contentTitle: individualInstitute.contentTitle,
  //       contentdes: individualInstitute.contentdes,
  //       contentimg: individualInstitute.contentimg,
  //       publish: individualInstitute.publish,
  //     };

  //     axios
  //       .put(
  //         `http://localhost:4010/updateContent/${id}/${topicId}/${contentTitle}`,
  //         UserData
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //         if (response.status === 200) {
  //           toast.success("Update Successful", {
  //             position: "top-right",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "colored",
  //           });
  //           setTimeout(function () {
  //             // navigate(`/topic/${id}`);
  //           }, 3000);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setError("An error occurred while updating the Learn Path.");
  //         console.log(error.message);
  //       });
  //   };

  //   const onSubmitForm = async (e) => {
  //     e.preventDefault();

  //     const UserData = {
  //       contentTitle: individualInstitute.contentTitle,
  //       contentdes: individualInstitute.contentdes,
  //       contentimg: individualInstitute.contentimg,
  //       publish: individualInstitute.publish,
  //     };

  //     try {
  //       const response = await axios.put(
  //         // `http://localhost:4010/updateContent/${id}/${topicId}/${contentTitle}`,
  //         `http://localhost:4010/updateContent/${id}/${topicId}/${contentTitle}`,
  //         UserData
  //       );

  //       console.log(response.data);
  //       if (response.status === 200) {
  //         toast.success("Update Successful", {
  //           position: "top-right",
  //           autoClose: 1000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });
  //         setTimeout(function () {
  //           navigate(`/Content/${id}/${topicId}/${id}`);
  //         }, 3000);
  //         // Add your success handling logic, e.g., show a success message
  //         console.log("Update Successful");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       setError("An error occurred while updating the Learn Path.");
  //       console.log(error.message);
  //     }
  //   };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const UserData = {
      contentTitle: individualInstitute.contentTitle,
      contentdes: individualInstitute.contentdes,
      contentimg: individualInstitute.contentimg,
      publish: individualInstitute.publish,
    };

    try {
      const response = await axios.put(
        `http://localhost:4010/updateContent/${id}/${topicId}/${contentTitle}`,
        UserData
      );

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
          navigate(`/Content/${id}/${topicId}/${id}`);
        }, 3000);

        console.log("Update Successful");
      }
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 400) {
        // Handle the case where the name already exists
        toast.error("Content title already exists. Choose a different title.", {
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
        setError("An error occurred while updating the Learn Path.");
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4010/getSingledataContents/${id}/${topicId}/${contentTitle}`
        );

        setIndividualInstitute(response.data.contentData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, topicId, contentTitle]);

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
          <div className="">
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

                  <div class="">
                    {loading ? (
                      <p>Loading...</p>
                    ) : individualInstitute ? (
                      <div>
                        <div className="batch_card p-3">
                          <div>
                            <p>Text Content Title</p>
                            <input
                              type="text"
                              className="form-control"
                              value={individualInstitute.contentTitle}
                              onChange={(e) =>
                                setIndividualInstitute({
                                  ...individualInstitute,
                                  contentTitle: e.target.value,
                                })
                              }
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
                              value={individualInstitute.contentdes}
                              onChange={(e) =>
                                setIndividualInstitute({
                                  ...individualInstitute,
                                  contentdes: e.target.value,
                                })
                              }
                            ></textarea>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p>Insert Image</p>
                          <input
                            type="file"
                            className="w-175 p-2 form-control"
                          ></input>
                        </div>
                        <div className="batch_card p-3">
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

                        <div className="mt-3">
                          <button className="file" onClick={onSubmitForm}>
                            Create
                          </button>
                          <Link to={`/Content/${id}/${topicId}/${id}`}>
                            <button className=" file bg-dark">Back</button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <p>Loading..</p>
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

export default ContentUpdate;
