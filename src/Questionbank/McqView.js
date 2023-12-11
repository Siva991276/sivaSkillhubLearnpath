import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Pagination } from "antd";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
	const [selectedMcqList, setSelectedMcqList] = useState([]);
		const handleGoButtonClick = () => {
			const filteredMCQs = allsubjectsData
			  .filter((subject) => subject?._id === selectedSubjectId)
			  .flatMap((subject) =>
				subject.chapter.find((chapter) => chapter?._id === selectedChapterId)?.MCQ || []
			  )
			  .find((mcq) => mcq?._id === selectedQuestionId);
		  
			console.log(filteredMCQs);
			setSelectedMcqList(filteredMCQs)
		  };
		
		  const handleClearFilterButtonClick = () => {
			setSelectedMcqList('');
			
		  };
	const gotoviewmcq =(McqId)=>{
		navigate("/ParticularMcaView",{state :{subjectId:selectedSubjectId,chapterId:selectedChapterId,McqId:McqId}})
	}
	const gotoUpdatemcq =(McqId)=>{
		navigate("/Mcqupdate",{state :{subjectId:selectedSubjectId,chapterId:selectedChapterId,McqId:McqId}})
	}	
	const GotohandleDeleteClick = (McqId) => {   
		// const token = Cookies.get("token");
			const api = `http://localhost:4010/v1/deleteMCQ/${selectedSubjectId}/${selectedChapterId}/${McqId}`;
			try{
				const response=axios.delete(api,)
			//   console.log("Password updated successfully:", response.data);
					toast('Deleted Institute successfully', {
					position: "top-right",
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
																data-value={chapter.ChapterTag}
																value={chapter._id}
															>
																{chapter.ChapterTag }
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
											<label>Question</label>
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
													onClick={handleGoButtonClick}
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
													onClick={handleClearFilterButtonClick}
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
											
											<div style={{ width: "1200px" }}>
											<table className="table table-bordered">
								<thead>
									<tr>
										{/* <th
											style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }}
											className="text-center"
										>
											SNO
										</th> */}
										<th style={{ fontSize: "14px" , backgroundColor:"#333", color:"#fff"}} className="text-center">
											ID
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											Modulue
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											Chapter
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											Question
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											Diffculty
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											Reference
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											QuestionType
										</th>
										<th style={{ fontSize: "14px", backgroundColor:"#333", color:"#fff" }} className="text-center">
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{/* {selectedMcqList?.map((each)=>( */}
										<>
										<tr>
											{/* <td className="text-center">{1}</td> */}
											<td className="text-center">{selectedMcqList?._id}</td>
											<td className="text-center">{selectedMcqList?.module}</td>
											<td className="text-center">{selectedMcqList?.Chapters}</td>
											<td className="text-center">{selectedMcqList?.Question}</td>
											<td className="text-center">{selectedMcqList?.Difficulty}</td>
											<td className="text-center">{selectedMcqList?.Reference}</td>
											<td className="text-center">{selectedMcqList?.selectquestiontype}</td>
											
											{selectedMcqList?.Question?.length >=1 ? (
											<td>
												<>
											<i class="fa-solid fa-file file"
											onClick={()=>gotoviewmcq(selectedMcqList?._id)}										
											></i>										
											<i class=" fas fa-solid fa-light fa-eye"></i>
											<i  class="fa-solid fa-pencil pencile"	
											onClick={()=>gotoUpdatemcq(selectedMcqList?._id)}								
											></i>
											<i class="fa-solid fa-trash delete"
											onClick={()=>GotohandleDeleteClick(selectedMcqList?._id)}></i>
											</>																		
											
																						
															</td>
															) :(<td>
																
															</td>)}
															
														</tr>
														</>
													 {/* ))} */}
												</tbody>
											</table>
											</div>
										</div>
									</div>
								</div>
							</div>
							Questiontype
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
	);
};
export default McqView;
