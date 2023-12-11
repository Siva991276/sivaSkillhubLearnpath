import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Pagination } from "antd";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";


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
	console.log("allsubjectsData", typeof allsubjectsData, allsubjectsData);

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
	}, []);
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
			event.target.options[event.target.selectedIndex].getAttribute("value")
		);
	};

	const columns: GridColDef[] = [
		{ field: "SNO", headerName: "SNO", width: 100 },
		{ field: "ID", headerName: "ID", width: 100 },
		{ field: "Modulue", headerName: "Modulue", width: 120 },
		{ field: "Chapter", headerName: "Chapter", width: 120 },
		{ field: "Question", headerName: "Question", width: 120 },
		{ field: "Diffculty", headerName: "Diffculty", width: 120 },
		{ field: "Reference", headerName: "Reference", width: 120 },
		{ field: "Question Type", headerName: "Question Type", width: 120 },
		{
			field: "ACTION",
			headerName: "Action",
			width: 120,
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
				// onClick={() => {
				// 	setIsModalOpen(true);
				// 	// Additional logic if needed
				// }}
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
				// onClick={() => handleDelete(allSubjects._id, allChapters._id)}
			>
				<i
					className="fa-solid fa-trash-can "
					// onClick={() => {
					// 	setIsModalOpen(true);
					// 	// Additional logic if needed
					// }}
					style={{ color: "red" }}
				></i>
			</button>
		</div>
	);

	const rows = allMcqsList.map((blog, index) => ({
		
		SNO: 1,
		id: 7654345678,
		Modulue: `hyffgfg`, // Assuming "Name" is the property name for the chapter name
		Chapter: `jkjhjhghfgfv`, // Assuming "subjectTag" is the property name for the subject tag
		Question: `kjhgfgh`, // Assuming "totalqustions" is the property name for the total questions
		Diffculty: ``,
		Reference:``,
		ACTION: renderActionButtons(blog),
	}));

	return (
		<div>
			<div className="container-fluid ">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-lg-3 col-md-12 sectioncard121">
							<Sidebar />
							<ToastContainer />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`} style={{height:"100vh", overflowY:"scroll"}}
					>
						<div className=" ">
							<i
								className="fa-solid fa-bars bars d-lg-block d-none"
								onClick={toggleSidebar}
							></i>
							<div class=" row ">
								<div className="col-lg-11 col-md-12 py-3  ">
									<p className="p-2">
										<b>Fillter Text Question</b> :
									</p>
									<div className="row card-item p-2">
										<div className="col-6">
											<select
												style={{ padding: "5px" }}
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
															{subject.subjectTag}
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

												{allsubjectsData?.map((blog) => (
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
											<div className="col-5 d-lg-block d-none"></div>
											<div className="col-lg-1 col-md-6 col-4 text-center">
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
											<div className="col-lg-2 col-md-6 col-8 text-center">
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
								</div>
							</div>
							Questiontype
						</div>
						{allMcqsList.map((blog, index) => (
							<p key={index}>{blog.questiontype}</p>
						))}
					</div>
					
				</div>
			</div>
		</div>
	);
};
export default McqView;
