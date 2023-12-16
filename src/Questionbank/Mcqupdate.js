import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";
import JoditEditor from "jodit-react";
import { Audio } from 'react-loader-spinner';

const Mcqupdate = () => {
	let navigate = useNavigate();
	const editor = useRef(null);
	const { state } = useLocation();
	const { subjectId, chapterId, McqId } = state || {};
	const [mcqListData, setMcqListData] = useState({});
	const [mcqLisChangedData, setMcqListChangedData] = useState({});
	const [worksheetLoading, setWorksheetLoading] = useState(true);
	// Function to handle input change during chapter edit
	const handleEditInputChange = (value, name) => {
		// console.log(e.target?.value);
		console.log(value, name);
		setMcqListChangedData({
			...mcqLisChangedData,
			[name]: value,
		});
	};
	// console.log(mcqLisChangedData)
	const handleSelectQuestionType = (event) =>
		setSelectQuestionType(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
	const fetchMcqListData = async () => {
		const api = `http://localhost:4010/v1/getMCQById/${subjectId}/${chapterId}/${McqId}`;
		//http://localhost:4010/v1/getMCQs/6571ad89cf0acc567c548296/6571ae96cf0acc567c54829c";
		try {
			const response = await axios.get(api, {});
			const data = response.data;
			setMcqListData(response.data.mcq);
			setMcqListChangedData(response.data.mcq);
			console.log(response.data.mcq);
			setWorksheetLoading(false);
		} catch (error) {
			console.error("Error fetch blogs:", error);
			setWorksheetLoading(false);
		}
	};

	useEffect(() => {
		fetchMcqListData();
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
	const [allsubjectsData, setAllsubjectsData] = useState([]);
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

	const onSubmitUpdateForm = async () => {
		// const token = Cookies.get("token");
		console.log(mcqLisChangedData);
		try {
			const response = await axios.put(
				`http://localhost:4010/v1/updateMCQ/${subjectId}/${chapterId}/${McqId}`,
				mcqLisChangedData
			);
			//   headers: {
			// 	token: token,
			//   },
			setallquestionData(response.data);
			console.log(response.data);
			if (response.status === 200) {
				toast.success("Question Updated Successfully", {
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
			}
		} catch (error) {
			console.log(error.response.data);
			toast.error("Question already added");
		}
	};
	const [selectedSubjectId, setSelectedSubjectId] = useState([]);
	const handleSubjectTagTypeSelection = (event) => {
		setSelectedSubject(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
		// setFormData({ ...mcqLisChangedData, name: e.target.value })
		setSelectedSubjectId(
			event.target.options[event.target.selectedIndex].getAttribute("value")
		);
	};
	const [selectedChapterId, setSelectedChapterId] = useState([]);
	const handleChapterTagTypeSelection = (event) => {
		setSelectedChapter(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			)
		);
		setSelectedChapterId(
			event.target.options[event.target.selectedIndex].getAttribute("value")
		);
	};

	const handleCorrectAnswerSelection = (event) => {
		handleEditInputChange(
			event.target.options[event.target.selectedIndex].getAttribute(
				"data-value"
			),
			"correctAnswer"
		);
	};

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
						}`}
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
						<form>
							<div className=" ">
								<i
									className="fa-solid fa-bars bars d-lg-block d-none"
									onClick={toggleSidebar}
								></i>
								<div class="card-item p-3 mt-2">
									<h4 className="text-center">Update Text QUESTION</h4>
									<label>
										<b>Question Type * </b>
									</label>
									<input
										type="text"
										placeholder="...select Question Type..."
										className="form-control"
										value={
											selectQuestionType || mcqListData?.selectquestiontype
										}
										disabled
									/>
									<div className="row">
										<div className="col-md-6">
											<label style={{ fontSize: "15px" }}>
												<b>Subjects *</b>
											</label>
											<input
												type="text"
												style={{ padding: "5px" }}
												placeholder="...Select Subject"
												className="form-control"
												value={selectedSubject || mcqListData?.Subjects}
												disabled
											/>
										</div>
										<div className="col-md-6">
											<label style={{ fontSize: "15px" }}>
												<b>Chapter *</b>
											</label>
											<input
												type="text"
												placeholder="...Select Chapter"
												className="form-control"
												value={selectedChapter || mcqListData?.Chapters}
												disabled
											/>
										</div>
									</div>

									<div className="my-3">
										<p className="m-0">
											<b>Difficulty *</b>
										</p>
										<div className="row">
											<div className="d-flex flex-row col-4">
												<div>
													<input
														type="radio"
														name="Difficulty"
														value="Difficult"
														onChange={(e) =>
															handleEditInputChange(
																e.target.value,
																"Difficulty"
															)
														}
														checked={
															mcqLisChangedData?.Difficulty === "Difficult" ||
															""
														}
													/>
												</div>
												<div className="px-2">Difficult</div>
											</div>
											<div className="d-flex flex-row col-4">
												<div>
													<input
														type="radio"
														name="Difficulty"
														value="Easy"
														onChange={(e) =>
															handleEditInputChange(
																e.target.value,
																"Difficulty"
															)
														}
														checked={
															mcqLisChangedData?.Difficulty === "Easy" || ""
														}
													/>
												</div>
												<div className="mx-2">Easy</div>
											</div>
											<div className="d-flex flex-row col-4">
												<div>
													<input
														type="radio"
														name="Difficulty"
														value="Medium"
														onChange={(e) =>
															handleEditInputChange(
																e.target.value,
																"Difficulty"
															)
														}
														checked={
															mcqLisChangedData?.Difficulty === "Medium" || ""
														}
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
										name="Reference"
										placeholder="Reference"
										className="form-control "
										onChange={(e) =>
											handleEditInputChange(e.target.value, "Reference")
										}
										value={mcqLisChangedData?.Reference || ""}
									/>
									{/* <option>Reference</option> */}

									<div className="description">
										<h6 className="my-3">
											<b>Question</b>
											<span className="bcolor">*</span>
										</h6>
										<JoditEditor
											ref={editor}
											name="Question"
											value={mcqLisChangedData?.Question || ""}
											tabIndex={1} // tabIndex of textarea
											onBlur={(newContent) =>
												handleEditInputChange(newContent, "Question")
											} // preferred to use only this option to update the content for performance reasons
											// onChange={handleEditInputChange()}
										/>
										<label htmlFor="myfile">
											<h6 className="my-3">Description Image</h6>
										</label>
										<input type="file" id="myfile" name="myfile" className="form-control" />
									</div>
									<div className="my-2">
										<span>
											<b>Question Image</b>
										</span>
									</div>
									<div className="row text-center">
										<div className="col-12 col-md-6 mt-2">
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

										<div className="col-12 col-md-6 mt-2">
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
									</div>

									{/* option 1 */}

									<div className="description">
										<h6 className="my-3">
											<b>Option 1</b>
											<span className="bcolor">*</span>
										</h6>
										<JoditEditor
											ref={editor}
											name="Option1"
											value={mcqLisChangedData?.Option1 || ""}
											tabIndex={1} // tabIndex of textarea
											onBlur={(newContent) =>
												handleEditInputChange(newContent, "Option1")
											} // preferred to use only this option to update the content for performance reasons
										/>
									</div>
									<div className="my-1">
										<p>Option1 Image</p>
									</div>
									<div className="row text-center">
										<div className="col-12 col-md-4 ">
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
										</div>

										<div className="col-12 col-md-4  mt-1">
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
										<div className="col-12 col-md-4 mt-1">
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
									</div>

									<div className="description">
										<h6 className="my-3">
											<b>Option 2</b>
											<span className="bcolor">*</span>
										</h6>
										<JoditEditor
											ref={editor}
											name="Option2"
											value={mcqLisChangedData?.Option2 || ""}
											tabIndex={1} // tabIndex of textarea
											onBlur={(newContent) =>
												handleEditInputChange(newContent, "Option2")
											} // preferred to use only this option to update the content for performance reasons
										/>
									</div>
									<div className="my-1">
										<p>Option2 Image</p>
									</div>
									<div className="row text-center">
										<div className="col-12 col-md-4 ">
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
										</div>

										<div className="col-12 col-md-4  my-1">
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
										<div className="col-12 col-md-4 mt-1">
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
									</div>

									<div className="description">
										<h6 className="my-3">
											<b>Option 3</b>
											<span className="bcolor">*</span>
										</h6>
										<JoditEditor
											ref={editor}
											name="Option3"
											value={mcqLisChangedData?.Option3 || ""}
											tabIndex={1} // tabIndex of textarea
											onBlur={(newContent) =>
												handleEditInputChange(newContent, "Option3")
											} // preferred to use only this option to update the content for performance reasons
										/>
									</div>
									<div className="my-2">
										<p>Option3 Image</p>
									</div>
									<div className="row text-center">
										<div className="col-12 col-md-4 ">
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
										</div>

										<div className="col-12 col-md-4  my-1">
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
										<div className="col-12 col-md-4 mt-1">
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
									</div>

									<div>
										<label style={{ fontSize: "15px" }}>Correct Answer *</label>
										<select
											type="text"
											name="correctAnswer"
											placeholder="....Select Correct Answer ..."
											className="form-control"
											onChange={handleCorrectAnswerSelection}
										>
											<option>{mcqLisChangedData?.correctAnswer || ""}</option>
											<option data-value="option1">option1</option>
											<option data-value="option2">option2</option>
											<option data-value="option3">option3</option>
											<option data-value="All of the Above">
												All of the Above
											</option>
										</select>
									</div>

									<label style={{ fontSize: "15px" }} className="my-3">
										Explanation *
									</label>

									<div className="text-center mb-3">
										<button
											type="button"
											className="btn btn-light"
											style={{
												width: "fit-content",
												backgroundColor: "#8c018a",
												color: "white",
												
											}}
											onClick={() => onSubmitUpdateForm(mcqListData?._id)}
										>
											Update
										</button>
										<button className="btn btn-light mx-1"
                                            onClick={()=>navigate("/McqView",{state :{subjectId:subjectId,chapterId:chapterId,McqId:McqId}})}	><i
                                            class="bx bx-log-out"
                                        ></i>Back</button>
									</div>
								</div>
							</div>
						</form>
			  )}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Mcqupdate;
