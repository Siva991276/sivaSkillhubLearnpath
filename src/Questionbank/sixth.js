import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";


const  Sixthquestion = () => {
	let navigate = useNavigate();
    const [selectedOption,setselectedOption]=useState("");

   const handleSelectChange= (event)=>{
    const selectedValue =event.target.value;
    setselectedOption(selectedValue);

    if(selectedValue ==='CreateQuestion'){
        navigate('/CreateQuestion');
    }else if(selectedValue ==='secondquestion'){
        navigate('/secondquestion');
    }
    else if(selectedValue ==='thitdquestion'){
        navigate('/thitdquestion');
    }
    else if(selectedValue ==='fourthquestion'){
        navigate('/fourthquestion');
    }
    else if(selectedValue ==='fifth'){
        navigate('/fifth');
    }
    else if(selectedValue ==='sixth'){
        navigate('/sixth');
    }
    else if(selectedValue ==='seventh'){
        navigate('/seventh');
    }
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
	// const onSubmitForm = (e) => {
	// 	e.preventDefault();
	// 	const token = Cookies.get("token");  
	// 	if (instituteName && headName && primaryemail && secondaryEmail && primaryContactNumber && password &&secondaryContactNumber && enterBatch && batchYear && cityName && instituteType && selectAccessPlans &&instituteCode !== "") {
	// 	  axios
	// 		.post(${apiList.addInstitute}, userData, {
	// 		  headers: {
	// 			token: token,
	// 		  },
	// 		})
	// 		.then((response) => {
	// 		  if (response.status === 200) {
	// 			toast("Institute Added", {
	// 			  position: "top-right",
	// 			  autoClose: 1000,
	// 			  hideProgressBar: false,
	// 			  closeOnClick: true,
	// 			  pauseOnHover: true,
	// 			  draggable: true,
	// 			  progress: undefined,
	// 			  theme: "colored",
	// 			  className: "custom-toast-custom",
	// 			});
	// 			setInstituteName("");
	// 			setHeadName("");
	// 			setPrimaryemail("");
	// 			setPrimaryContactNumber("");
	// 			setSecondaryEmail("");
	// 			setSecondaryContactNumber("");
	// 			setBatchYear("");
	// 			setEnterBatch("");
	// 			  setpassword("");
	// 			  setCityName("");
	// 			setInstituteCode("");
	// 			setSelectAccessPlans("");
	// 			setInstituteType("");
	// 		  }
	// 		})
	// 		.catch((error) => {
	// 		  console.log(error.response.data);
	// 		  toast.error("Institute already added");
	// 		});
	
	// 		} else {
	// 	  toast.warning("Enter Required details");
	// 	}
	//   };
	return (
		<div>
			<div className="container ">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-md-2 sectioncard121">
							<Sidebar />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 10 : 12} col-lg-${
							isOpen ? 10 : 12
						}`}
					>
						<div className=" d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
							<div class="card-item p-3 mt-2">
								<h4 className="text-center">Writing</h4>
								<label>
									<b>Select Question Type * </b>
								</label>
								<select
									value={selectedOption}
									onChange={handleSelectChange}
									type="text"
									placeholder="...select Question Type..."
									className="form-control"
								>
									<option>...Select Question Type....</option>
									<option value="CreateQuestion">Single Correct Option</option>
									<option value="secondquestion">Multi Correct Option</option>
									<option value="thitdquestion">
										Multi Correct Option With Partial Marketing
									</option>
									<option value="fourthquestion">Fill in the Blanks</option>
									<option value="fifth">True Or False</option>
									<option value="sixth">Writing</option>
									<option value="seventh">Speaking</option>
								</select>
								<span style={{ fontSize: "13px" }}>Option Question</span>
								<div className="my-2">
									<p style={{ fontSize: "14px", color: "orange" }}>
										<span style={{ color: "black", fontSize: "16px" }}>
											Note:
										</span>
										<b>writing</b> Will have a minimum of 3
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
											type="text"
											placeholder="....Select Subject ..."
											className="form-control"
										>
											<option>...select Subject..</option>
											<option>Front end</option>
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
										>
											<option>...select Chapter...</option>
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
												<input type="radio" />
											</div>
											<div className="px-2">Diffcult</div>
										</div>
										<div className="d-flex flex-row col-2">
											<div>
												<input type="radio" />
											</div>
											<div className="mx-2">Easy</div>
										</div>

										<div className="d-flex flex-row col-2">
											<div>
												<input type="radio" />
											</div>
											<div className="mx-2">Medium</div>
										</div>
									</div>
								</div>

								<label>
									<b>Reference *</b>
								</label>
								<select
									input
									type="text"
									placeholder="Reference"
									className="form-control "
								>
									<option>Reference</option>
								</select>

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

								<textarea className="mx-1 form-control p-2" rows={4} />
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

								<textarea className="form-control mx-1 p-2" rows={4} />
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

								<textarea className="form-control mx-1 p-2" rows={4} />
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

								<textarea className="form-control mx-1 p-2" rows={4} />
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
								>
									<option>...select Correct Answer..</option>
								</select>
                                    </div>
								

								<label style={{ fontSize: "15px" }} className="my-3">
									Explanation *
								</label>

								<div>
									<p>Option 4</p>
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

								<textarea className="form-control mx-1 p-2" rows={4} />
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
									<p>Explanation Image</p>
								</div>

								<div className="my-1">
									<button
										style={{
                                            width:"fit-content",
											backgroundColor: "white",
											color: "black",
											border: "1px solid black",
                                            padding:"7px 20px",
                                            borderRadius:"6px"
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
                                            padding:"7px 20px",
                                            borderRadius:"6px"
										}}
									>
										Insert Image
									</button>
								</div>

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
										
									>
										Create
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Sixthquestion;