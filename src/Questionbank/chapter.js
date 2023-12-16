import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Audio } from 'react-loader-spinner';


const Chapter = () => {
	useEffect(() => {
		fetchblogs1();
		fetchSubjects();
	}, []);

	const [Open, setOpen] = useState(true);

	const [blogslist, setBlogslist] = useState([]);

	let navigate = useNavigate("");

	const fetchblogs1 = async () => {
		const api = "http://localhost:3051/allchapterData";
		try {
			const response = await axios.get(api, {});
			const data = response.data;
			setBlogslist(response.data);
			setWorksheetLoading(false);
		} catch (error) {
			console.error("Error fetch blogs:", error);
			setWorksheetLoading(false);
		}
	};

	const [name1, setname1] = useState("");
	const [Description1, setDescription1] = useState("");
	const [subjecttag1, setsubjecttag1] = useState("");
	const [chaptertag, setchaptertag] = useState("");
	const [data1, setData1] = useState("");
	const [subjectId, setSubjectId] = useState([]);
	const [chapterListUpdate, setChapterListUpdate] = useState({});
	const [worksheetLoading, setWorksheetLoading] = useState(true);
	console.log(chapterListUpdate)
	const handleEditInputChange = (value,name) => {
		console.log(value,name);
		setChapterListUpdate({
		  ...chapterListUpdate,
		  [name]: value,
		});
	};
	console.log("chapterListUpdate",chapterListUpdate)
	const onSubmitForm = async (e) => {
		e.preventDefault();

		if (name1 && Description1 && subjecttag1 && chaptertag !== "") {
			try {
				const AddChapter = {
					Name: name1,
					Description: Description1,
					subject: subjecttag1,
					ChapterTag: chaptertag,
				};
				console.log(AddChapter)
				const response = await axios.post(
					`http://localhost:4010/v1/addchapter/${subjectId}`,
					AddChapter
				);

				setData1(response.data);
				console.log(response.data);
				if (response.status === 200) {
					toast("Chapter Added Successfully", {
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
					fetchblogs1();
				}
			} catch (error) {
				// Handle error and display appropriate notifications
				console.log(error);
			}
		} else {
			toast("please fill in all fields", {
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

	const [Error, setError] = useState("");

	const handleDelete = async (subjectid, chapterid) => {
		try {
			console.log("Deleting subject with ID", subjectid, chapterid);
			const response = await axios.delete(
				`http://localhost:4010/v1/deleteChapter/${subjectid}/${chapterid}`
			);
			if (response.status === 200) {
				toast("Chapter Delete Successfully", {
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
				fetchSubjects();
				fetchblogs1();
			} else {
				setError("An error occured while deleting subject.");
			}
		} catch (error) {
			setError("An error occured while deleting the subject.");
		}

		const created = () => {
			setOpen(!Open);
		};
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
	const [allSubjects, setAllSubjects] = useState([]);
	const fetchSubjects = async () => {
		const api = "http://localhost:4010/v2/subjects";
		try {
			const response = await axios.get(api, {});
			const data = response.data;
			setAllSubjects(response.data);
			setWorksheetLoading(false);
			// setBlogslist(response.data);
		} catch (error) {
			console.error("Error fetch blogs:", error);
			setWorksheetLoading(false);
		}
	};
	const onSubmitUpdatedForm = (subid,chapid,e) => {
		e.preventDefault();
		console.log(chapterListUpdate)
		axios
			.put(
				`http://localhost:4010/v1/updateChapter/${subid}/${chapid}`,
				chapterListUpdate
			)
			.then((response) => {
				if (response.status === 200) {
					toast("Chapter Updated successfully", {
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
					setname1("");
					setDescription1("");
					setChapters("");
					fetchblogs1();
					fetchSubjects();

				}
			})
			.catch((error) => {
				console.log(error);
				toast("Chapter already Updated", {
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
			});
	};
	const [searchTerm, setSearchTerm] = useState("");
	const [chapters, setChapters] = useState([]);
	const [allChapters, setAllChapters] = useState([]);
	console.log(allChapters, "allchapters");

	const filterChapters = (selectedSubjectId) => {
		const filteredChapters = allSubjects?.filter(
			(subject) => subject._id === selectedSubjectId
		);
		console.log("Filtered Data:", filteredChapters);
		setAllChapters(filteredChapters);
	};

	const clearFilter = () => {
		setAllChapters('')
		// Reset to the original list of chapters
	};

	const getAllChapters = (id) => {
		// Log all chapters to the console
		console.log("Filtered Data:", allSubjects);
		setAllChapters(allSubjects);
	};
	const [selectedSubjectId, setSelectedSubjectId] = useState([]);
	const [selectedChapterId, setSelectedChapterId] = useState([]);

	
	const handleSubjectTagTypeSelection = (event) => {
		setsubjecttag1(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
		setSubjectId(event.target.options[event.target.selectedIndex].getAttribute(
			"value"
		  ))
		  	setSelectedSubjectId(event.target.options[event.target.selectedIndex].getAttribute(
			"value"
		  ))
		  handleEditInputChange(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			),"subject"
		);
	};
	const handleChapterTagTypeSelection = (event) => {
		handleEditInputChange(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			),"ChapterTag"
		);
		setchaptertag(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
		setSelectedChapterId(event.target.options[event.target.selectedIndex].getAttribute(
			"value"
		  ))
	};
	const [selectedChapterData, setSelectedChapterData] = useState(null);

	const GotohandleViewClick = (data) => {
		let Updatedfields = {Name:data.CHAPTERNAME,Description:data.description,subject:data.SUBJECTNAME,ChapterTag:data.CHAPTERTAG,subjectid:data.subjectid,chapterid:data.chapterid}
		setSelectedChapterData(data);
		delete data['ACTION'];
		setChapterListUpdate(Updatedfields)
		// setUpdateModalOpen(true);
	};
console.log("selectedChapterData",selectedChapterData)
	const [isModalOpen, setIsModalOpen] = useState(false);

	const columns = [
		{ field: "SNO", headerName: "SNO", width: 170 },
		{ field: "SUBJECTNAME", headerName: "SUBJECT NAME", width: 170 },
		{ field: "CHAPTERTAG", headerName: "CHAPTER TAG", width: 170 },
		{ field: "CHAPTERNAME", headerName: "CHAPTER NAME", width: 170 },
		{ field: "TOTALQUESTION", headerName: "TOTAL QUESTION", width: 250 },
		{
			field: "ACTION",
			headerName: "ACTION",
			width: 170,
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
				className="btn"
				data-bs-toggle="modal"
				data-bs-target="#myModalView"
				onClick={() => {
					setIsModalOpen(true);
					GotohandleViewClick(blog)
				}}
			>
				<i
					className="fa-sharp fa-solid fa-pen"
					style={{ color: "skyblue" }}
				></i>
			</button>
			<button
				type="button"
				className="btn"
				onClick={() => handleDelete(blog.subjectid, blog.chapterid)}
			>
				<i
					className="fa-solid fa-trash-can "
					onClick={() => {
						setIsModalOpen(true);
						// Additional logic if needed
					}}
					style={{ color: "red" }}
				></i>
			</button>
		</div>
	);
	let rows = [];
	var cnt = 0;
	
	if (allChapters && allChapters.length === 0) {
	  rows = [
		{
			id: `1`,
		  SNO: 'No Chapters Found',
		  SUBJECTNAME: '',
		  CHAPTERTAG: '',
		  CHAPTERNAME: '',
		  TOTALQUESTION: '',
		  ACTION: '', // You may modify this based on your requirements
		},
	  ];
	} else {
	  rows = allChapters.flatMap((blog) => (
		(blog?.chapter || []).map((each, index) => ({
		  id: ++cnt,
		  SNO: cnt,
		  SUBJECTNAME: blog.name || '',
		  CHAPTERTAG: each.ChapterTag || '',
		  CHAPTERNAME: each.Name || '',
		  TOTALQUESTION:
			(each.MCQ || []).length +
			(each.codingbasic || []).length +
			(each.paragMCQ || []).length,
		  ACTION: renderActionButtons(blog),
		  subjectid: blog._id,
		  chapterid: each._id,
		  description: blog.Description,
		}))
	  ));
	}
	
	return (
		<div>
			<div className="container-fluid ">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-lg-3 col-md-12 sectioncard121">
							<Sidebar />
							<ToastContainer/>
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
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
						<div className=" ">
							<i
								className="fa-solid fa-bars bars d-lg-block d-none"
								onClick={toggleSidebar}
							></i>
							<div className="  ">
								<div className="">
									<div className="mt-4 card-item p-3">
										<div class=" row ">
											<div className="col-md-4 mt-2">
												<select
													style={{ padding: "5px" }}
													className="w-100 select_item form-control"
													onChange={handleSubjectTagTypeSelection}
												>
													<option className="hidden" value="">
														Select Subject Name
													</option>
													{allSubjects?.map((eachsubject) => (
														<>
															<option
																className="name_item"
																key={eachsubject._id} // Use a unique key for each option
																data-value={eachsubject.name}
																value={eachsubject._id}
															>
																{eachsubject.name}
															</option>
														</>
													))}
												</select>
											</div>
											<div className="col-md-2 col-2 mt-2">
												<button
													className="btn btn-secondary go_item"
													onClick={() => filterChapters(selectedSubjectId)}
												>
													Go
												</button>
											</div>
											<div className="col-md-3 col-4 mt-2">
												<button
													className="btn btn-secondary go_item"
													onClick={clearFilter}
												>
													Clear Filter
												</button>
											</div>
											<div className="col-md-3 col-6 mt-2">
												<button
													className="btn btn-secondary go_item"
													onClick={() => getAllChapters(allSubjects._id)}
												>
													Get All Chapters
												</button>
											</div>
										</div>
										<div class=" row mt-4">
											<div className="col-md-3">
												<h6 className="">Chapters</h6>
											</div>
											<div className="col-md-9 text-end">
												<button
													type="button"
													class="btn "
													data-bs-toggle="modal"
													data-bs-target="#myModal234565"
													className="float-right btn btn-danger"
												>
													+ Create Chapter
												</button>
											</div>

											<div class="modal" id="myModal234565">
												<div class="modal-dialog">
													<div class="modal-content">
														<div class="modal-header">
															<h4 class="modal-title">Create Chapter</h4>

															<button
																type="button"
																class="btn-close"
																data-bs-dismiss="modal"
															></button>
														</div>
														<div class="modal-body">
															<form onSubmit={onSubmitForm}>
																<p>Name *</p>
																<input
																	className="form-control"
																	type="text"
																	placeholder="...name..."
																	onChange={(e) => setname1(e.target.value)}
																	value={name1}
																/>

																<p>Description *</p>
																<input
																	className="form-control"
																	type="text"
																	placeholder="...description..."
																	onChange={(e) =>
																		setDescription1(e.target.value)
																	}
																	value={Description1}
																/>
																<br></br>
																<label>SubjectNameTag*</label>
																<select
																	style={{ padding: "5px" }}
																	className="w-100 select_item"
																	onChange={handleSubjectTagTypeSelection}
																>
																	<option className="hidden" value="">
																		Select subject Name
																	</option>
																	{allSubjects?.map((subject) => (
																		<>
																			<option
																				className="name_item"
																				key={subject._id} // Use a unique key for each option
																				data-value={subject.name}
																				value={subject._id}
																			>
																				{subject.name}
																			</option>
																		</>
																	))}
																</select>

																<br></br>

																<label className="my-3">ChapterTag*</label>
																<br></br>
																<select
																	className="form-control"
																	value={chaptertag}
																	onChange={handleChapterTagTypeSelection}
																>
																	<option>--select subjects--</option>
																	<option data-value="C-Programmer">
																		C-Programmer
																	</option>
																	<option data-value="C++">
																		C++
																	</option>
																	<option data-value="DataStructures">
																		DataStructures
																	</option>
																	<option data-value="Dbms">
																		Dbms
																	</option>
																	<option data-value="Java-programming">
																		Java-programming
																	</option>
																	<option data-value="Others">Others</option>
																	<option data-value="Programming">
																		Programming
																	</option>
																</select>

																<div className="modal-footer">
																	<button
																		type="submit"
																		className="btn btn-danger"
																	>
																		Submit
																	</button>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>

											{/* pen */}

											<div class="modal" id="myModal23456">
												<div class="modal-dialog">
													<div class="modal-content">
														<div class="modal-header">
															<h4 class="modal-title">Create Chapter</h4>
															<button
																type="button"
																class="btn-close"
																data-bs-dismiss="modal"
															></button>
														</div>

														<div class="modal-body">
															<p>Name *</p>
															<input
																type="text"
																className="form-control"
																placeholder="...name..."
																style={{}}
															/>
															<p>Description *</p>
															<input
																type="text"
																placeholder="...description..."
																style={{}}
															/>
															<br></br>
															<label className="mt-3 ">Subject *</label>
															<br></br>
															<select
																type="text"
																className="form-control"
																placeholder="...subject tag..."
																style={{ width: "190px" }}
															>
																<option>algorithms</option>
																<option>Botany</option>
																<option>C-programming</option>
																<option>Chemistry</option>
																<option>Communication</option>
																<option>Data-reasoning</option>
																<option>Data-structres</option>
																<option>Dbms</option>
																<option>java-programming</option>
																<option>Mathematics</option>
																<option>others</option>
																<option>physics</option>
																<option>programming</option>
																<option>programming Skills</option>
																<option>Quntative apptitude</option>
															</select>
															<p></p>
														</div>

														<div class="modal-footer">
															<button
																type="button"
																class="btn btn-danger"
																data-bs-dismiss="modal"
															>
																Submit
															</button>
														</div>
													</div>
												</div>
											</div>

											{/* Delete */}
										</div>
										<div className="d-flex flex-row">
											<div className="mt-2">
												<div>
													<label>Show</label>
												</div>
												<select className="form-control">
													<option className="w-15">1</option>
													<option className="w-15">2</option>
													<option className="w-15">3</option>
													<option className="w-15">4</option>
													<option className="w-15">5</option>
													<option className="w-15">6</option>
													<option className="w-15">7</option>
													<option className="w-15">8</option>
													<option className="w-15">9</option>
													<option className="w-15">10</option>
												</select>
											</div>
											<div className="col-4 col-md-8"></div>

											<div className="mt-2">
												<label>Search: </label>
												<input type="text" className="form-control" />
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
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<h4 class="modal-title">Update Chapter</h4>

														<button
															type="button"
															class="btn-close"
															data-bs-dismiss="modal"
														></button>
													</div>
													<div class="modal-body">
														<form>
															{/* <label style={{ float: "left" }}>Name *</label>
															<input
																className="form-control"
																type="text"
																placeholder="...name..."
																name="CHAPTERNAME"
																onChange={handleEditInputChange}
																value={name1 || chapterListUpdate?.Name}
															/> */}
															
															<label style={{ float: "left" }}>
																SubjectNameTag *
															</label>
															<input
																style={{ padding: "5px" }}
																name="subject"
																value={chapterListUpdate.subject}
																className="form-control"
																disabled
															/>
															<br/>
															<label style={{ float: "left" }}>
																ChapterName*
															</label>
															<input
																className="form-control"
																type="text"
																name="Name"
																placeholder="...ChapterName..."
																onChange={e=>handleEditInputChange(e.target.value,"Name")}
																value={chapterListUpdate?.Name || ''}
															/>
															<label
																style={{ float: "left" }}
															>
																ChapterTag*
															</label>
															<br></br>
															<select
															type="text"
																className="form-control"
																name="ChapterTag"								
																value={chaptertag || chapterListUpdate?.ChapterTag }
																onChange={handleChapterTagTypeSelection}
															>
																<option>--select Chapter Tag--</option>
																<option data-value="C-programming">
																			C-programming
																		</option>
																		<option data-value="Communication">
																			Communication
																		</option>
																		<option data-value="Data-structres">
																			Data-structures
																		</option>
																		<option data-value="Dbms">Dbms</option>
																		<option data-value="java-programming">
																			java-programming
																		</option>
																		<option data-value="others">others</option>
																		<option data-value="programming">
																			programming
																		</option>
																		<option data-value="programming Skills">
																			programming Skills
																		</option>

															</select>

																<label style={{ float: "left" }}>
																Description *
															</label>
															<input
																className="form-control"
																type="text"
																name="Description"
																placeholder="...description..."
																onChange={e=>handleEditInputChange(e.target.value,"Description")}
																value={chapterListUpdate?.Description || ''}
															/>											

															
															<div className="modal-footer">
																<button
																	type="button"
																	className="btn btn-danger"
																	data-bs-dismiss="modal"
																	onClick={(e) =>
																		onSubmitUpdatedForm(chapterListUpdate?.subjectid,chapterListUpdate?.chapterid,e)
																	}
																>
																	Submit
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
										<div class="modal" id="myModal">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<h4 class="modal-title">Delete Subject</h4>
														<button
															type="button"
															class="btn-close"
															data-bs-dismiss="modal"
														></button>
													</div>

													<div class="modal-body">
														Are Sure Delete this subject
													</div>

													<div class="modal-footer">
														<p>No</p>
														<button
															type="button"
															class="btn btn-danger"
															data-bs-dismiss="modal"
															onClick={() =>
																handleDelete(allSubjects._id, allChapters._id)
															}
														>
															Yes
														</button>
													</div>
												</div>
											</div>
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
export default Chapter;

