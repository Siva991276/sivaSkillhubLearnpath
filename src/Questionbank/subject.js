import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const QbSubject = () => {
	useEffect(() => {
		fetchblogs1();
	}, []);
	const [Open, setOpen] = useState(true);
	const [blogslist, setBlogslist] = useState([]);
	let navigate = useNavigate("");
	const fetchblogs1 = async () => {
		const api = "http://localhost:4010/v2/subjects";
		try {
			const response = await axios.get(api, {});
			const data = response.data;
			setBlogslist(response.data);
			console.log("allsubject",response.data)
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
					window.alert("Success");
					fetchblogs1();
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			window.alert("Error: Please fill in all fields");
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
				window.alert("Deleted Successfully", {
					position: "top-right",
					autoClose: 1000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

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
	const onSubmitUpdatedForm = (_id,e) => {
		e.preventDefault();
		const AddSubject = {
			name: name,
			description: Description,
			subjectTag: subjecttag,
		};
		 const nonemptyuserData = Object.fromEntries(
			Object.entries(AddSubject).filter(([key, value]) => value !== '')
		  );		  
		  axios
			.put(`http://localhost:4010/v2/subject/${_id}`, nonemptyuserData)
			.then((response) => {
			  if (response.status === 200) {
				toast("Institute Updated successfully", {
				  position: "top-right",
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
	
	  const columns: GridColDef[] = [
		{ field: 'SNO', headerName: 'SNO', width: 70 },
		{ field: 'NAME', headerName: 'NAME', width: 130 },
		{ field: 'TAG', headerName: 'TAG', width: 130 },
		{ field: 'TAG', headerName: 'TAG', width: 130 },
		{ field: 'TAG', headerName: 'TAG', width: 130 },
		{ field: 'TAG', headerName: 'TAG', width: 130 },

	  ];
	  
	  const rows = blogslist.map((blog, index) => ({
		SNO: index + 1, // Assuming index is a unique identifier; replace with an actual unique identifier if available
		NAME: blog.name,
		TAG: blog.class,
		CHAPTERS: blog.totalqustions,
		TOTALQUESTION: ``,
		ACTION:``
	  }));
const [selectedSubject, setSelectedSubject] = useState(null);
console.log(selectedSubject)
	  const GotohandleViewClick =(data)=>{
		setSelectedSubject(data);
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
			<div className="container-fluid">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-md-3 sectioncard121">
							<Sidebar />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 8 : 12} col-lg-${
							isOpen ? 8 : 12
						}`}
					>
						<div className=" d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
							<div className="card-item p-2">
								<div class=" row  ">
									<div className="col-md-9">
										<h6 className="">Subjects</h6>
									</div>
									<div className="col-md-3 text-end">
										<button
											type="button"
											class="btn "
											data-bs-toggle="modal"
											data-bs-target="#myModalCreate"
											className="float-right btn btn-danger"
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
													<form onSubmit={onSubmitForm}>
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
															<label className="my-3 ">Subject *</label>
															<select
																value={subjecttag}
																style={{ width: "190px" }}
																className="form-control mb-2"
																// onChange={(e) => setSubjectTag(e.target.value)}
																onChange={handleSubjectTagTypeSelection}

															>
																<option value="">--select subjects--</option>
																<option data-value="algorithms">Algorithms</option>
																{/* <option value="algorithms">algorithms</option> */}
																<option data-value="Botany">Botany</option>
																<option data-value="C-programming">
																	C-programming
																</option>
																<option data-value="Chemistry">Chemistry</option>
																<option data-value="Communication">
																	Communication
																</option>
																<option data-value="Data-reasoning">
																	Data-reasoning
																</option>
																<option data-value="Data-structres">
																	Data-structres
																</option>
																<option data-value="Dbms">Dbms</option>
																<option data-value="Java-programming">
																	Java-programming
																</option>
																<option data-value="Mathematics">Mathematics</option>
																<option data-value="Others">Others</option>
																<option data-value="Physics">Physics</option>
																<option data-value="Programming">Programming</option>
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
									<div>
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
									<div className="col-9"></div>

									<div className="mt-2">
										<label>Search: </label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<p>entires</p>
								<div>
									<table className="table table-bordered">
										<thead>
											<tr>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													SNO
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													NAME
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													TAG
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													CHAPTERS
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													TOTAL QUESTION
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													ACTION
												</th>
											</tr>
										</thead>
										<tbody>
											{blogslist.map((blog1, index) => (
												<tr key={index}>
													<td className="text-center">{index + 1}</td>
													<td className="text-center">{blog1.name}</td>
													<td className="text-center">{blog1.subjectTag}</td>
													<td className="text-center">{blog1.chapters}</td>
													<td className="text-center">
														{blog1.totalQuestions}
													</td>
													<td className="text-center">
														<button
															type="button"
															class="btn "
															data-bs-toggle="modal"
															data-bs-target="#myModalView"
															className="float-right btn btn-danger"
        													onClick={() => GotohandleViewClick(blog1)}

														>
															<i
																className="fa-sharp fa-solid fa-pen mx-1"
																style={{ color: "skyblue" }}
															
															></i>
															</button>
															<div class="modal" id="myModalView">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<h4 class="modal-title">Create Subject</h4>
												</div>
												<div class="modal-body">
													<div className="mb-1">
														<label style={{float:"left"}}>Name<sup className="star">*</sup></label>
														<input
														type="text"
														className="form-control"
														placeholder="Name"
														value={name || selectedSubject?.name}
														onChange={(e) => setName(e.target.value)}
														/>
													</div>
													<div className="mb-1">
														<label style={{float:"left"}}>Description<sup className="star">*</sup></label>
														<input
														type="text"
														className="form-control"
														placeholder="Description"
														value={Description || selectedSubject?.Description}
														onChange={(e) => setDescription(e.target.value)}
														/>
													</div>													
													<label className="mt-3 " style={{float:"left"}}>Subject *</label>
													<select
														type="text"
                                                        className="form-control"
														placeholder="...subject tag..."
														value={subjecttag || selectedSubject?.subjectTag}
														onChange={handleSubjectTagSelection}

														// onChange={}
													>
														<option data-value="algorithms">algorithms</option>
														<option data-value="Botany">Botany</option>
														<option data-value="C-programming">C-programming</option>
														<option data-value="Chemistry">Chemistry</option>
														<option data-value="Communication">Communication</option>
														<option data-value="Data-reasoning">Data-reasoning</option>
														<option data-value="Data-structres">Data-structres</option>
														<option data-value="Dbms">Dbms</option>
														<option data-value="java-programming">java-programming</option>
														<option data-value="Mathematics">Mathematics</option>
														<option data-value="others">others</option>
														<option data-value="physics">physics</option>
														<option data-value="programming">programming</option>
														<option data-value="programming Skills">programming Skills</option>
														<option data-value="Quntative apptitude">Quntative apptitude</option>
													</select>
													<p></p>
												</div>

												<div class="modal-footer">
													<button
														type="button"
														class="btn btn-danger"
														data-bs-dismiss="modal"
														onClick={(e) => onSubmitUpdatedForm(blog1._id,e)}
													>
														Submit
													</button>
												</div>
											</div>
										</div>
															</div>
														
														<button
															type="button"
															className="btn btn-dark mx-2"
															onClick={() => handleDelete(blog1._id)}
														>
															<i
																className="fa-solid fa-trash-can mx-2"
																style={{ color: "red" }}
															></i>
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div className="d-flex flex-row">
									<div>
										<p>Showing 1 to 2 of entries</p>
									</div>
									<div className="col-8"></div>
									<div>
										<p>Previous</p>
									</div>
								</div>
							</div>
							{/* <>           
								<div style={{ height: 400, width: '100%' }}>
								<DataGrid
									rows={rows}
									columns={columns}
									initialState={{
									pagination: {
										paginationModel: { page: 0, pageSize: 5 },
									},
									}}
									pageSizeOptions={[5, 10]}
								
								/>
								</div>
											
									</> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default QbSubject;