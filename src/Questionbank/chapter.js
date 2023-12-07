import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

const Chapter = () => {
	useEffect(() => {
		fetchblogs1();
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

	const onSubmitForm = async (e) => {
		e.preventDefault();

		if (name1 && Description1 && subjecttag1 && chaptertag !== "") {
			try {
				const AddSubject = {
					name1: name1,
					Description1: Description1,
					subjecttag1: subjecttag1,
					chaptertag: chaptertag,
				};

				const response = await axios.post(
					"http://localhost:3051/chapterData",
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
	return (
		// main content

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
                            <div className="card-item p-2">
							<div class=" row ">
								<div className="col-md-3">
									<h6 className="">Subjects</h6>
								</div>
								<div className="col-md-9 text-end">
									<button
										type="button"
										class="btn "
										data-bs-toggle="modal"
										data-bs-target="#myModal234565"
										className="float-right"
										style={{ backgroundColor: "black", color: "white", borderRadius:"7px", padding:"7px 20px", border:"none" }}
									>
										+ Create Subject
									</button>
								</div>

								<div class="modal" id="myModal234565">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<h4 class="modal-title">Cerate Chapter</h4>

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
														onChange={(e) => setDescription1(e.target.value)}
														value={Description1}
													/>
													<br></br>
													<p>chaptertag *</p>
													<input
														type="text"
                                                        className="form-control"
														placeholder="...chaptertag..."
														onChange={(e) => setchaptertag(e.target.value)}
														value={chaptertag}
													/>
													<br></br>

													<label className="my-3 ">Chapter *</label>
													<br></br>
													<select
                                                    className="form-control"
														value={subjecttag1}
														style={{ width: "190px" }}
														onChange={(e) => setsubjecttag1(e.target.value)}
													>
														<option value="">--select subjects--</option>
														<option value="algorithms">Algorithms</option>
														{/* <option value="algorithms">algorithms</option> */}
														<option value="Botany">Botany</option>
														<option value="C-programming">C-programming</option>
														<option value="Chemistry">Chemistry</option>
														<option value="Communication">Communication</option>
														<option value="Data-reasoning">
															Data-reasoning
														</option>
														<option value="Data-structres">
															Data-structres
														</option>
														<option value="Dbms">Dbms</option>
														<option value="Java-programming">
															Java-programming
														</option>
														<option value="Mathematics">Mathematics</option>
														<option value="Others">Others</option>
														<option value="Physics">Physics</option>
														<option value="Programming">Programming</option>
														<option value="Programming Skills">
															Programming Skills
														</option>
														<option value="Quntative apptitude">
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
											<h4 class="modal-title">Cerate Chapter</h4>
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
											></button>
										</div>

										<div class="modal-body">
											<p>Name *</p>
											<input type="text" className="form-control" placeholder="...name..." style={{}} />
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

										<div class="modal-body">Are Sure Delete this subject</div>

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
									<option className="w-15">1</option>
									<option className="w-15">2</option>
									<option className="w-15">3</option>
									<option className="w-15">4</option>
									<option className="w-15">5</option>
									<option className="w-15">6</option>
									<option className="w-15">7</option>
									<option className="w-15">8</option>
									<option className="w-15"></option>
									<option className="w-15">10</option>
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
											style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }}
											className="text-center"
										>
											SNO
										</th>
										<th style={{ fontSize: "14px" , backgroundColor:"#333", color:"#fff"}} className="text-center">
											NAME
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											TAG
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											CHAPTERS
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											TOTAL QUESTION
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											ACTION
										</th>
									</tr>
								</thead>
								<tbody>
									{blogslist.map((blog1, index) => (
										<tr key={index}>
											<td className="text-center">{index + 1}</td>
											<td className="text-center">{blog1.name1}</td>
											<td className="text-center">{blog1.Description1}</td>
											{/* <td className="text-center">{blog1.chapters}</td> */}
											<td className="text-center">{blog1.subjecttag1}</td>
											<td className="text-center">{blog1.chaptertag}</td>
											<td className="text-center">
												<button
													type="button"
													className="btn"
													data-bs-toggle="modal"
													data-bs-target={`#myModal${index + 1}`}
												>
													<i
														className="fa-sharp fa-solid fa-pen"
														style={{ color: "skyblue" }}
													></i>
												</button>
												<button
													type="button"
													className="btn"
													onClick={() => handleDelete(blog1._id)}
												>
													<i
														className="fa-solid fa-trash-can "
														style={{ color: "red" }}
													></i>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>

							{/* <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: "14px", marginLeft: "-200px" }} className="text-center">SNO</th>
                                        <th style={{ fontSize: "14px", }} className="text-center">NAME</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">TAG</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">CHAPTERS</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">TOTAL QUESTION</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">ACTION</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        {blogslist.map((blog1) => (
                                            <div>
                                                <tr>
                                                    <th className="text-center  mx-3">1</th>
                                                </tr>
                                                <tr>

                                                    <th className="text-center  mx-3">{blog1.name}</th>
                                                </tr>
                                                <tr>
                                                    <td className="text-center mx-3" >{blog1.Description}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center  mx-3">{blog1.subjecttag}</td>
                                                </tr>




                                                <td>
                                                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal23456">
                                                        <i class="fa-sharp fa-solid fa-pen mx-1" style={{ color: "skyblue" }}></i>
                                                    </button>
                                                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal234567">

                                                        <i class="fa-solid fa-trash-can mx-2" style={{ color: "red" }}></i>
                                                    </button>
                                                </td>
                                                <td><i class="fa-sharp fa-solid fa-pen mx-4" style={{ color: "skyblue" }}></i><i class="fa-solid fa-trash-can mx-2" style={{ color: "red" }}></i></td>
                                            </div>
                                        ))}
                                    </tr>




                                   


                                </tbody>

                            </table> */}
							{/* <tr>
                                        <td className="text-center">2</td>
                                        <td className="text-center">javaprogramm</td>
                                        <td className="text-center">java-programming</td>
                                        <td className="text-center">1</td>
                                        <td></td>
                                        <td><i class="fa-sharp fa-solid fa-pen mx-4" style={{ color: "skyblue" }}></i><i class="fa-solid fa-trash-can mx-2" style={{ color: "red" }}></i></td>

                                    </tr> */}

							{/* {blogslist.map((blog) => (
                                        <tr key={blog.id}>
                                            <td>{blog.name}</td>
                                            <td>{blog.Description}</td>
                                            <td>{blog.subjecttag}</td>
                                        </tr>
                                    ))} */}
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
				</div>
                </div>
                </div>
			</div>
		</div>
	);
};
export default Chapter;