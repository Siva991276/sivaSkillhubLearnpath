import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
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
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
import apiList from "../liberary/apiList";
import Cookies from "js-cookie";
import { Audio } from 'react-loader-spinner';

const VideoPage = () => {
	const { state } = useLocation();
  const { VideofolderName } = useParams();
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [addblogslist1, setAddblogslist1] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
  const [institutetypeCounts, setInstitutetypeCounts] = useState({});
  const [error, setError] = useState(null);
  const [addInstitutelist, setInstitutelist] = useState([]);
	const { videopathId } = state || {};
	const [videofileListUpdate, setVideofileListUpdate] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
	const [worksheetLoading, setWorksheetLoading] = useState(true);

  const handleEditInputChange = (value,name) => {
		console.log(value,name);
		setVideofileListUpdate({
		  ...videofileListUpdate,
		  [name]: value,
		});
	};
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

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
  const token = Cookies.get("token");
    console.log(VideofolderName);
    try {
      const response = await axios.get(
        `${apiList.DisplayAllVideos}/${videopathId}`,{
          headers: {
            token: token,
          },
        },
      ); // Replace with your API endpoint
      setAddblogslist(response.data?.allVideos?.videoFile);
      setVideoFoldername(response.data?.allVideos?.VideofolderName)
			setWorksheetLoading(false);
      // console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
			setWorksheetLoading(false);
    }
  };
  const filteredVideos = addblogslist.filter((folder) => {
    const videotitleNameMatches = folder.VideoTitleName.toLowerCase().includes(searchQuery.toLowerCase());
    return videotitleNameMatches
  });
  const [videoFoldername, setVideoFoldername] = useState("");
  const [VideoTitleName, setVideoTitleName] = useState("");
  const [SourceName, setSourceName] = useState("");
  const [Video1, setVideo1] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedVideofile, setSelectedVideofile] = useState({});

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
    const token = Cookies.get("token");
    if (VideoTitleName && Video1 !== "") {
      const AddVideosDetails = {
        VideofolderName: VideofolderName,
        VideoTitleName: VideoTitleName,
        SourceName:SourceName ,
        Video1: Video1,
      };
      axios
        .post(`${apiList.AddVideoFilesData}/${videopathId}`, AddVideosDetails , {
          headers: {
            token: token,
          },
        },)
        .then((response) => {
          setdata1(response.data);
          console.log(response.data);
          if (response.status === 200) {
            toast("Video File Created Successfully", {
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
            setVideoTitleName("")
            setVideo1("")
            setTimeout(function () {}, 3000);
            fetchData();
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
          }
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };

  console.log(data1);


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
  const handleCloseSourceModal =()=>{
    setSourceopen(false)
  }
  const [isInstitutionsOpen1, setIsInstitutionsOpen1] = useState(true);

  const toggleInstitutions1 = () => {
    setIsInstitutionsOpen1(!isInstitutionsOpen1);
  };
  const [isInstitutionsOpen2, setIsInstitutionsOpen2] = useState(true);

  const toggleInstitutions2 = () => {
    setIsInstitutionsOpen2(!isInstitutionsOpen2);
  };
  const GotohandleDeleteClick = async (id) => {
    const token = Cookies.get("token");
    try {
      console.log("Deleting institute with ID:", id);
      const response = await axios.delete(
        `${apiList.deleteVideofiles}/${videopathId}/${id}`, {
          headers: {
            token: token,
          },
        },
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
        fetchData()

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
  const onSubmitUpdatedForm = (id,e) => {
		e.preventDefault();
    const token = Cookies.get("token");
    console.log(videofileListUpdate)		
		axios
			.put(`${apiList.UpdateVideofileDetails}/${videopathId}/${id}`, videofileListUpdate, {
        headers: {
          token: token,
        },
      },)
			.then((response) => {
				if (response.status === 200) {
					toast("VideoFile Updated successfully", {
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
					fetchData()
				}
			})
			.catch((error) => {
				console.log(error.response.data);
				toast.error("Institute already Updated");
			});
	};
  const GotohandleEditClick = (data) => {
    delete data['ACTION']
    let Updatedfields = {VideoTitle:data.VideoTitle,videofile:data.videofile,videofileId: data._id}
		setSelectedVideofile(Updatedfields);
		setVideofileListUpdate(Updatedfields)
	};
  console.log(selectedVideofile,'selectedVideofile')

  const GotohandleViewClick = (data) => {
		setSelectedVideo(data.videofile);
		
	};
  const columns = [
		{ field: "SNO", headerName: "SNO", width: 120 },
		{ field: "Videofoldername", headerName: "FOLDER NAME", width: 200 },
    { field: "VideoTitle", headerName: "VIDEO TITLE", width: 200 },
		{ field: "SOURCE", headerName: "SOURCE", width: 200},
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
        data-bs-toggle="modal"
        data-bs-target="#myModalView"
				onClick={() =>GotohandleViewClick(blog)}
  style={{backgroundColor:"rgb(12, 26, 46)"}}
			>
				<i className="fa-solid fa-video" style={{ color: "white", }}></i>
			</button>
			<button
				type="button"
				className="btn btn-danger mx-1"
        data-bs-toggle="modal"
        data-bs-target="#myModalEdit"
				onClick={() => GotohandleEditClick(blog)}
			>
				<i
					className="fas fa-pencil-alt"
					style={{ color: "white" }}
				></i>
			</button>

			<button
				type="button"
				className="btn btn-dark mx-1"
				onClick={() => GotohandleDeleteClick(blog._id)}
			>
				<i className="fas fa-trash" style={{ color: "white" }}></i>
			</button>
		</div>
	);
console.log(addblogslist)
let rows = [];
if (filteredVideos && filteredVideos.length === 0) {
  rows = [
		{
			id: `1`,
		  SNO: '',
		  Videofoldername: 'No Videos Found',
		  VideoTitle: '',
		  SOURCE: '',
      ACTION:''
      // You may modify this based on your requirements
		},
	  ];
	} else {
     rows = filteredVideos.map((blog, index) => ({
		id: index + 1, // Add this line to include a unique id for each row
		SNO: index + 1,
		Videofoldername: videoFoldername,
    VideoTitle:blog.VideoTitleName,
		SOURCE: blog.SourceName,
		ACTION: renderActionButtons(blog),
    _id:blog._id,
    videofile:blog.Video1,
	}));
}
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    
  };
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
                <div className=" d-lg-block">
                              <i className="fa-solid fa-bars bars  d-lg-block d-none" onClick={toggleSidebar}></i>

                  <div className="card-item p-4">
                    <div className="row">
                      <div className="col-md-8">
                        <h4 className="">Categories</h4>
                      </div>
                      <div className="col-md-1">

                      </div>
                      <div className="col-md-3 ml-5">                    
                        <button
                            style={{ border: "none", backgroundColor: "white" }}
                            className=""
                          >
                            <div className="d-flex flex-row">
                              <p
                                className="row mx-2 btn btn-dark text-center"
                                onClick={OpenSourceCode}
                                style={{ backgroundColor: "#981a96", color: "white" }}
                              ><b> +Add Content</b>
                               
                                <span> <i class="fa-solid fa-caret-down"></i></span>
                                {sourceopen && (
                              <div>
                                <span
                                  className="p-0 my-1"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#myModal23"
                                  onClick={(e) => {
                                    setSourceName(e.target.textContent)
                                    handleCloseSourceModal(e) // Use textContent instead of value
                                    console.log(e.target.textContent); // Print to console
                                  }}
                                  style={{color: "#ff0000" }}

                                >
                                  <i class="fa-brands fa-youtube"></i> Youtube
                                </span>
                                <br />

                                <span
                                  className="p-0 my-1"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#myModal23"
                                  onClick={(e) => {
                                    setSourceName(e.target.textContent); // Use textContent instead of value
                                    console.log(e.target.textContent); // Print to console
                                  }}
                                  style={{color: "#1ab7ea" }}
                                >
                                  <i class="fa-solid fa-video"></i> Vimeo
                                </span>
                              </div>
                            )}
                              </p>
                             
                            </div>
                           
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
                                    // onClick={OpenSourceCode}
                                    onClick={handleCloseSourceModal}
                                  ></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                  <form action="" onSubmit={(e)=>onSubmitForm(e)}>
                                    <div className="col-12 col-md-12">
                                      <label className="headingAdd" style={{float:"left"}}>
                                        Video Title :
                                      </label>
                                      <input
                                        type="text"          className="form-control"                          
                                        placeholder="Enter Folder Name"
                                        onChange={(e) =>
                                          setVideoTitleName(e.target.value)
                                        }
                                        value={VideoTitleName}
                                      />
                                    </div>
                                    <div className="col-12 col-md-12">
                                      <label className="headingAdd float-left"
                                      style={{float:"left"}}>
                                        Video Link:
                                      </label>                                     
                                      <input
                                        type="text"
                                        className="form-control"
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
                                        onClick={handleCloseSourceModal}
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
                          <div class="modal" id="myModalEdit">
                            <div class="modal-dialog ">
                              <div class="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                  <h4 class="modal-title">Update Video File</h4>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                  ></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                  <form action="" onSubmit={(e)=>onSubmitUpdatedForm(selectedVideofile?.videofileId,e)}>
                                    <div className="col-12 col-md-12">
                                      <label className="headingAdd" style={{float:"left"}}>
                                        Video Title :
                                      </label>
                                      <input
                                        type="text"         
                                       className="form-control"                       
                                       name="VideoTitle"   
                                        placeholder="Enter Folder Name"
                                        onChange={(e) =>
                                          handleEditInputChange(e.target.value,"VideoTitle")
                                        }
                                        value={videofileListUpdate?.VideoTitle ||""}
                                      />
                                    </div>
                                    <div className="col-12 col-md-12">
                                      <label className="headingAdd float-left"
                                      style={{float:"left"}}>
                                        Video Link:
                                      </label>                                     
                                      <input
                                        type="text"
                                        name="videofile"
                                        className="form-control"
                                        placeholder="Enter Video Link"
                                        onChange={(e) =>
                                          handleEditInputChange(e.target.value,"videofile")
                                        }
                                        value={ videofileListUpdate?.videofile || ''}
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
                                        Update Video
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
                      placeholder="Search by video title"
                      onChange={(e) => setSearchQuery(e.target.value)}/>                      
										</div>
                    <div className="mt-2 mx-4">
                      <button className="btn btn-dark mt-4" onClick={()=>navigate("/LearnPath")}>
                        Back
                      </button>
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
                  <div class="modal" id="myModalView">
                                      <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <button
                                              type="button"
                                              class="btn-close"
                                              data-bs-dismiss="modal"
                                              onClick={handleCloseModal}
                                            ></button>
                                          </div>
                                          {selectedVideo && (
                                            <ReactPlayer
                                              url={selectedVideo}
                                              playing ={isModalOpen}
                                              controls
                                              width="830px"
                                              height="600px"
                                            />
                                          )}
                                        </div>
                                      </div>
                         </div>
                    </div>
                  </div>
              )}
                </div>
              </div>
            </div>
            </div>
      
  );
};

export default VideoPage;
