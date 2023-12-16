import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Pagination } from "antd";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { json, useNavigate } from "react-router-dom";
import { Audio } from 'react-loader-spinner';


const McqView = () => {
	const navigate = useNavigate();
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
	const [worksheetLoading, setWorksheetLoading] = useState(true);
	const fetchsubjectsData = async () => {
		const api = "http://localhost:4010/v2/subjects";
		try {
			const response = await axios.get(api, {});
			const data = response.data;
			setAllsubjectsData(response.data);
			setWorksheetLoading(false);
		} catch (error) {
			console.error("Error fetch blogs:", error);
			setWorksheetLoading(false);
		}
	};

	const fetchMCQs = async () => {
		const api = "http://localhost:4010/v1/getMCQs/subjectId/chapterId";

		try {
			const response = await axios.get(api);
			setallMCqsList(response.data);
			setWorksheetLoading(false);
		} catch (error) {
			console.error("Error fetching blogs:", error);
			setWorksheetLoading(false);
		}
	};
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
	const [filteredSubjectIdArray, setFilteredSubjectIdArray] = useState({});
	console.log(filteredSubjectIdArray)
	const handleSubjectTagTypeSelection = (event) => {
		setSelectedSubject(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
		setSelectedSubjectId(
			event.target.options[event.target.selectedIndex].getAttribute("value")
		);
		const subjectfilterId = event.target.options[event.target.selectedIndex].getAttribute("value")

		const result = allsubjectsData?.filter(item => item._id === subjectfilterId);
		console.log("Filtered Data:", result);
		setFilteredSubjectIdArray(result.map((each)=>each.chapter))
	};
	const [selectedChapterId, setSelectedChapterId] = useState([]);

		const handleChapterTagTypeSelection = (event) => {
		setSelectedChapter(
		event.target.options[event.target.selectedIndex].getAttribute(
		"data-value"
		)
	);
	setSelectedChapterId(
		event.target.options[event.target.selectedIndex].getAttribute(
		"value"
		)
	);
		}
	const [selectedReferenceId, setSelectedReferenceId] = useState([]);
		const handleReferenceTypeSelection = (event) => {
			setReferencce(
			event.target.options[event.target.selectedIndex].getAttribute(
			"data-value"
			)
		);
		setSelectedReferenceId(
			event.target.options[event.target.selectedIndex].getAttribute(
			"value"
			)
		);
			}
	const [selectedQuestionId, setSelectedQuestionId] = useState([]);
	const handleQuestionTypeSelection = (event) => {
		setQuestion(
		event.target.options[event.target.selectedIndex].getAttribute(
		"data-value"
		)
	);
	setSelectedQuestionId(
		event.target.options[event.target.selectedIndex].getAttribute(
		"value"
		)
	);
		}
	const [selectedMcqList, setSelectedMcqList] = useState({});
		const handleGoButtonClick = () => {
			const filteredMCQs = allsubjectsData
			  .filter((subject) => subject?._id === selectedSubjectId)
			  .flatMap((subject) =>
				subject.chapter.find((chapter) => chapter?._id === selectedChapterId)?.MCQ || []
			  )
			  .find((mcq) => mcq?._id === selectedQuestionId);
		  
			console.log(filteredMCQs);
			setSelectedMcqList(filteredMCQs ||"")
		  };
		  console.log("selectedMcqList",selectedMcqList)
		
		  const handleClearFilterButtonClick = () => {
			setAllsubjectsData('');
		  };
	
	const GotohandleDeleteClick = (subjectId,chapterId,McqId) => {   
		// const token = Cookies.get("token");
			const api = `http://localhost:4010/v1/deleteMCQ/${subjectId}/${chapterId}/${McqId}`;
			try{
				const response=axios.delete(api,)
			//   console.log("Password updated successfully:", response.data);
					toast('Deleted Question successfully', {
					position: "top-center",
					autoClose: 1000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,  
					theme:"colored",
					className: 'custom-toast-custom'          
					});
					fetchsubjectsData();
					fetchMCQs();					          
				} catch (error) {              
					console.error("Error Delete Institute:", error);
				}
				// toast.warning("Pending some fields Please check")          
				};
	
	// const columns: GridColDef[] = [
	const columns = [
		{ field: "SNO", headerName: "SNO", width: 100 },
		{ field: "ID", headerName: "ID", width: 100 },
		{ field: "Modulue", headerName: "Modulue", width: 130 },
		{ field: "Chapter", headerName: "Chapter", width: 130 },
		{ field: "Question", headerName: "Question", width: 130 },
		{ field: "Difficulty", headerName: "Difficulty", width: 130 },
		{ field: "Reference", headerName: "Reference", width: 130 },
		{ field: "QuestionType", headerName: "Question Type", width: 130 },
		{
			field: "ACTION",
			headerName: "Action",
			width: 180,
			renderCell: (params) => renderActionButtons(params.row),
		},
	];

	const headerColumns = columns.map((col) => ({
		field: col.field,
		headerName: col.headerName,
		width: col.width,
		renderCell: col.renderCell,
	}));

	const renderActionButtons = (McqId) => (
		<div>
			<button
				type="button"
				className="btn"
				onClick={()=>navigate("/ParticularMcaView",{state :{subjectId:selectedSubjectId,chapterId:selectedChapterId,McqId:McqId.id}})}
			>
				<i className="fa-regular fa-eye " style={{color:"salmon"}}></i>
			</button>
			<button
				type="button"
				className="btn"
				// onClick={()=>navigate("/Mcqupdate",{state :{subjectId:selectedSubjectId,chapterId:selectedChapterId,McqId:McqId.id}})}
			>
				<i className="fa-regular fa-file "></i>
			</button>
			<button
				type="button"
				className="btn"
				onClick={()=>navigate("/Mcqupdate",{state :{subjectId:selectedSubjectId,chapterId:selectedChapterId,McqId:McqId.id}})}
			>
				<i
					className="fa-sharp fa-solid fa-pen"
					style={{ color: "skyblue" }}
				></i>
			</button>
			<button
				type="button"
				className="btn"
				onClick={() => GotohandleDeleteClick(selectedSubjectId, selectedChapterId,McqId)}
			>
				<i
					className="fa-solid fa-trash-can "
					style={{ color: "red" }}
				></i>
			</button>
		</div>
	);

	// const rows = selectedMcqList.map((blog, index) => ({
		
	// 	SNO: index+1,
	// 	id: blog._id,
	// 	Modulue: `hyffgfg`, // Assuming "Name" is the property name for the chapter name
	// 	Chapter: `jkjhjhghfgfv`, // Assuming "subjectTag" is the property name for the subject tag
	// 	Question: blog.Question, // Assuming "totalqustions" is the property name for the total questions
	// 	Diffculty: ``,
	// 	Reference:``,
	// 	ACTION: renderActionButtons(blog),
	// }));
	if (Object.keys(selectedMcqList)?.length) {
		// If selectedMcqList has keys
		console.log("Data");
	
		// Create an array with a single object containing specific properties
		var rows = [{
			SNO: 1,
			id: selectedMcqList?._id,
			Modulue: 1, // Assuming "Name" is the property name for the chapter name
			Chapter: selectedMcqList?.Chapters, // Assuming "subjectTag" is the property name for the subject tag
			Question: selectedMcqList?.Question, // Assuming "totalquestions" is the property name for the total questions
			Difficulty: selectedMcqList?.Difficulty,
			Reference: selectedMcqList?.Reference,
			QuestionType: selectedMcqList?.selectquestiontype,
			ACTION: renderActionButtons(selectedMcqList?._id),
		}];
	} else {
		// If selectedMcqList has no keys, initialize an empty array
		var rows = [];
	}
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
															{subject.name}
														</option>
													</>
												))}
											</select>
											<p>Select Subject</p>
										</div>

										<div className="col-6">
										<select
											type="text"
											placeholder="...Select Chapter"
											className="form-control"
											onChange={handleChapterTagTypeSelection}
										>
											<option>...select Chapter...</option>
											{allsubjectsData?.map((subject,index) => (
										subject?.chapter?.map((chapter) => (
											<>
															<option
																className="name_item"
																key={chapter._id} // Use a unique key for each option
																data-value={chapter.Name}
																value={chapter._id}
															>
																{chapter.Name }
															</option>
															</>
											))))}
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
											<select
											type="text"
											placeholder="...Select Reference"
											className="form-control"
											onChange={handleReferenceTypeSelection}
										>
											<option>...select Chapter...</option>
											{allsubjectsData?.map((subject,index) => (
										subject?.chapter?.map((chapter) => (
											chapter?.MCQ?.map((each)=>(
											<>
															<option
																className="name_item"
																key={each._id} // Use a unique key for each option
																data-value={each.Reference}
																value={each._id}
															>
																{each.Reference }
															</option>
															</>
											))))))}
										</select>
											<label>Reference</label>
										</div>

										<div className="col-6">
											<select
											type="text"
											placeholder="...Select Question"
											className="form-control"
											onChange={handleQuestionTypeSelection}
										>
											<option>...select Question...</option>
											{allsubjectsData?.map((subject,index) => (
										subject?.chapter?.map((chapter) => (
											chapter?.MCQ?.map((each)=>(
											<>
															<option
																className="name_item"
																key={each._id} // Use a unique key for each option
																data-value={each.Question}
																value={each._id}
															>
																{each.Question }
															</option>
															</>
											))))))}
										</select>
											<p>Question type</p>
										</div>
										<div className="row">
											<div className="col-5 d-lg-block d-none"></div>
											<div className="col-lg-1 col-md-6 col-4 mx-2 text-center">
												<button
													className=" my-2 btn btn-light"
													style={{
														backgroundColor: "black",
														color: "white",
														
													}}
													onClick={handleGoButtonClick}
												>
													Search
												</button>
											</div>
											<div className="col-lg-2 col-md-6 col-4 mx-2 text-center">
												<button
													className="my-2 btn btn-light"
													style={{
														backgroundColor: "white",
														color: "red",
													}}
													onClick={handleClearFilterButtonClick}
												>
													Clear Filter
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
			  )}
						
					</div>
					
				</div>
			</div>
		</div>
	);
};
export default McqView;
