import React from "react";
import { useState,useEffect,useRef } from "react";
import Sidebar from "../Sidebar";
import "./parag.css";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";


const ParagEdit = () => {
	const editor = useRef(null);
	const { state } = useLocation();
	const [isOpen, setIsOpen] = useState(true);
	const { subjectId, chapterId, McqId } = state || {};
	const [mcqListData, setMcqListData] = useState({});
	const [mcqLisChangedData, setMcqListChangedData] = useState({});
	console.log(mcqListData)
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		menuBtnChange();
	};
	const handleEditInputChange = (value, name) => {
		// console.log(e.target?.value);
		console.log(value, name);
		setMcqListChangedData({
			...mcqLisChangedData,
			[name]: value,
		});
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
	const fetchMcqListData = async () => {
		const api = `http://localhost:4010/v2/getParagMCQById/${subjectId}/${chapterId}/${McqId}`;
		try {
			const response = await axios.get(api, {});
			const data = response.data;
			setMcqListData(response.data.paragMCQ);	
			setMcqListChangedData(response.data.paragMCQ);
			console.log(response.data.paragMCQ);			
		} catch (error) {
			console.error("Error fetch blogs:", error);
			
		}
	};

	useEffect(() => {
		fetchMcqListData();
	}, []);
	const onSubmitUpdateForm = async () => {
		// const token = Cookies.get("token");
		console.log(mcqLisChangedData);
		try {
			const response = await axios.put(
				`http://localhost:4010/v2/update/${subjectId}/${chapterId}/${McqId}`,
				mcqLisChangedData
			);
			//   headers: {
			// 	token: token,
			//   },
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
	const editorKey = "Question"; // Replace this with the dynamic key or variable

	return (
		<>
			<div className="container-fluid ">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-lg-3  col-md-12 sectioncard121">
							<Sidebar />
							<ToastContainer/>
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
						<div className="">
							<i
								className="fa-solid fa-bars bars d-lg-block d-none"
								onClick={toggleSidebar}
							></i>
							<div class="card_item1 p-3">
								<h5>
									<b>Update Paragraph</b>
								</h5>
								<form>
									<div className="paragSubject">
										<label>
											<b>
												Subjects <span>*</span>
											</b>
										</label>
										<input 
										className="form-control"
										placeholder="subject"
										value={mcqListData?.Subjects}
										/>
										
										
									</div>
									<div className="paragChapter">
										<label>
											<b>Chapters *</b>
										</label>
										<input 
										className="form-control"
										placeholder="subject"
										value={mcqListData?.Chapters}
										/>
									</div>
									<p className="my-3">
										<b>Difficulty *</b>
									</p>
									<div className="row">
										<div className="d-flex flex-row col-4">
											<div>
												<input type="radio" />
											</div>
											<div className="px-2">Diffcult</div>
										</div>
										<div className="d-flex flex-row col-4">
											<div>
												<input type="radio" />
											</div>
											<div className="mx-2">Easy</div>
										</div>

										<div className="d-flex flex-row col-4">
											<div>
												<input type="radio" />
											</div>
											<div className="mx-2">Medium</div>
										</div>
									</div>
									<div className="paragRef">
										<label>
											<b>Reference *</b>
										</label>
										<input
										 className="form-control"
										 onChange={(e) =>
											handleEditInputChange(e.target.value, "Reference")
										}
										value={mcqLisChangedData?.Reference || ""}
									/>
									</div>
									<p className="my-2">
										<b>Question*</b>
									</p>
									<div>
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
									</div>
									<div className="my-1">
										<p>
											<b>Question Image</b>
										</p>
									</div>
									<div className="row">
										<div className="my-1 col-md-6 col-12 text-center">
											<button
												className="paragImg"
												style={{
													borderRadius: "7px",
													border: "1px solid black",
													backgroundColor: "transparent",
													color: "#000",
												}}
											>
												Choose Image
											</button>
										</div>
										<div className="my-3 col-md-6 col-12 text-center">
											<button
												className="paragInsert"
												style={{
													borderRadius: "7px",
													border: "none",
													backgroundColor: "#333",
													color: "#fff",
													padding: "7px 20px",
												}}
											>
												Insert Image
											</button>
										</div>
									</div>

									<div className="my-3 text-center">
										<button
											type="button"
											className="paragbtn"
											style={{
												borderRadius: "7px",
												border: "none",
												backgroundColor: "#910a8f",
												color: "#fff",
												padding: "7px 20px",
											}}
											onClick={()=>onSubmitUpdateForm(mcqLisChangedData?._id)}
										>
											Update
										</button>
								
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ParagEdit;