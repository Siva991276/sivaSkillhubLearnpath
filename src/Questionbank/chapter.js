import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

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
		} catch (error) {
			console.error("Error fetch blogs:", error);
		}
	};

	const [name1, setname1] = useState("");
	const [Description1, setDescription1] = useState("");
	const [subjecttag1, setsubjecttag1] = useState("");
	const [chaptertag, setchaptertag] = useState("");
	const [data1, setData1] = useState("");
	const [subjectId, setSubjectId] = useState([]);

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

				const response = await axios.post(
					`http://localhost:4010/v1/addchapter/${subjectId}`,
					AddChapter
				);

				setData1(response.data);
				console.log(response.data);
				if (response.status === 200) {
					window.alert("Success");
					fetchblogs1();
				}
			} catch (error) {
				// Handle error and display appropriate notifications
				console.log(error);
			}
		} else {
			window.alert("Error: Please fill in all fields");
		}
	};

	const [Error, setError] = useState("");

	const handleDelete = async (subjectid, chapterid) => {
		try {
			// if (subjectid && chapterid !== "") {
			// 	setError("Invalid ID provided for delete");
			// 	return;
			// }
			console.log("Deleting subject with ID", subjectid, chapterid);
			const response = await axios.delete(
				`http://localhost:4010/v1/deleteChapter/${subjectid}/${chapterid}`
			);
			if (response.status === 200) {
				window.alert("Chapter deleted Successful", {
					position: "top-center",
					autoClose: 1000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
				fetchSubjects();
				fetchblogs1();
			} else {
				alert("Error:" + response.data);
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
			// setBlogslist(response.data);
		} catch (error) {
			console.error("Error fetch blogs:", error);
		}
	};
	const onSubmitUpdatedForm = (subjectId, chapterId, e) => {
		e.preventDefault();
		const AddChapter = {
			Name: name1,
			Description: Description1,
			subject: subjecttag1,
			ChapterTag: chaptertag,
		};
		const nonemptyuserData = Object.fromEntries(
			Object.entries(AddChapter).filter(([key, value]) => value !== "")
		);

		axios
			.put(
				`http://localhost:4010/v1/updateChapter/${subjectId}/${chapterId}`,
				nonemptyuserData
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
				}
			})
			.catch((error) => {
				console.log(error.response.data);
				toast.error("Institute already Updated");
			});
	};
	const [searchTerm, setSearchTerm] = useState("");
	const [chapters, setChapters] = useState([]);
	const [allChapters, setAllChapters] = useState([]);
	console.log(allChapters, "sai");

	const filterChapters = (selectedSubjectId) => {
		const filteredChapters = allSubjects?.filter(
			(chapter) => chapter._id === selectedSubjectId
		);
		console.log("Filtered Data:", filteredChapters);
		setAllChapters(filteredChapters);
	};

	const clearFilter = () => {
		const clearfilteredChapters = allSubjects?.filter(
			(chapter) => chapter._id == !selectedSubjectId
		);
		console.log("Filtered Data:", clearfilteredChapters);
		setAllChapters(clearfilteredChapters);
		// Reset to the original list of chapters
	};

	const getAllChapters = (id) => {
		// Log all chapters to the console
		console.log("Filtered Data:", allSubjects);
		setAllChapters(allSubjects);
	};
	const [selectedSubjectId, setSelectedSubjectId] = useState([]);

	const handleSubjectSelection = (e) => {
		const subjectId = e.target.value;
		setSelectedSubjectId(subjectId);
		// Other logic...
	};

	const handleSubjectTagTypeSelection = (event) => {
		setsubjecttag1(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
		// setSubjectId(event.target.options[event.target.selectedIndex].getAttribute(
		// 	"value"
		//   ))
	};
	const handleChapterTagTypeSelection = (event) => {
		setchaptertag(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const columns = [
		{ field: "SNO", headerName: "SNO", width: 170 },
		{ field: "NAME", headerName: "NAME", width: 170 },
		{ field: "TAG", headerName: "TAG", width: 170 },
		{ field: "CHAPTERS", headerName: "CHAPTERS", width: 170 },
		{ field: "TOTAL QUESTION", headerName: "TOTAL QUESTION", width: 250 },
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
					// Additional logic if needed
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
				data-bs-toggle="modal"
				data-bs-target="#myModal"
				onClick={() => handleDelete(allSubjects._id, allChapters._id)}
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

	const rows = allSubjects.map((blog, index) => ({
		id: index + 1,
		SNO: index + 1,
		NAME: blog.name, // Assuming "Name" is the property name for the chapter name
		TAG: blog.subjectTag, // Assuming "subjectTag" is the property name for the subject tag
		CHAPTERS: blog.totalqustions, // Assuming "totalqustions" is the property name for the total questions
		TOTALQUESTION: ``,
		ACTION: renderActionButtons(blog),
	}));

	return (
		<div>
			<div className="container-fluid ">
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
							<div className="  ">
								<div className="">
									<div className="mt-4 card-item p-3">
										<div class=" row ">
											<div className="col-md-4 mt-2">
												<select
													style={{ padding: "5px" }}
													className="w-100 select_item form-control"
													onChange={(e) => handleSubjectSelection(e)}
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
											<div className="col-md-3 py-4 ">
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
													+ Create Subject
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

														<ToastContainer
															position="top-center"
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
																<label>Subjecttag *</label>
																<select
																	style={{ padding: "5px" }}
																	className="w-100 select_item"
																	onChange={handleSubjectTagTypeSelection}
																>
																	<option className="hidden" value="">
																		Select subject tag
																	</option>
																	{allSubjects?.map((subject) => (
																		<>
																			<option
																				className="name_item"
																				key={subject._id} // Use a unique key for each option
																				data-value={subject.subjectTag}
																				value={subject._id}
																			>
																				{subject.subjectTag}
																			</option>
																		</>
																	))}
																</select>

																<br></br>

																<label className="my-3 ">Chapter *</label>
																<br></br>
																<select
																	className="form-control"
																	value={chaptertag}
																	onChange={handleChapterTagTypeSelection}
																>
																	<option>--select subjects--</option>
																	<option data-value="Chapter1">
																		Chapter1
																	</option>
																	{/* <option value="algorithms">algorithms</option> */}
																	<option data-value="chapter2">
																		chapter2
																	</option>
																	<option data-value="chapter3">
																		chapter3
																	</option>
																	<option data-value="chapter4">
																		chapter4
																	</option>
																	<option data-value="chapter5">
																		chapter5
																	</option>
																	<option data-value="chapter6">
																		chapter6
																	</option>
																	<option data-value="chapter7">
																		chapter7
																	</option>
																	<option data-value="Dbms">Dbms</option>
																	<option data-value="Java-programming">
																		Java-programming
																	</option>
																	<option data-value="Mathematics">
																		Mathematics
																	</option>
																	<option data-value="Others">Others</option>
																	<option data-value="Physics">Physics</option>
																	<option data-value="Programming">
																		Programming
																	</option>
																	<option data-value="Programming Skills">
																		Programming Skills
																	</option>
																	<option data-value="Quntative apptitude">
																		Quntative apptitude
																	</option>
																	{/* Add other options similarly */}
																</select>

																<div className="modal-footer">
																	<button
																		type="submit"
																		className="btn btn-danger"
																		data-bs-dismiss="modal"
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
																Submitt
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
													<div class="modal-body">
														<form>
															<label style={{ float: "left" }}>Name *</label>
															<input
																className="form-control"
																type="text"
																placeholder="...name..."
																onChange={(e) => setname1(e.target.value)}
																value={name1 || allChapters.Name}
															/>

															<label style={{ float: "left" }}>
																Description *
															</label>
															<input
																className="form-control"
																type="text"
																placeholder="...description..."
																onChange={(e) =>
																	setDescription1(e.target.value)
																}
																value={Description1 || allChapters.Description}
															/>
															<br></br>
															<label style={{ float: "left" }}>
																Subjecttag *
															</label>
															<select
																style={{ padding: "5px" }}
																className="form-control"
																onChange={handleSubjectTagTypeSelection}
															>
																{allSubjects?.map((subject) => (
																	<>
																		<option
																			className="name_item"
																			key={subject._id} // Use a unique key for each option
																			data-value={subject.subjectTag}
																			value={subjecttag1 || ""}
																		>
																			{subject.subjectTag}
																		</option>
																	</>
																))}
															</select>

															<br></br>

															<label
																className="my-3 "
																style={{ float: "left" }}
															>
																Chapter *
															</label>
															<br></br>
															<select
																className="form-control"
																value={chaptertag || allChapters.ChapterTag}
																onChange={handleChapterTagTypeSelection}
															>
																<option>--select subjects--</option>
																<option data-value="Chapter1">Chapter1</option>
																<option data-value="chapter2">chapter2</option>
																<option data-value="chapter3">chapter3</option>
																<option data-value="chapter4">chapter4</option>
																<option data-value="chapter5">chapter5</option>
																<option data-value="chapter6">chapter6</option>
																<option data-value="chapter7">chapter7</option>
																<option data-value="Dbms">Dbms</option>
																<option data-value="Java-programming">
																	Java-programming
																</option>
																<option data-value="Mathematics">
																	Mathematics
																</option>
																<option data-value="Others">Others</option>
																<option data-value="Physics">Physics</option>
																<option data-value="Programming">
																	Programming
																</option>
																<option data-value="Programming Skills">
																	Programming Skills
																</option>
																<option data-value="Quntative apptitude">
																	Quntative apptitude
																</option>
															</select>

															<div className="modal-footer">
																<button
																	type="submit"
																	className="btn btn-danger"
																	data-bs-dismiss="modal"
																	onClick={(e) =>
																		onSubmitUpdatedForm(
																			allSubjects._id,
																			allChapters._id,
																			e
																		)
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
					</div>
				</div>
			</div>
		</div>
	);
};
export default Chapter;

