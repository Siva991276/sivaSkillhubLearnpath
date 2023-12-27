import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Audio } from 'react-loader-spinner';
import apiList from "../liberary/apiList";

const Access = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [addInstitutelist, setInstitutelist] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
  const [selectedInstitutes, setSelectedInstitutes] = useState('');
  const [selectedBatchYear, setSelectedBatchYear] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  const [showSingleUserForm, setShowSingleUserForm] = useState(true);
  const [showMultipleUserForm, setShowMultipleUserForm] = useState(false);
	const [worksheetLoading, setWorksheetLoading] = useState(true);


  const handleSingleUserButtonClick = () => {
    setShowSingleUserForm(true);
    setShowMultipleUserForm(false);
  };

  const handleMultipleUserButtonClick = () => {
    setShowSingleUserForm(false);
    setShowMultipleUserForm(true);
  };

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
    InstituteDetails();
    if (token == undefined) {
      navigate("/");
    }
  }, [selectedInstitutes]);

  const InstituteDetails = async () => {
    const api = "http://localhost:4010/allAddInstitutes";
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
    const api = `${apiList.allAddInstitutes}`;
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAddblogslist(response.data);
			setWorksheetLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
			setWorksheetLoading(false);
    }
  };

  const filterJobs = () => {
    const filteredInstitutes = addblogslist.filter(
      (institute) =>
        selectedInstitutes.includes(institute.InstituteName) &&
        selectedBatchYear.includes(institute.BatchYear) &&
        selectedBatch.includes(institute.SelectBatch)
    );
    setIsFiltered(filteredInstitutes.length > 0);
    setAddblogslist(filteredInstitutes);
    console.log(filteredInstitutes)

    // Print the count of filtered jobs to the console
    console.log("Number of filtered jobs:", filteredInstitutes.length);
    console.log(addInstitutelist,addblogslist)
  };

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

  const handleBatchYearChange = (e) => {
    const value = e.target.value;
    if (selectedBatchYear.includes(value)) {
      setSelectedBatchYear(selectedBatchYear.filter((item) => item !== value));
    } else {
      setSelectedBatchYear([...selectedBatchYear, value]);
    }
  };

  const handleBatchChange = (e) => {
    const value = e.target.value;
    if (selectedBatch.includes(value)) {
      setSelectedBatch(selectedBatch.filter((item) => item !== value));
    } else {
      setSelectedBatch([...selectedBatch, value]);
    }
  };

  const [Regdid, setRegdid] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userNumber, setuserNumber] = useState("");
  const [BatchYear, setBatchYear] = useState("");
  const [SelectBatch, setSelectBatch] = useState("");
  const [InstituteType, setInstituteType] = useState("");
  const [AxiosPlans, setAxiosPlans] = useState("");
  const [Password, setPassword] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");

  const [data1, setdata1] = useState([]);
  console.log(FirstName);
  const AddInstitute = {
    Regdid: Regdid,
    FirstName: FirstName,
    LastName: LastName,
    userEmail: userEmail,
    userNumber: userNumber,
    BatchYear: BatchYear,
    SelectBatch: SelectBatch,
    InstituteType: InstituteType,
    AxiosPlans: AxiosPlans,
    Password: Password,
    ExpiryDate: ExpiryDate,
  };
  console.log(FirstName);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      Regdid &&
      FirstName &&
      LastName &&
      userEmail &&
      userNumber &&
      BatchYear &&
      SelectBatch &&
      InstituteType &&
      AxiosPlans &&
      Password &&
      ExpiryDate !== ""
    ) {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4010/AddUsers", AddInstitute, {
          headers,
        })
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data1);

  console.log(FirstName);

  //By-Batch
  const AddInstitute1 = {
    BatchYear: BatchYear,
    SelectBatch: SelectBatch,
    InstituteType: InstituteType,
    AxiosPlans: AxiosPlans,
  };
  console.log(FirstName);
  const onSubmitForm1 = (e) => {
    e.preventDefault();
    if (
      // Regdid &&
      // FirstName &&
      // LastName &&
      // userEmail &&
      // userNumber &&
      BatchYear &&
      SelectBatch &&
      InstituteType &&
      AxiosPlans !== ""
      // Password &&
      // ExpiryDate !== ""
    ) {
      console.log(`http://localhost:4010/ByBatchData/${InstituteType}`);
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .put(
          `http://localhost:4010/ByBatchData/${InstituteType}`,
          AddInstitute1,
          {
            headers,
          }
        )
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Access Updated Successfully For 7 Users", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data1);

  const [aboveData, setaboveData] = useState("");
  const [institutionpara, setinstitutionpara] = useState("");
  const [state1, setState1] = useState("");
  console.log(state1);
  //By-LIst
  const AddInstitute2 = {
    aboveData: aboveData,
    institutionpara: institutionpara,
    InstituteType: InstituteType,
    AxiosPlans: AxiosPlans,
  };
  console.log(FirstName);
  const onSubmitForm2 = (e) => {
    e.preventDefault();
    if (
      // Regdid &&
      // FirstName &&
      // LastName &&
      // userEmail &&
      // userNumber &&
      aboveData &&
      institutionpara &&
      InstituteType &&
      AxiosPlans !== ""
      // Password &&
      // ExpiryDate !== ""
    ) {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .put(
          `http://localhost:4010/ByListData/${InstituteType}`,
          AddInstitute2,
          {
            headers,
          }
        )
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDownloadFormat = () => {
    // Check if a file is selected
    if (selectedFile) {
      // Implement your file download logic here
      // For example, you can create a download link and trigger a click event
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(selectedFile);
      downloadLink.download = "Institute.xlsx"; // Specify the desired file name
      downloadLink.click();
    } else {
      alert("Please select a file before downloading the format.");
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
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange2 = (rowId) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(rowId)) {
        return prevSelectedRows.filter((id) => id !== rowId);
      } else {
        return [...prevSelectedRows, rowId];
      }
    });
  };
  const columns = [
    { field: "SNO", headerName: "SNO", width: 120 },
    { field: "INSTITUTENAME", headerName: "INSTITUTE NAME", width: 220 },
    { field: "BATCHYEAR", headerName: "BATCH YEAR", width: 190},
    { field: "BATCH", headerName: "BATCH", width: 190 },
    {
        field: "ACCESS",
        headerName: "ACCESS",
        width: 170,
        renderCell: (params) => (
          <input
            type="checkbox"
            checked={selectedRows.includes(params.id)}
            onChange={() => handleCheckboxChange2(params.id)}
            style={{ transform: "scale(1.5)" }}
          />
        ),
      },
    // {
    //     field: "",
    //     headerName: "",
    //     width: 170,
    //     renderCell: (params) => renderActionButtons(params.row),
    // },
];

const headerColumns = columns.map((col) => ({
    field: col.field,
    headerName: col.headerName,
    width: col.width,
    renderCell: col.renderCell,
}));

const renderActionButtons = (blog) => (
    <div>
  {/* <button
            type="button"
            className="btn btn-dark mx-1"
            onClick={() => navigate("/VideoPage",{state :{videopathId:blog._id}})}
        >
            <i className="fa-solid fa-eye" style={{ color: "white" }}></i>
        </button> */}
    </div>
);

const rows = addblogslist.map((blog, index) => ({
    id: index + 1, // Add this line to include a unique id for each row
    SNO: index + 1,
    INSTITUTENAME: blog.InstituteName,
    BATCHYEAR: blog.BatchYear,
    BATCH:blog.SelectBatch,
    ACCESS: renderActionButtons(blog),
_id:blog._id,
}));

  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="">
            <div className="row">
            {isOpen && (
              <div className=" col-12 col-lg-3 col-md-12 sectioncard121">
              <Sidebar/>
              <ToastContainer/>
              </div>
					  )}						
            <div className={`my-3 col-12 col-md-${isOpen ? 12: 10} col-lg-${isOpen ? 9 : 12}`}>
            {worksheetLoading ? (
                    <div colSpan="4" className="d-flex flex-row justify-content-center align-items-center" style={{ height: '100vh' }}>
                      <Audio
                        type="Audio"
                        color="#6a2a69"
                        height={40}
                        width={60}
                      />
                    </div>                  
              ) : (
                <div className="d-lg-block">
                <i className="fa-solid fa-bars bars  d-lg-block d-none" onClick={toggleSidebar}></i>
                  <div className="card-item p-4">
                    <div className="row">
                      <div className="col-md-9">
                        <h4 className="">Learning Path Access</h4>
                      </div>
                        <div className="col-md-8 text-end">
                        <div style={{ marginLeft: "auto" }} class="m-2">
                        <div>                        
                    </div>
                </div>
            </div>
            </div>
                    <div className="row">
                      <div className="p-2 col-md-3">
                        <select
                          name=""
                          id=""
                          className="form-control"
                          onChange={handleCheckboxChange}
                          placeholder="---Select Institutions---"
                          
                        >
                          <option value="Select Institutions"  >
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
                        <h6 className="mt-2" style={{ fontWeight: "600" }}>
                          Select Institutions
                        </h6>
                      </div>

                      <div className="p-2 col-md-3">
                        <select
                          name=""
                          id=""
                          className="form-control"
                          onChange={handleBatchYearChange}
                        >
                          <option value="Select Batch Year">
                            ---Select Batch Year---
                          </option>
                          {addInstitutelist.map((institute) => (
                            <option
                              key={institute.id}
                              value={institute.BatchYear}
                            >
                              {institute.BatchYear}
                            </option>
                          ))}
                        </select>
                        <h6 className="mt-2" style={{ fontWeight: "600" }}>
                          Select Batch Year
                        </h6>
                      </div>

                      {/* Batch filter */}
                      <div className="p-2 col-md-3">
                        <select
                          name=""
                          id=""
                          className="form-control"
                          onChange={handleBatchChange}
                        >
                          <option value="Select Batch">
                            ---Select Batch---
                          </option>
                          {addInstitutelist.map((institute) => (
                            <option
                              key={institute.id}
                              value={institute.SelectBatch}
                            >
                              {institute.SelectBatch}
                            </option>
                          ))}
                        </select>
                        <h6 className="mt-2" style={{ fontWeight: "600" }}>
                          Select Batch
                        </h6>
                      </div>

                      <div className="p-2 col-md-3">
                        <button
                          className="btn btn-dark"
                          style={{ backgroundColor: "#a5059d", border:"none" }}
                          onClick={filterJobs}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    <br />

                    <div className="d-flex flex-row">
                    <div className="mt-2">                     
                    <div>
												<label>Show</label>
											</div>
											<select className="form-control">
												<option className="form-control">1</option>
												<option className="form-control">2</option>
												<option className="form-control">3</option>
												<option className="form-control">4</option>
												<option className="form-control">5</option>
												<option className="form-control">6</option>
												<option className="form-control">7</option>
												<option className="form-control">8</option>
												<option className="form-control">9</option>
												<option className="form-control">10</option>
											</select>
										</div>
										<div className="col-4 col-md-7"></div>

										<div className="mt-2">
											
										</div>
									</div>
                  
									<p className="mt-2">entires</p>
									<div style={{ height: "auto", width: "100%" }}>
										<DataGrid
											rows={rows}
											columns={headerColumns}
											initialState={{
												pagination: {
													paginationModel: { page: 0, pageSize: 5 },
												},
											}}
											pageSizeOptions={[5, 10]}
                                            
										/>
									</div>
                  </div>
                
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Access;
