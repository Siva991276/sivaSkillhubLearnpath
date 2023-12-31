import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import sideimage from "./All Images/Logo133.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import siva from "../src/All Images/Siva Image.jpeg";
import Sidebar from "./Sidebar";
import apiList from "./liberary/apiList";
import Cookies from "js-cookie";

const BatchYear = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  const [addblogslist, setAddblogslist] = useState([]);
  const [addInstitutelist, setInstitutelist] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const [selectedInstitutes, setSelectedInstitutes] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  const [error, setError] = useState(null);
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  useEffect(() => {
    fetchblogs();
    InstituteDetails();
    if (token == undefined) {
      navigate("/");
    }
  }, []);

  const InstituteDetails = async () => {
    const api = `${apiList.allAddInstitutes}`;
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setInstitutelist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchblogs = async () => {
    const api = `${apiList.allUsersData}`;
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

  // const filterJobs = () => {
  //   const filteredInstitutes = addblogslist.filter((institute) =>
  //     selectedInstitutes.includes(institute.InstituteType)
  //   );
  //   setIsFiltered(filteredInstitutes.length > 0);
  //   setAddblogslist(filteredInstitutes);
  // };
  const filterJobs = async () => {
    try {
      const responses = await Promise.all(
        selectedInstitutes.map(async (InstituteName) => {
          const response = await axios.get(
            `${apiList.individualInstituteNames}/${InstituteName}`
          );
          return response.data;
        })
      );
      const filteredData = responses.flat(); // Flatten the array of arrays
      setIsFiltered(filteredData.length > 0);
      setFilteredData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleCheckboxChange = (e) => {
  //   const value = e.target.value;
  //   if (selectedInstitutes.includes(value)) {
  //     setSelectedInstitutes(
  //       selectedInstitutes.filter((item) => item !== value)
  //     );
  //   } else {
  //     setSelectedInstitutes([...selectedInstitutes, value]);
  //   }
  // };
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (selectedInstitutes.includes(value)) {
      setSelectedInstitutes(
        selectedInstitutes.filter((item) => item !== value)
      );
    } else {
      setSelectedInstitutes([...selectedInstitutes, value]);
    }
  };
  //Add Institute

  const [selectedFile, setSelectedFile] = useState(null);

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
  const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(true);

  const toggleInstitutions = () => {
    setIsInstitutionsOpen(!isInstitutionsOpen);
  };
  const [isInstitutionsOpen1, setIsInstitutionsOpen1] = useState(false);

  const toggleInstitutions1 = () => {
    setIsInstitutionsOpen1(!isInstitutionsOpen1);
  };
  const [isInstitutionsOpen2, setIsInstitutionsOpen2] = useState(true);

  const toggleInstitutions2 = () => {
    setIsInstitutionsOpen2(!isInstitutionsOpen2);
  };
  const handleDelete = async (id) => {
    try {
      if (!id) {
        setError("Invalid ID provided for deletion.");
        return;
      }
      console.log("Deleting institute with ID:", id);
      const response = await axios.delete(
        `${apiList.deleteInstitute}` + id
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
  return (
    <div>
      <div className="container-fluid p-0">
            <div className="row">
            {isOpen && (
              <div className=" col-12 col-lg-3 col-md-12 sectioncard121">
              <Sidebar/>
              </div>
					  )}						
            <div className={`my-3 col-12 col-md-${isOpen ? 12: 10} col-lg-${isOpen ? 9 : 12}`}>
                <div className="d-lg-block  ">
                <i className="fa-solid fa-bars bars d-lg-block d-none" onClick={toggleSidebar}></i>
                <div class="">
                  <div className="card section-31 shadow p-2 mb-3">
                    <div className="row">
                      <div className="col-md-4">
                        <h4 className=" ">Filter Batch Years :</h4>
                      </div>

                      {/* <div style={{ marginLeft: "auto" }} class="m-2">
                        <div>
                          <button
                            style={{ border: "none", backgroundColor: "white" }}
                            className=""
                          >
                            <i
                              type="button"
                              class="material-symbols-outlined mx-3 mt-4"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal23"
                            >
                              edit_square
                            </i>
                            <b class="resumeh7 row mx-3">+Add</b>
                          </button>
                          <ToastContainer
                            position="top-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                          />

                          <div class="modal" id="myModal23">
                            <div class="modal-dialog ">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <div className="d-flex flex-row">
                                    <button
                                      className={`p-1 m-2 ${
                                        showSingleUserForm ? "bg-primary" : ""
                                      }`}
                                      onClick={handleSingleUserButtonClick}
                                    >
                                      Single User
                                    </button>
                                    <button
                                      className={`p-1 m-2 ${
                                        showMultipleUserForm ? "bg-primary" : ""
                                      }`}
                                      onClick={handleMultipleUserButtonClick}
                                    >
                                      Multiple User
                                    </button>
                                  </div>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                  ></button>
                                </div>

                                {showSingleUserForm && (
                                  <div class="modal-body">
                                    <form action="" onSubmit={onSubmitForm}>
                                      <div className="row">
                                        <div className="col-12 col-md-4 ">
                                          <label className="headingAdd">
                                            Institution :
                                          </label>

                                          <div className="">
                                            <select
                                              name=""
                                              id=""
                                              className="p-2"
                                              onChange={(e) =>
                                                setInstituteType(e.target.value)
                                              }
                                            >
                                              <option value="SelectInstitutions">
                                                ---Select Institutions---
                                              </option>
                                              {addInstitutelist.map(
                                                (institute) => (
                                                  <option
                                                    key={institute.id}
                                                    value={
                                                      institute.InstituteName
                                                    }
                                                  >
                                                    {institute.InstituteName}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-4 ">
                                          <label className="headingAdd">
                                            Batch Year :
                                          </label>

                                          <div className=" ">
                                            <select
                                              name=""
                                              id=""
                                              className=" p-2"
                                              onChange={(e) =>
                                                setBatchYear(e.target.value)
                                              }
                                            >
                                              <option value="Select Batch Year">
                                                ---Select Batch Year---
                                              </option>
                                              {addInstitutelist.map(
                                                (institute) => (
                                                  <option
                                                    key={institute.id}
                                                    value={institute.BatchYear}
                                                  >
                                                    {institute.BatchYear}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-4 ">
                                          <label className="headingAdd">
                                            Batch :
                                          </label>

                                          <div className="">
                                            <select
                                              name=""
                                              id=""
                                              className="p-2"
                                              onChange={(e) =>
                                                setSelectBatch(e.target.value)
                                              }
                                            >
                                              <option value="Select Batch">
                                                ---Select Batch---
                                              </option>
                                              {addInstitutelist.map(
                                                (institute) => (
                                                  <option
                                                    key={institute.id}
                                                    value={
                                                      institute.SelectBatch
                                                    }
                                                  >
                                                    {institute.SelectBatch}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <br />

                                      <div className="row">
                                        <div className="col-12 col-md-6">
                                          <label className="headingAdd">
                                            First Name :
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            className="etotal"
                                            style={{
                                              border: "1px solid black",
                                            }}
                                            placeholder="Enter  First Name "
                                            onChange={(e) =>
                                              setFirstName(e.target.value)
                                            }
                                            value={FirstName}
                                          />
                                        </div>
                                        <div className="col-12 col-md-6">
                                          <label className="headingAdd">
                                            Last Name :
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            className="etotal"
                                            style={{
                                              border: "1px solid black",
                                            }}
                                            placeholder="Enter Last Name"
                                            onChange={(e) =>
                                              setLastName(e.target.value)
                                            }
                                            value={LastName}
                                          />
                                        </div>
                                      </div>
                                      <br />
                                      <div className="col-12 col-md-12 m-2">
                                        <label className="headingAdd">
                                          Email :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal "
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Email"
                                          onChange={(e) =>
                                            setuserEmail(e.target.value)
                                          }
                                          value={userEmail}
                                        />
                                      </div>
                                      <br />

                                      <div className="row">
                                        <div className="col-12 col-md-6">
                                          <label className="headingAdd">
                                            Regd Id :
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            className="etotal"
                                            style={{
                                              border: "1px solid black",
                                            }}
                                            placeholder="Enter Regd Id/Hallticket No"
                                            onChange={(e) =>
                                              setRegdid(e.target.value)
                                            }
                                            value={Regdid}
                                          />
                                        </div>
                                        <div className="col-12 col-md-6 ">
                                          <label className="headingAdd">
                                            Mobile No :
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            className="etotal"
                                            style={{
                                              border: "1px solid black",
                                            }}
                                            placeholder="Enter Mobile No"
                                            onChange={(e) =>
                                              setuserNumber(e.target.value)
                                            }
                                            value={userNumber}
                                          />
                                        </div>
                                      </div>
                                      <br />

                                      <div className="d-flex flex-row">
                                        <div className="col-12 col-md-6 ">
                                          <label className="headingAdd">
                                            Password :
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            className="etotal"
                                            style={{
                                              border: "1px solid black",
                                            }}
                                            placeholder="Enter Password"
                                            onChange={(e) =>
                                              setPassword(e.target.value)
                                            }
                                            value={Password}
                                          />
                                        </div>
                                        <div className="col-12 col-md-6  mx-2">
                                          <label className="headingAdd">
                                            Access Period :
                                          </label>
                                          <br />

                                          <select
                                            name=""
                                            id=""
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                            value={AxiosPlans}
                                            className="Typesection p-2 w-100"
                                          >
                                            <option value="Exam Practice">
                                              -- Select Access Period --
                                            </option>
                                            <option
                                              value="Exam Practice1"
                                              onChange={(e) =>
                                                setAxiosPlans(e.target.value)
                                              }
                                            >
                                              3 Months
                                            </option>
                                            <option
                                              value="LMS"
                                              onChange={(e) =>
                                                setAxiosPlans(e.target.value)
                                              }
                                            >
                                              6 Months
                                            </option>
                                            <option
                                              value="Mock Interview"
                                              onChange={(e) =>
                                                setAxiosPlans(e.target.value)
                                              }
                                            >
                                              9 Months
                                            </option>
                                            <option
                                              value="Previous papers"
                                              onChange={(e) =>
                                                setAxiosPlans(e.target.value)
                                              }
                                            >
                                              12 Months
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-12 col-md-6 m-2">
                                        <label className="headingAdd">
                                          Expired Date :
                                        </label>
                                        <br />
                                        <input
                                          type="Date"
                                          className="etotal p-2"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Expired Date"
                                          onChange={(e) =>
                                            setExpiryDate(e.target.value)
                                          }
                                          value={ExpiryDate}
                                        />
                                      </div>

                                      <div class="modal-footer mt-3">
                                        <button
                                          type="submit"
                                          class="btn adduserdata"
                                          data-bs-dismiss="modal"
                                        >
                                          Add Users
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                )}

                                {showMultipleUserForm && (
                                  <div class="modal-body">
                                    <div className="d-flex flex-row mb-5">
                                      <h5>Upload Users</h5>
                                      <div className="col-12 col-md-7 "></div>

                                      <button
                                        className="bg-warning p-1 w-25 text-white"
                                        onClick={handleDownloadFormat}
                                      >
                                        <i
                                          class="fa-solid fa-download"
                                          style={{ color: "white" }}
                                        ></i>{" "}
                                        Download Format
                                      </button>
                                    </div>
                                    <form action="" onSubmit={onSubmitForm}>
                                      <div className="row">
                                        <div className="col-12 col-md-4 ">
                                          <label className="headingAdd">
                                            Institution :
                                          </label>

                                          <div className="">
                                            <select
                                              name=""
                                              id=""
                                              className="p-2"
                                              onChange={(e) =>
                                                setInstituteType(e.target.value)
                                              }
                                            >
                                              <option value="SelectInstitutions">
                                                ---Select Institutions---
                                              </option>
                                              {addInstitutelist.map(
                                                (institute) => (
                                                  <option
                                                    key={institute.id}
                                                    value={
                                                      institute.InstituteName
                                                    }
                                                  >
                                                    {institute.InstituteName}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-4 ">
                                          <label className="headingAdd">
                                            Batch Year :
                                          </label>

                                          <div className=" ">
                                            <select
                                              name=""
                                              id=""
                                              className=" p-2"
                                              onChange={(e) =>
                                                setBatchYear(e.target.value)
                                              }
                                            >
                                              <option value="Select Batch Year">
                                                ---Select Batch Year---
                                              </option>
                                              {addInstitutelist.map(
                                                (institute) => (
                                                  <option
                                                    key={institute.id}
                                                    value={institute.BatchYear}
                                                  >
                                                    {institute.BatchYear}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-4 ">
                                          <label className="headingAdd">
                                            Batch :
                                          </label>

                                          <div className="">
                                            <select
                                              name=""
                                              id=""
                                              className="p-2"
                                              onChange={(e) =>
                                                setSelectBatch(e.target.value)
                                              }
                                            >
                                              <option value="Select Batch">
                                                ---Select Batch---
                                              </option>
                                              {addInstitutelist.map(
                                                (institute) => (
                                                  <option
                                                    key={institute.id}
                                                    value={
                                                      institute.SelectBatch
                                                    }
                                                  >
                                                    {institute.SelectBatch}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <div className="d-flex flex-row">
                                        <div className="col-12 col-md-6  mx-2">
                                          <label className="headingAdd">
                                            Access Period :
                                          </label>
                                          <br />

                                          <select
                                            name=""
                                            id=""
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                            value={AxiosPlans}
                                            className="Typesection p-2 w-100"
                                          >
                                            <option value="Exam Practice">
                                              -- Select Access Period --
                                            </option>
                                            <option
                                              value="Exam Practice"
                                              onChange={(e) =>
                                                setAxiosPlans(e.target.value)
                                              }
                                            >
                                              3 Months
                                            </option>
                                            <option
                                              value="LMS"
                                              onChange={(e) =>
                                                setAxiosPlans(e.target.value)
                                              }
                                            >
                                              6 Months
                                            </option>
                                            <option
                                              value="Mock Interview"
                                              onChange={(e) =>
                                                setAxiosPlans(e.target.value)
                                              }
                                            >
                                              9 Months
                                            </option>
                                            <option
                                              value="Previous papers"
                                              onChange={(e) =>
                                                setAxiosPlans(e.target.value)
                                              }
                                            >
                                              12 Months
                                            </option>
                                          </select>
                                        </div>
                                        <div className="col-12 col-md-1"></div>
                                        <div className="col-12 col-md-4">
                                          <label className="headingAdd">
                                            Users File:
                                          </label>
                                          <br />
                                          <input
                                            type="file"
                                            className="etotal p-2"
                                            style={{
                                              border: "1px solid black",
                                            }}
                                            placeholder="Enter Password"
                                            onChange={handleFileChange}
                                            accept=".xls, .xlsx" // Limit file selection to Excel files
                                          />
                                        </div>
                                      </div>

                                      <div class="modal-footer mt-5">
                                        <button
                                          type="submit"
                                          class="btn adduserdata"
                                          data-bs-dismiss="modal"
                                        >
                                          Add Users
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-md-8 text-end">
                      <button className="extends12 p-1 my-2">
                        {" "}
                        <i class="fa-solid fa-plus"></i>Create Batch Year
                      </button>
                      </div>
                      
                    </div>

                    <div className="row">
                      <div className="col-12 col-md-6">
                        <select
                          name=""
                          id=""
                          className="form-control"
                          onChange={handleCheckboxChange}
                        >
                          <option value="Select Institutions">
                            ---Select Institutions---
                          </option>
                          {addInstitutelist.map((institute) => (
                            <option
                              key={institute.id}
                              value={institute.InstituteName}
                            >
                              {institute.InstituteName}
                            </option>
                          ))}
                        </select>
                        <h6 className="mx-2" style={{ fontWeight: "600" }}>
                          Select Institutions
                        </h6>
                      </div>

                      <div className="col-12 col-md-6">
                        <button
                          className=" p-2  selectbtn112"
                          style={{ backgroundColor: "#a5059d" , border:"none" }}
                          onClick={filterJobs}
                        >
                          Go
                        </button>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>

                {isFiltered ? (
                  <div className="clo-12 col-md-12">
                    <div className="card section-31 shadow">
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table className="table table-striped text-center">
                            <thead>
                              <tr className="table-dark">
                                <th>S.no</th>
                                <th>Batch Year</th>
                                <th>Batchs</th>

                                <th>Actions</th>
                              </tr>
                            </thead>

                            <tbody>
                              {filteredData.map((blog) => (
                                <tr key={blog.id}>
                                  <td>{blog.Sno}</td>
                                  <td>{blog.BatchYear}</td>
                                  <td>{blog.SelectBatch}</td>

                                  <td className="text-center">
                                    <ToastContainer
                                      position="top-right"
                                      autoClose={1000}
                                      hideProgressBar={false}
                                      newestOnTop={false}
                                      closeOnClick
                                      rtl={false}
                                      pauseOnFocusLoss
                                      draggable
                                      pauseOnHover
                                      theme="colored"
                                    />
                                    <button
                                      style={{
                                        border: "none",
                                        backgroundColor: "white",
                                      }}
                                    >
                                      <Link to={`/UpdateYear/${blog._id}`}>
                                        <span
                                          type="button"
                                          className="material-symbols-outlined mx-1 p-1"
                                          style={{
                                            color: "black",
                                            backgroundColor: "pink",
                                            borderRadius: "5px",
                                          }}
                                        >
                                          edit_square
                                        </span>
                                      </Link>
                                    </button>

                                    <button
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
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default BatchYear;
