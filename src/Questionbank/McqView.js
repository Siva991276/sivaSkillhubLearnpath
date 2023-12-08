import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Pagination } from "antd";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const McqView = () => {
	const [selectQuestionType, setSelectQuestionType] = useState("");
	const [selectedSubject, setSelectedSubject] = useState("");
	const [selectedChapter, setSelectedChapter] = useState("");
	const [selectedDifficulty, setSelectedDifficulty] = useState("");
  	const [reference, setReferencce] = useState("");
	const [question, setQuestion] = useState("");
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [correctAnswer, setCorrectAnswer] = useState("");
	const [allquestionData, setallquestionData] = useState("");
	const [allsubjectsData, setAllsubjectsData] = useState([]);
	const [allMcqsList, setallMCqsList] = useState([]);

	

	const fetchsubjectsData = async () => {
		const api = "http://localhost:4010/v2/subjects";
		try {
			const response = await axios.get(api, {});
			const data = response.data;
			setAllsubjectsData(response.data);
		} catch (error) {
			console.error("Error fetch blogs:", error);
		}
	};
	console.log("allsubjectsData",typeof(allsubjectsData),allsubjectsData);

	const fetchMCQs = async () => {
		const api = "http://localhost:4010/v1/getMCQs/subjectId/chapterId";

		try {
			const response = await axios.get(api);
			setallMCqsList(response.data);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};
	console.log(fetchMCQs);
	useEffect(() => {
		fetchsubjectsData();
		fetchMCQs();
	},[]);
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
	const [selectedSubjectId, setSelectedSubjectId] = useState([]);

	const handleSubjectTagTypeSelection = (event) => {
		setSelectedSubject(
		  event.target.options[event.target.selectedIndex].getAttribute(
			"data-value"
		  )
		);
		setSelectedSubjectId(
			event.target.options[event.target.selectedIndex].getAttribute(
			  "value"
			)
		  );
		  }
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-md-3 sectioncard121">
							<Sidebar />
							<ToastContainer/>
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 9 : 12} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
						<div className=" d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
							<div class=" row ">
								<div className="col-md-11 py-3 ">
									<p>
										<b>Fillter Text Question</b> :
									</p>
									<div className="row card-item p-2">									
										<div className="col-6">
										<select
					style={{padding:"5px"}}
					className="form-control"
						onChange={handleSubjectTagTypeSelection}
						
					>
						 <option className="hidden" value="">
                                        Select Subject 
                                    </option>
						{allsubjectsData?.map((subject) => (
							<>
							<option
								className="name_item"
								key={subject._id} // Use a unique key for each option
								data-value={subject.subjectTag}
								value={subject._id}
							>
								{subject.subjectTag }
							</option>
							</>
						))} 
					</select>
											<p>Select Subject</p>
										</div>

										

										<div className="col-6">
											<select
												type="text"
												placeholder=""
												className="form-control"
											>
												<option value="chapter"></option>

												{ allsubjectsData?.map((blog) => (
													<>
													<option key={blog._id} value={blog._id}>
														{blog._id}
													</option>
													</>
												))} 
											</select>
											<p>Select Chapter</p>
										</div>
										<div className="col-6">
											<select
												type="text"
												placeholder=""
												className="form-control"
											>
												<option>Easy</option>
												<option>Medium</option>
												<option>Hard</option>
											</select>
											<p>Diffculty</p>
										</div>

										<div className="col-6">
											{/* <select
												type="text"
												placeholder=""
												className="form-control"
											>
												<option></option>
												<option value="refernce"></option>

												{allsubjectsData?.map((blog) => (
													<option key={blog.id} value={blog.refernce}>
														{blog.refernce}
													</option>
												))}
											</select> */}
											<p>Reference</p>
										</div>

										<div className="col-6">
											<select
												type="text"
												placeholder=""
												className="form-control"
											>
												<option></option>
												<option value="questiontype"></option>

												{/* {allsubjectsData?.map((blog) => (
													<option key={blog.id} value={blog.questiontype}>
														{blog.questiontype}
													</option>
												))} */}
											</select>
											<p>Question type</p>
										</div>
										<div className="row">
											<div className="col-5"></div>
											<div className="col-1">
												<button
													className=" my-2"
													style={{
														backgroundColor: "black",
														color: "white",
														border: "none",
														padding: "6px",
														borderRadius: "7px",
													}}
												>
													Go
												</button>
											</div>
											<div className="col-2">
												<button
													className="my-2"
													style={{
														backgroundColor: "white",
														color: "red",
														border: "1px solid red",
														padding: "6px",
														borderRadius: "7px",
													}}
												>
													Clear Fillter
												</button>
											</div>
										</div>
									</div>

									<div
										className="row card-item  mt-3 pt-3 p-2"
										style={{ overflowX: "scroll" }}
									>
										<div className="col-12 ">
											<p>
												<b>Question Table</b>
											</p>
											{/* <button style={{ width: "95px" }} cl>
												S.No
											</button>
											<button style={{ width: "95px" }}>ID</button>
											<button style={{ width: "95px" }}>Modulue</button>
											<button style={{ width: "95px" }}>Chapter</button>
											<button style={{ width: "95px" }}>Question</button>
											<button style={{ width: "95px" }}>Diffculty</button>

											<button style={{ width: "95px" }}>Reference</button>
											<button style={{ width: "95px" }}>Action</button> */}
											<div style={{ width: "1200px" }}>
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
																S NO
															</th>
															<th
																style={{
																	fontSize: "14px",
																	backgroundColor: "#333",
																	color: "#fff",
																}}
																className="text-center"
															>
																ID
															</th>
															<th
																style={{
																	fontSize: "14px",
																	backgroundColor: "#333",
																	color: "#fff",
																}}
																className="text-center"
															>
																Modulue
															</th>
															<th
																style={{
																	fontSize: "14px",
																	backgroundColor: "#333",
																	color: "#fff",
																}}
																className="text-center"
															>
																Chapter
															</th>
															<th
																style={{
																	fontSize: "14px",
																	backgroundColor: "#333",
																	color: "#fff",
																}}
																className="text-center"
															>
																Question
															</th>
															<th
																style={{
																	fontSize: "14px",
																	backgroundColor: "#333",
																	color: "#fff",
																}}
																className="text-center"
															>
																Diffculty
															</th>
															<th
																style={{
																	fontSize: "14px",
																	backgroundColor: "#333",
																	color: "#fff",
																}}
																className="text-center"
															>
																Reference
															</th>
															<th
																style={{
																	fontSize: "14px",
																	backgroundColor: "#333",
																	color: "#fff",
																}}
																className="text-center"
															>
																Quation Type
															</th>
															<th
																style={{
																	fontSize: "14px",
																	backgroundColor: "#333",
																	color: "#fff",
																}}
																className="text-center"
															>
																Action
															</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td className="text-center">1</td>
															<td className="text-center">iptalgh8</td>
															<td className="text-center">React Js</td>
															<td className="text-center">
																Life cycle of component
															</td>
															<td className="text-center">What is React</td>
															<td className="text-center">Easy</td>
															<td className="text-center">
																Multi Correct Option
															</td>
															<td className="text-center">Null</td>
															<td className="text-center">
																<i class="fa-regular fa-copy mx-1 copy"></i>
																<i class="fa-solid fa-eye mx-1 eye"></i>

																<i className="fa-sharp fa-solid fa-pen pen mx-1"></i>

																<i className="fa-solid fa-trash-can trash mx-2"></i>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
							Questiontype
						</div>
						{allMcqsList.map((blog, index) => (
							<p key={index}>{blog.questiontype}</p>
						))}
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
	);
};
export default McqView;
