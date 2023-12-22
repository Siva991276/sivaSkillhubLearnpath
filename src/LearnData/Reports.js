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
import Sidebar from "../Sidebar";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";


const Reports = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [addblogslist1, setAddblogslist1] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
  const [institutetypeCounts, setInstitutetypeCounts] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  console.log(addblogslist)
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
  const filteredVideos = addblogslist.filter((folder) => {
    const folderNameMatches = folder.VideofolderName.toLowerCase().includes(searchQuery.toLowerCase());
    return folderNameMatches
  });
  const [VideofolderName, setVideofolderName] = useState("");

  const [data1, setdata1] = useState([]);

  const AddVideosDetails = {
    VideofolderName: VideofolderName,
  };
  console.log(AddVideosDetails);



  const onSubmitForm = (e) => {
    e.preventDefault();
    if (VideofolderName !== "") {
      const AddVideosDetails = {
        VideofolderName: VideofolderName,
      };
      console.log(AddVideosDetails)
      axios
        .post("http://localhost:4010/AddVideoPath", AddVideosDetails)
        .then((response) => {
          setdata1(response.data);
          console.log(response.data);
          if (response.status === 200) {
            toast("Video Folder Created Successfully", {
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
            fetchblogs();
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            toast("Video path with the same name already exists", {
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
            setError("An error occured while creating FolderPath.");
          }
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };

  const onSubmitUpdatedForm = (e) => {
		e.preventDefault();
    const AddVideosDetails = {
      VideofolderName: selectedVideopath,
    };
    console.log(AddVideosDetails)
		const nonemptyuserData = Object.fromEntries(
			Object.entries(AddVideosDetails).filter(([key, value]) => value !== "")
		);
		axios
			.put(`http://localhost:4010/UpdateVideosDetails/${selectedvideopathId}`, nonemptyuserData)
			.then((response) => {
				if (response.status === 200) {
					toast("VideoFolder Updated successfully", {
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
          fetchblogs();
				}
			})
			.catch((error) => {
				console.log(error.response.data);
				toast.error("Institute already Updated");
			});
	};

  console.log(data1);

  const GotohandleDeleteClick = async (id) => {
    try {
      console.log("Deleting institute with ID:", id);
      const response = await axios.delete(
        `http://localhost:4010/deleteVideo/${id}`
      );
      if (response.status === 200) {
        toast("Deleted Folder Successfully", {
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
  const [isInstitutionsOpen1, setIsInstitutionsOpen1] = useState(true);

  const toggleInstitutions1 = () => {
    setIsInstitutionsOpen1(!isInstitutionsOpen1);
  };
  const [isInstitutionsOpen2, setIsInstitutionsOpen2] = useState(true);

  const toggleInstitutions2 = () => {
    setIsInstitutionsOpen2(!isInstitutionsOpen2);
  };
	const [selectedVideopath, setSelectedVideopath] = useState(null);
	const [selectedvideopathId, setSelectedvideopathId] = useState(null);
	const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const GotohandleEditClick = (blog) => {
    let Updatedfields = {Name:blog.VideofolderName,videofolderid:blog._id}
		delete blog['ACTION'];
		setSelectedVideopath(blog.Videofoldername);
    setSelectedvideopathId(blog._id)
		setUpdateModalOpen(true);
	};
  console.log(selectedVideopath)

  const columns = [
		{ field: "SNO", headerName: "SNO", width: 120 },
        { field: "ID", headerName: "ID", width: 120 },
		{ field: "LEARNINGPATH", headerName: "LEARNING PATH", width: 200 },
		{ field: "ATTEMPTS", headerName: "ATTEMPTS", width: 200 },
		{
			field: "ACTION",
			headerName: "ACTION",
			width: 240,
			renderCell: (params) => renderActionButtons(params.row),
		},
	];

	const headerColumns = columns.map((col) => ({
		field: col.field,
		headerName: col.headerName,
		width: col.width,
		renderCell: col.renderCell,
	}));

	const renderActionButtons = (blog) => (
		<div>
      <button
				type="button"
				className="btn btn-dark mx-1"
				onClick={() => navigate("/VideoPage",{state :{videopathId:blog._id}})}
			>
				<i className="fa-solid fa-eye" style={{ color: "white" }}></i>
			</button>
		</div>
	);

	const rows = filteredVideos.map((blog, index) => ({
		id: index + 1, // Add this line to include a unique id for each row
		SNO: index + 1,
    ID:index +1,
    LEARNINGPATH: blog.VideofolderName,
    ATTEMPTS: blog.videoFile?.length,
		ACTION: renderActionButtons(blog),
    _id:blog._id,
	}));

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            {isOpen && (
              <div className=" col-12 col-lg-3 col-md-12 sectioncard121">
              <Sidebar/>
              <ToastContainer/>
              </div>
					  )}						
            <div className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}>
              
                <div className=" d-lg-block">
                <i className="fa-solid fa-bars bars d-lg-block d-none" onClick={toggleSidebar}></i>
                  <div className="card-item p-4">
                    <div className="row">
                      <div className="col-md-9">
                        <h4 className="">Learning Path Reports</h4>
                      </div>
                    </div>
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
											<label>Search: </label>
											<input type="text"
                      className="form-control"
                      value={searchQuery}
                      placeholder="Search by learningpath"
                      onChange={(e) => setSearchQuery(e.target.value)} 
                        />
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
                  <div
										class="modal"
										id="myModalEdit"
										// style={{ display: isUpdateModalOpen ? "block" : "none" }}
									>
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<h4 class="modal-title">Update VideoFolder</h4>
													<button
														type="button"
														class="btn-close"
														data-bs-dismiss="modal"
													></button>
												</div>
												<div class="modal-body">
													<div className="mb-1">
														<label style={{ float: "left" }}>
															Folder Name<sup className="star">*</sup>
														</label>
														<input
															type="text"
															className="form-control"
															placeholder="Name"
															value={VideofolderName || selectedVideopath}
															onChange={(e) => setSelectedVideopath(e.target.value)}
														/>
													</div>													
												</div>
												<div class="modal-footer">
													<button
														type="button"
														class="btn btn-danger"
														onClick={(e) =>
															onSubmitUpdatedForm(e)
														}
													>
														Submit
													</button>
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

export default Reports;
