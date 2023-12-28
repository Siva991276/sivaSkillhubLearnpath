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
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ReportsAction = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [allUsersList, setAllUserslist] = useState([]);
  const [addInstitutelist, setInstitutelist] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
  const [selectedInstitutes, setSelectedInstitutes] = useState('');
  const [selectedBatchYear, setSelectedBatchYear] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

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
    fetchblogs2()
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

  const fetchblogs2 = async () => {
    const api = `${apiList.allUsersData}`;
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAllUserslist(response.data);
			setWorksheetLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
			setWorksheetLoading(false);
    }
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

  const [aboveData, setaboveData] = useState("");
  const [institutionpara, setinstitutionpara] = useState("");
  const [state1, setState1] = useState("");
  console.log(state1);
  
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
  const exportToExcel = () => {
    const dataToExport = allUsersList;
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "praticipation_data" + fileExtension);
};
  const columns = [
    { field: "SNO", headerName: "SNO", width: 70 },
    { field: "STUDENTNAME", headerName: "STUDENT NAME", width: 160 },
    { field: "EMAIL", headerName: "EMAIL", width: 160},
    { field: "INSTITUTE", headerName: "INSTITUTE", width: 160 },
    { field: "HALLTICKETNUMBER", headerName: "HALL TICKET NUMBER", width: 160 },
    { field: "BATCHYEAR", headerName: "BATCH YEAR/NAME", width: 160 },
    { field: "COMPLETED", headerName: "COMPLETED", width: 160 },
    { field: "COMPLETEDANALYSIS", headerName: "COMPLETED ANALYSIS", width: 160 },
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

const rows = allUsersList.map((blog, index) => ({
    id: index + 1, // Add this line to include a unique id for each row
    SNO: index + 1,
    STUDENTNAME: blog.FirstName+blog.LastName,
    EMAIL: blog.userEmail,
    INSTITUTE:blog.InstituteType,
    HALLTICKETNUMBER:blog.hallti,
    BATCHYEAR:blog.BatchYear,
    COMPLETED:blog.ExpiryDate,
    COMPLETEDANALYSIS:blog.ExpiryDate,
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
                        <h4 className="">Download Reports</h4>
                      </div>
                        <div className="col-md-8 text-end">
                        <div style={{ marginLeft: "auto" }} class="m-2">
                        <div>                        
                    </div>
                </div>
            </div>
            </div>
                    <div className="row">
                      <div className="p-2 col-md-2">
                        <select
                          name=""
                          id=""
                          className="form-control"
                          onChange={handleCheckboxChange}
                          placeholder="---Select Institutions---"
                          
                        >
                          <option value="Select Institutions"  >
                            Select Institutions
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
                          Institutions
                        </h6>
                      </div>

                      <div className="p-2 col-md-2">
                        <select
                          name=""
                          id=""
                          className="form-control"
                          onChange={handleBatchYearChange}
                        >
                          <option value="Select Batch Year">
                            Select BatchYear
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
                          Batch Year
                        </h6>
                      </div>
                      <div className="p-2 col-md-2">
                        <select
                          name=""
                          id=""
                          className="form-control"
                          onChange={handleBatchChange}
                        >
                          <option value="Select Batch">
                            Select Batch
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
                          Batch
                        </h6>
                      </div>
                      <div className="p-2 col-md-2">
                      <input
                      type="date"
                      className="form-control"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                        <h6 className="mt-2" style={{ fontWeight: "600" }}>
                          FromDate
                        </h6>
                      </div>
                      <div className="p-2 col-md-2">
                      <input
                      type="date"
                      className="form-control"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                        <h6 className="mt-2" style={{ fontWeight: "600" }}>
                          ToDate
                        </h6>
                      </div>

                      <div className="p-2 col-md-2">
                        <button
                          className="btn btn-dark"
                          style={{ backgroundColor: "#a5059d", border:"none" }}
                          onClick={exportToExcel}
                        >
                          Download
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

export default ReportsAction;
