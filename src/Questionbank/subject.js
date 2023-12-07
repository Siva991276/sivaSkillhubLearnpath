import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { Pagination } from "antd";

const QbSubject = () => {
	useEffect(() => {
		fetchblogs1();
	}, []);

	const [Open, setOpen] = useState(true);

	// const [name, setname] = useState([]);
	// const [Description, setDescription] = useState([]);
	// const [subjecttag, setsubjecttag] = useState([]);

	const [blogslist, setBlogslist] = useState([]);

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
	// const [name, setname] = useState("");
	// const [Description, setDescription] = useState("");
	// const [subjecttag, setsubjecttag] = useState("");

	// const [data1, setdata1] = useState([]);

	// const AddSubject = {
	//     name: name,
	//     Description: Description,
	//     subjecttag: subjecttag

	// };
	// console.log(AddSubject);

	// const onSubmitForm = (e) => {
	//     e.preventDefault();

	//     if (name && Description && subjecttag !== "") {

	//         const AddSubject = {
	//             name: name,
	//             Description: Description,
	//             subjecttag: subjecttag

	//         };

	//         axios
	//             .post(" http://localhost:3051/subjectData", AddSubject)
	//             .then((response) => {
	//                 setdata1(response.data);
	//                 console.log(response.data);
	//                 if (response.status === 200) {
	//                     toast.success("Subject created Successful", {
	//                         position: "top-right",
	//                         autoClose: 1000,
	//                         hideProgressBar: false,
	//                         closeOnClick: true,
	//                         pauseOnHover: true,
	//                         draggable: true,
	//                         progress: undefined,
	//                         theme: "colored",
	//                     });

	//                     setTimeout(function () {

	//                     }, 3000);
	//                 }
	//             })
	//             .catch((error) => {
	//                 if (error.response && error.response.status === 400) {
	//                     toast.error("subject created not sucessfully", {
	//                         position: "top-right",
	//                         autoClose: 1000,
	//                         hideProgressBar: false,
	//                         closeOnClick: true,
	//                         pauseOnHover: true,
	//                         draggable: true,
	//                         progress: undefined,
	//                         theme: "colored",
	//                     });
	//                 }
	//                 console.log(error);
	//             });
	//     } else {
	//         toast.warning("Enter the Required Details");

	//     }
	// };

	const [name, setName] = useState("");
	const [Description, setDescription] = useState("");
	const [subjecttag, setSubjectTag] = useState("");
	const [data1, setData1] = useState("");

	const onSubmitForm = async (e) => {
		e.preventDefault();

		if (name && Description && subjecttag !== "") {
			try {
				const AddSubject = {
					name: name,
					description: Description,
					subjectTag: subjecttag,
				};

				const response = await axios.post(
					// "http://localhost:3051/subjectData",
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
				// Handle error and display appropriate notifications
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
				`http://localhost:3051/deleteInstitute/${id}`
			);
			if (response.status === 200) {
				window.alert("Subject deleted Successful", {
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
			.post(`http://localhost:4010/v2/subject/${_id}`, { nonemptyuserData })
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
	const handleSubjectTagTypeSelection = (event) => {
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
						className={`my-3 col-12 col-md-${isOpen ? 9 : 12} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
						<div className=" d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
							<div className="card-item p-2 mt-2">
								<div class=" row  ">
									<div className="col-md-9">
										<h5 className="">Subjects</h5>
									</div>
									<div className="col-md-3 text-end">
										<button
											type="button"
											class="btn "
											data-bs-toggle="modal"
											data-bs-target="#myModal234565"
											className="float-right"
											style={{
												backgroundColor: "black",
												color: "white",
												borderRadius: "8px",
												border: "none",
												padding: "7px 20px",
											}}
										>
											+ Create Subject
										</button>
									</div>

									<div class="modal" id="myModal234565">
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
																<option data-value="algorithms">
																	Algorithms
																</option>
																{/* <option value="algorithms">algorithms</option> */}
																<option data-value="Botany">Botany</option>
																<option data-value="C-programming">
																	C-programming
																</option>
																<option data-value="Chemistry">
																	Chemistry
																</option>
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

									{/* pen */}

									<div class="modal" id="myModal23456">
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
													<p>Name *</p>
													<input
														type="text"
														placeholder="...name..."
														style={{}}
													/>
													<p>Description *</p>
													<input
														type="text"
														className="form-control"
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
													style={{
														fontSize: "14px",
														backgroundColor: "#333",
														color: "#fff",
													}}
													className="text-center"
												>
													SNO
												</th>
												<th
													style={{
														fontSize: "14px",
														backgroundColor: "#333",
														color: "#fff",
													}}
													className="text-center"
												>
													NAME
												</th>
												<th
													style={{
														fontSize: "14px",
														backgroundColor: "#333",
														color: "#fff",
													}}
													className="text-center"
												>
													TAG
												</th>
												<th
													style={{
														fontSize: "14px",
														backgroundColor: "#333",
														color: "#fff",
													}}
													className="text-center"
												>
													CHAPTERS
												</th>
												<th
													style={{
														fontSize: "14px",
														backgroundColor: "#333",
														color: "#fff",
													}}
													className="text-center"
												>
													TOTAL QUESTION
												</th>
												<th
													style={{
														fontSize: "14px",
														backgroundColor: "#333",
														color: "#fff",
													}}
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
															className="btn"
															data-bs-toggle="modal"
															data-bs-target={`#myModal${index + 1}`}
														>
															<i
																className="fa-sharp fa-solid fa-pen mx-1"
																style={{ color: "skyblue" }}
																onClick={(e) =>
																	onSubmitUpdatedForm(blog1._id, e)
																}
															></i>
														</button>
														<button
															type="button"
															className="btn"
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
								{/* <div className="d-flex flex-row">
									<div>
										<p>Showing 1 to 2 of entries</p>
									</div>
									<div className="col-8"></div>
									<div>
										<p>Previous</p>
									</div>
								</div> */}
								
								
							</div>
						</div>
						<div className="text-center">
								<Pagination
									defaultCurrent={1}
									total={50}
									className="my-3 fixed-bottom "
									
								/>
								</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default QbSubject;
