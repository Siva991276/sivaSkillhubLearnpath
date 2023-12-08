import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from 'axios'


const CreateQuestion = () => {
    let navigate = useNavigate();
	const handleSelectQuestionType = (event) => {
		setSelectQuestionType(
		  event.target.options[event.target.selectedIndex].getAttribute(
			"data-value"
		  )
		);
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
	const [allsubjectsData, setAllsubjectsData] = useState([]);
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
	useEffect(() => {
		fetchsubjectsData();
	}, []);
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
	
	const onSubmitForm = async (e) => {
		e.preventDefault();
		// const token = Cookies.get("token");  
		if (selectQuestionType && selectedSubject && selectedChapter && selectedDifficulty && reference && question && option1 && option2 && option3 && correctAnswer !== "") {
			try {
				const QuestionData ={
					selectquestiontype:selectQuestionType,
					Subjects:selectedSubject,
					Chapters:selectedChapter,
					Difficulty:selectedDifficulty,
					Reference:reference,
					Question:question,
					// questionImage:'',
					Option1:option1,
					Option2:option2,
					Option3:option3,
					correctAnswer:correctAnswer
					// Explanation:'',
				}
				console.log(QuestionData)
		 const response= await axios.post(`http://localhost:4010/v1/addMCQ/${selectedSubjectId}/${selectedChapterId}`, QuestionData)
			//   headers: {
			// 	token: token,
			//   },
				setallquestionData(response.data);
				console.log(response.data);
			  if (response.status === 200) {
				toast("Question Added", {
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
				
			  }

			}
			catch(error){
			  console.log(error.response.data);
			  toast.error("Question already added");
			}
	
			} else {
		  toast.warning("Enter Required details");
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
	};
	
	const handleDifficultyChange = (event) => {
		setSelectedDifficulty(event.target.value);
	  };
	const handleCorrectAnswerSelection = (event) => {
	setCorrectAnswer(
		event.target.options[event.target.selectedIndex].getAttribute(
		"data-value"
		)
	);
	};
	  
	return (
		<div>
			<div className="container ">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-md-2 sectioncard121">
							<Sidebar />
							<ToastContainer/>
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 10 : 12} col-lg-${
							isOpen ? 10 : 12
						}`}
					>
						<form>
						<div className=" d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
							<div class="card-item p-3 mt-2">
								<h4 className="text-center">CREATE QUESTIONS</h4>
								<label>
									<b>Select Question Type * </b>
								</label>
								<select
									onChange={handleSelectQuestionType}
									type="text"
									placeholder="...select Question Type..."
									className="form-control"
								>
									<option >...Select Question Type....</option>
									<option data-value="Single Correct Option">Single Correct Option</option>
									<option data-value="Multi Correct Option">Multi Correct Option</option>
									<option data-value="Multi Correct Option With Partial Marketing">
										Multi Correct Option With Partial Marketing
									</option>
									<option data-value="Fill in the Blanks">Fill in the Blanks</option>
									<option data-value="True Or False">True Or False</option>
									<option data-value="Writing">Writing</option>
									<option data-value="Speaking">Speaking</option>
								</select>
								<span style={{ fontSize: "13px" }}>Option Question</span>
								<div className="my-2">
									<p style={{ fontSize: "14px", color: "orange" }}>
										<span style={{ color: "black", fontSize: "16px" }}>
											Note:
										</span>
										<b> {selectQuestionType}</b> Will have a minimum of 3
										options and a maximum of 5 options. One of the option will
										be the correct answer for this type of question.{" "}
									</p>
								</div>
								<div className="row">
		<div className="col-md-6">
			<label style={{ fontSize: "15px" }}>
				<b>Subjects *</b>
			</label>
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
		</div>
									<div className="col-md-6">
										<label style={{ fontSize: "15px" }}>
											<b>Chapter *</b>
										</label>
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
									</div>
								</div>

								<div className="my-3">
									<p className="m-0">
										<b>Difficulty *</b>
									</p>
									<div className="row">
										<div className="d-flex flex-row col-2">
										<div>
											<input
											type="radio"
											name="difficulty"
											value="Difficult"
											onChange={handleDifficultyChange}
											checked={selectedDifficulty === "Difficult"}
											/>
										</div>
										<div className="px-2">Difficult</div>
										</div>
										<div className="d-flex flex-row col-2">
										<div>
											<input
											type="radio"
											name="difficulty"
											value="Easy"
											onChange={handleDifficultyChange}
											checked={selectedDifficulty === "Easy"}
											/>
										</div>
										<div className="mx-2">Easy</div>
										</div>
										<div className="d-flex flex-row col-2">
										<div>
											<input
											type="radio"
											name="difficulty"
											value="Medium"
											onChange={handleDifficultyChange}
											checked={selectedDifficulty === "Medium"}
											/>
										</div>
										<div className="mx-2">Medium</div>
										</div>
									</div>
									
									</div>


								<label>
									<b>Reference *</b>
								</label>
								<input
									type="text"
									placeholder="Reference"
									className="form-control "
									onChange={(e)=>setReferencce(e.target.value)}
								/>
									{/* <option>Reference</option> */}

								<p className="my-2">
									<b>Question*</b>
								</p>
								<div className="row card mx-1">
									<div className="d-flex flex-row p-2">
										<div className="col-1 ">Edit</div>
										<div className="col-1 ">view</div>

										<div className="col-1">Insert</div>
										<div className="col-1">Format</div>
										<div className="col-1">Table</div>
									</div>
								</div>
								<div className="card mx-1">
									<div className="d-flex flex-row  p-2">
										<div className="col-1 ">
											<i class="fa-solid fa-share"></i>
										</div>
										<div className="col-2  ">paragraph</div>

										<div className="col-1">
											<i class="fa-sharp fa-solid fa-b"></i>
										</div>
										<div className="col-1">
											<i class="fa-sharp fa-regular fa-i"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-sliders"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-sliders"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-list"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-list"></i>
										</div>
										<div className="col-1">
											<i class="fa-regular fa-circle-question"></i>
										</div>
									</div>
								</div>

								<textarea onChange={(e)=>setQuestion(e.target.value)} className="mx-1 form-control p-2" rows={4} />
								<div className="card p-2 mx-1">
									<div className="row">
										<div className="col-1">
											<span>p</span>
										</div>
										<div className="col-1"></div>
										<div className="col-10 text-end">
											<span>0 words powderd by tinny</span>
										</div>
									</div>
								</div>

								<div className="my-2">
									<span>
										<b>Question Image</b>
									</span>
								</div>

								<div className="my-1">
									<button
										style={{
											backgroundColor: "white",
											width: "fit-content",
											padding: "7px 20px",
											borderRadius: "6px",
											color: "black",
											border: "1px solid black",
										}}
									>
										Choose Image
									</button>
								</div>

								<div className="my-3">
									<button
										style={{
											width: "fit-content",
											backgroundColor: "#333",
											color: "white",
											border: "none",
											padding: "7px 20px",
											borderRadius: "6px",
										}}
									>
										Insert Image
									</button>
								</div>

								{/* option 1 */}

								<div className="my-2">
									<span>
										<b>Option 1</b>
									</span>
								</div>
								<div className="row card mx-1 ">
									<div className="d-flex flex-row p-2">
										<div className="col-1">Edit</div>
										<div className="col-1 ">view</div>

										<div className="col-1">Insert</div>
										<div className="col-1">Format</div>
										<div className="col-1">Table</div>
									</div>
								</div>

								<div className="card mx-1">
									<div className="d-flex flex-row p-2">
										<div className="col-1 ">
											<i class="fa-solid fa-share"></i>
										</div>
										<div className="col-2  ">paragraph</div>

										<div className="col-1">
											<i class="fa-sharp fa-solid fa-b"></i>
										</div>
										<div className="col-1">
											<i class="fa-sharp fa-regular fa-i"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-sliders"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-sliders"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-list"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-list"></i>
										</div>
										<div className="col-1">
											<i class="fa-regular fa-circle-question"></i>
										</div>
									</div>
								</div>

								<textarea onChange={(e)=>setOption1(e.target.value)} className="form-control mx-1 p-2" rows={4} />
								<div className="card mx-1 p-2">
									<div className="row">
										<div className="col-1">
											<span>p</span>
										</div>
										<div className="col-1"></div>
										<div className="col-10 text-end">
											<span>0 words powderd by tinny</span>
										</div>
									</div>
								</div>

								<div className="my-1">
									<p>Option1 Image</p>
								</div>
								<div className="row">
									<div className="d-flex flex-row ">
										<div className="my-1">
											<button
												style={{
													width: "fit-content",
													backgroundColor: "white",
													color: "black",
													border: "1px solid black",
													padding: "7px 20px ",
													borderRadius: "6px",
												}}
											>
												Choose Image
											</button>
										</div>
										<div className="col-4"></div>

										<div className="col-4 text-end">
											<button
												style={{
													backgroundColor: "red",
													color: "white",
													border: "1px solid red",
													padding: "7px 20px",
													borderRadius: "6px",
												}}
											>
												Delete option
											</button>
										</div>
									</div>
								</div>

								<div className="my-3">
									<button
										style={{
											width: "fit-content",
											backgroundColor: "#333",
											color: "white",
											border: "none",
											borderRadius: "6px",
											padding: "7px 20px",
										}}
									>
										Insert Image
									</button>
								</div>

								{/* option1 */}

								{/* option2 */}

								<div className="my-2">
									<span>
										<b>Option 2</b>
									</span>
								</div>
								<div className="row card mx-1 ">
									<div className="d-flex flex-row p-2">
										<div className="col-1">Edit</div>
										<div className="col-1 ">view</div>

										<div className="col-1">Insert</div>
										<div className="col-1">Format</div>
										<div className="col-1">Table</div>
									</div>
								</div>

								<div className="card mx-1">
									<div className="d-flex flex-row p-2">
										<div className="col-1 ">
											<i class="fa-solid fa-share"></i>
										</div>
										<div className="col-2  ">paragraph</div>

										<div className="col-1">
											<i class="fa-sharp fa-solid fa-b"></i>
										</div>
										<div className="col-1">
											<i class="fa-sharp fa-regular fa-i"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-sliders"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-sliders"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-list"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-list"></i>
										</div>
										<div className="col-1">
											<i class="fa-regular fa-circle-question"></i>
										</div>
									</div>
								</div>

								<textarea onChange={(e)=>setOption2(e.target.value)} className="form-control mx-1 p-2" rows={4} />
								<div className="card mx-1 p-2">
									<div className="row">
										<div className="col-1">
											<span>p</span>
										</div>
										<div className="col-1"></div>
										<div className="col-10 text-end">
											<span>0 words powderd by tinny</span>
										</div>
									</div>
								</div>

								<div className="my-1">
									<p>Option2 Image</p>
								</div>
								<div className="row">
									<div className="d-flex flex-row ">
										<div className="my-1">
											<button
												style={{
													width: "fit-content",
													backgroundColor: "white",
													color: "black",
													border: "1px solid black",
													borderRadius: "6px",
													padding: "7px 20px",
												}}
											>
												Choose Image
											</button>
										</div>
										<div className="col-4"></div>

										<div className="col-4 text-end">
											<button
												style={{
													backgroundColor: "red",
													color: "white",
													border: "1px solid red",
													width: "fit-content",
													padding: "7px 20px",
													borderRadius: "6px",
												}}
											>
												Delete option
											</button>
										</div>
									</div>
								</div>

								<div className="my-3">
									<button
										style={{
											width: "fit-content",
											backgroundColor: "#333",
											color: "white",
											border: "none",
											padding: "7px 20px",
											borderRadius: "6px",
										}}
									>
										Insert Image
									</button>
								</div>

								{/* option2 */}

								{/* option 3 */}

								<div>
									<p>
										<b>Option 3</b>
									</p>
								</div>
								<div className="row card mx-1 ">
									<div className="d-flex flex-row p-2">
										<div className="col-1">Edit</div>
										<div className="col-1 ">view</div>

										<div className="col-1">Insert</div>
										<div className="col-1">Format</div>
										<div className="col-1">Table</div>
									</div>
								</div>

								<div className="card mx-1">
									<div className="d-flex flex-row p-2">
										<div className="col-1 ">
											<i class="fa-solid fa-share"></i>
										</div>
										<div className="col-2  ">paragraph</div>

										<div className="col-1">
											<i class="fa-sharp fa-solid fa-b"></i>
										</div>
										<div className="col-1">
											<i class="fa-sharp fa-regular fa-i"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-sliders"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-sliders"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-list"></i>
										</div>
										<div className="col-1">
											<i class="fa-solid fa-list"></i>
										</div>
										<div className="col-1">
											<i class="fa-regular fa-circle-question"></i>
										</div>
									</div>
								</div>

								<textarea onChange={(e)=>setOption3(e.target.value)} className="form-control mx-1 p-2" rows={4} />
								<div className="card mx-1 p-2">
									<div className="row">
										<div className="col-1">
											<span>p</span>
										</div>
										<div className="col-1"></div>
										<div className="col-10 text-end">
											<span>0 words powderd by tinny</span>
										</div>
									</div>
								</div>

								<div className="my-1">
									<p>Option3 Image</p>
								</div>
								<div className="row">
									<div className="d-flex flex-row ">
										<div className="my-1">
											<button
												style={{
													width: "fit-content",
													backgroundColor: "white",
													color: "black",
													border: "1px solid black",
													padding: "7px 20px",
													borderRadius: "6px",
												}}
											>
												Choose Image
											</button>
										</div>
										<div className="col-2"></div>

										<div className="col-4 text-end w-50">
											<button
												style={{
													width: "fit-content",
													padding: "7px 20px",
													borderRadius: "6px",
													backgroundColor: "red",
													color: "white",
													border: "1px solid red",
												}}
											>
												Delete option
											</button>
										</div>
									</div>
								</div>

								<div className="my-3">
									<button
										style={{
											width: "fit-content",
											padding: "7px 20px",
											borderRadius: "6px",
											backgroundColor: "#333",
											color: "white",
											border: "none",
										}}
									>
										Insert Image
									</button>
								</div>

								{/* option 3 */}
                                        <div className="text-center">
                                        <button
									style={{
										backgroundColor: "#fff",
										color: "#8c018a",
                                        padding:"7px 20px",
                                        borderRadius:"6px",
                                        width:"fit-content",
										border: "1px solid #8c018a",
									}}
								>
									 Add Option
								</button>
                                        </div>
								
                                    <div>
                                    <label style={{ fontSize: "15px" }}>Correct Answer *</label>
								<select
									type="text"
									placeholder="....Select Correct Answer ..."
									className="form-control"
									onChange={handleCorrectAnswerSelection}
								>
									<option>...select Correct Answer..</option>
									<option data-value="option1">option1</option>
									<option data-value="option2">option2</option>
									<option data-value="option3">option3</option>
									<option data-value="All of the Above">All of the Above</option>
								</select>
                                    </div>
								

								<label style={{ fontSize: "15px" }} className="my-3">
									Explanation *
								</label>
								
								<div className="text-center mb-3">
									<button
										style={{
											width: "fit-content",
											backgroundColor: "#8c018a",
											color: "white",
											border: "none",
                                            padding:"7px 20px",
                                            borderRadius:"6px"
										}}
										onClick={(e)=>onSubmitForm(e)}
									>
										Create
									</button>
								</div>
							</div>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CreateQuestion;