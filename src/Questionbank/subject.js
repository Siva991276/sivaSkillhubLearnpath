import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const QbSubject = () => {
	useEffect(() => {
		fetchblogs1();
	}, []);
	const [Open, setOpen] = useState(true);
	const [blogslist, setBlogslist] = useState([]);

	console.log(blogslist);
	let navigate = useNavigate("");
	const fetchblogs1 = async () => {
		const api = "http://localhost:4010/v2/subjects";
		try {
			const response = await axios.get(api, {});
			const data = response.data;
			setBlogslist(response.data);
		} catch (error) {
			console.error("Error fetch blogs:", error);
		}
	};
	const [name, setName] = useState("");
	const [Description, setDescription] = useState("");
	const [subjecttag, setSubjectTag] = useState("");
	const [data1, setData1] = useState("");

	const handleSubjectTagTypeSelection = (event) => {
		setSubjectTag(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();
		if (name && Description && subjecttag !== "") {
			try {
				const AddSubject = {
					name: name,
					Description: Description,
					subjectTag: subjecttag,
				};
				console.log(AddSubject)
				const response = await axios.post(
					"http://localhost:4010/v2/subject",
					AddSubject
				);
				setData1(response.data);
				console.log(response.data);
				if (response.status === 200) {
					toast("Subject Added Successfully", {
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
				console.log(error);
			}
		} else {
			toast.warning("Please fill in all fields");
		}
	};
	console.log("data1");
	const [Error, setError] = useState("");
	const handleDelete = async (id) => {
		try {
			if (!id) {
				setError("Invalid ID provided for delete");
				return;
			}
			console.log("Deleting subject with ID", id);
			const response = await axios.delete(
				`http://localhost:4010/v2/subjet/${id}`
			);
			if (response.status === 200) {
				toast("Subject Delete Successfully", {
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
	const onSubmitUpdatedForm = (_id, e) => {
		e.preventDefault();
		const AddSubject = {
			name: name,
			description: Description,
			subjectTag: subjecttag,
		};
		const nonemptyuserData = Object.fromEntries(
			Object.entries(AddSubject).filter(([key, value]) => value !== "")
		);
		axios
			.put(`http://localhost:4010/v2/subject/${_id}`, nonemptyuserData)
			.then((response) => {
				if (response.status === 200) {
					toast("Subject Updated successfully", {
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
					setName("");
					setDescription("");
					setSubjectTag("");
				}
			})
			.catch((error) => {
				console.log(error.response.data);
				toast.error("Institute already Updated");
			});
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

	const columns = [
		{ field: "SNO", headerName: "SNO", width: 170 },
		{ field: "NAME", headerName: "NAME", width: 170 },
		{ field: "TAG", headerName: "TAG", width: 170 },
		{ field: "CHAPTERS", headerName: "CHAPTERS", width: 170 },
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
				className="btn btn-danger mx-1"
				data-bs-toggle="modal"
				data-bs-target="#myModalView"
				onClick={() => GotohandleViewClick(blog)}
			>
				<i
					className="fas fa-pencil-alt"
					onClick={() => setUpdateModalOpen(false)}
					style={{ color: "white" }}
				></i>
			</button>

			<button
				type="button"
				className="btn btn-dark mx-1"
				onClick={() => handleDelete(blog._id)}
			>
				<i className="fas fa-trash" style={{ color: "white" }}></i>
			</button>
		</div>
	);

	const rows = blogslist.map((blog, index) => ({
		id: index + 1, // Add this line to include a unique id for each row
		SNO: index + 1,
		NAME: blog.name,
		TAG: blog.subjectTag,
		CHAPTERS: blog.chapter.length,
		description:blog.Description,
		_id:blog._id,
		TOTALQUESTION: blog.chapter?.map((each)=>each.MCQ.length + each.codingbasic.length + each.paragMCQ.length)[0],
		ACTION: renderActionButtons(blog),
	}));

	const [selectedSubject, setSelectedSubject] = useState(null);
	const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
	console.log(selectedSubject);
	const GotohandleViewClick = (data) => {
		setSelectedSubject(data);
		setUpdateModalOpen(true);
	};
	const handleSubjectTagSelection = (event) => {
		setSubjectTag(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
	};

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
						<div className=" ">
							<div className=" d-lg-block">
								<i
									className="fa-solid fa-bars bars d-lg-block d-none"
									onClick={toggleSidebar}
								></i>
								<div className="card-item p-2">
									<div class=" row  ">
										<div className="col-md-9">
											<h5 className="">Subjects</h5>
										</div>
										<div className="col-md-3 text-end">
											<button
												type="button"
												class="btn "
												data-bs-toggle="modal"
												data-bs-target="#myModalCreate"
												className="float-right btn"
												style={{ backgroundColor: "#981a96", color: "white" }}
											>
												+ Create Subject
											</button>
										</div>

										<div class="modal" id="myModalCreate">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<h4 class="modal-title">Create Subject</h4>
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
														<form onSubmit={(e)=>onSubmitForm(e)}>
															<div className="row">
																<div className="col-lg-6 col-md-6">
																	<div className="mb-1">
																		<label>
																			Name<sup className="star">*</sup>
																		</label>
																		<input
																			type="text"
																			className="form-control"
																			placeholder="...name..."
																			value={name}
																			onChange={(e) => setName(e.target.value)}
																		/>
																	</div>
																</div>
																<div className="col-lg-6 col-md-6">
																	<div className="mb-1">
																		<label>
																			Description<sup className="star">*</sup>
																		</label>
																		<input
																			type="text"
																			className="form-control"
																			placeholder="...Description..."
																			value={Description}
																			onChange={(e) =>
																				setDescription(e.target.value)
																			}
																		/>
																	</div>
																</div>
																<div className="col-lg-6">
																	<label className="my-3 ">Subject *</label>
																	<select
																		value={subjecttag}
																		className="form-control mb-2"
																		// onChange={(e) => setSubjectTag(e.target.value)}
																		onChange={handleSubjectTagTypeSelection}
																	>
																		<option value="">
																			--select subjects--
																		</option>
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
																</div>

																<div className="modal-footer">
																	<button
																		type="submit"
																		className="btn btn-danger"
																	>
																		Submit
																	</button>
																</div>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>

										{/* Delete */}

										<div class="modal" id="myModal234567">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<h4 class="modal-title">Delete Subject</h4>
														<button
															type="button"
															class="btn-close"
															data-bs-dismiss="modal"
														></button>
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
														>
															Yes
														</button>
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

									<div
										class="modal"
										id="myModalView"
										style={{ display: isUpdateModalOpen ? "block" : "none" }}
									>
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<h4 class="modal-title">Create Subject</h4>
													<button
														type="button"
														class="btn-close"
														data-bs-dismiss="modal"
													></button>
												</div>
												<div class="modal-body">
													<div className="mb-1">
														<label style={{ float: "left" }}>
															Name<sup className="star">*</sup>
														</label>
														<input
															type="text"
															className="form-control"
															placeholder="Name"
															value={name || selectedSubject?.NAME}
															onChange={(e) => setName(e.target.value)}
														/>
													</div>
													<div className="mb-1">
														<label style={{ float: "left" }}>
															Description
															<sup className="star">*</sup>
														</label>
														<input
															type="text"
															className="form-control"
															placeholder="Description"
															value={
																Description || selectedSubject?.description
															}
															onChange={(e) => setDescription(e.target.value)}
														/>
													</div>
													<label className="mt-3 " style={{ float: "left" }}>
														Subject *
													</label>
													<select
														type="text"
														className="form-control"
														placeholder="...subject tag..."
														value={subjecttag || selectedSubject?.TAG}
														onChange={handleSubjectTagSelection}

														// onChange={}
													>
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
													<p></p>
												</div>

												<div class="modal-footer">
													<button
														type="button"
														class="btn btn-danger"
														onClick={(e) =>
															onSubmitUpdatedForm(selectedSubject?._id, e)
														}
													>
														Submit
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<></>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default QbSubject;
