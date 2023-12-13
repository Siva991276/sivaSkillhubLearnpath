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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";



const Codingupdate = () => {
	const [editorData, setEditorData] = useState("");
	const [Constraints, setConstraints] = useState("");
	const [Description, setDescription] = useState("");
	const [isOpen, setIsOpen] = useState(true);
	const [blogslist, setblogslist] = useState([]);
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		menuBtnChange();
	};
	const fetchblogs = async () => {
		const api = "http://localhost:4010/v2/subjects";
		try {
			const response = await axios.get(api, {});
			setblogslist(response.data);
			console.log(response.data);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchblogs();
	}, []);
	const [selectedSubject, setSelectedSubject] = useState("");
	const [selectedChapter, setSelectedChapter] = useState("");
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

	const [formData, setFormData] = useState({
		subjects: "",
		chapter: "",
		title: "Select Title",
		programmingLanguage: "Select programming language",
		description: "",
		descriptionImage: null,
		constraints: "",
		constraintsImage: null,
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFileChange = (event) => {
		const { name, files } = event.target;
		setFormData({
			...formData,
			[name]: files[0],
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert("Update coding Successfully");
		console.log("Form Data:", formData);
	};

	return (
		<div>
			<div className="container-fluid ">
				<div className="row">
					{isOpen && (
						<div className=" col-12  col-lg-3 col-md-12 sectioncard121">
							<Sidebar />
							<ToastContainer />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
            <i
									className="fa-solid fa-bars bars d-lg-block d-none"
									onClick={toggleSidebar}
								></i>
						{/* <form className="basic">
                            <div className="my-2">
                                <h6 className="headingBasic">
                                    Subjetcts<span className="bcolor">*</span><br />

                                </h6>

                            </div>
                            <div className="my-2">
                                <h6 className="headingBasic">
                                    Chapter<span className="bcolor">*</span><br />

                                </h6>

                            </div>
                            <div className="my-2">
                                <h6 className="headingBasic">
                                    Title<span className="bcolor">*</span>
                                </h6>
                                <select class="form-select">
                                    <option selected>Select Title</option>
                                    <option value="Python">Python</option>
                                    <option value="Javascript">Javascript</option>
                                    <option value="React.js">React.js</option>
                                </select>
                            </div>
                            <div className="my-2">
                                <h6 className="headingBasic">
                                    Programming language<span className="bcolor">*</span>
                                </h6>
                                <select class="form-select" >
                                    <option selected>Select programming language</option>
                                    <option value="Python">Python</option>
                                    <option value="Javascript">Javascript</option>
                                    <option value="React.js">React.js</option>
                                </select>
                            </div>
                            <div className="description">
                                <h6 className="headingBasic">
                                    Description<span className="bcolor">*</span>
                                </h6>
                                <CKEditor
                                    editor={ClassicEditor}

                                    data={editorData}
                                    onReady={(editor) => {
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                        setDescription(data);
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />

                                <label htmlFor="myfile">
                                    <h6 className="my-2 mx-2">Description Image</h6>
                                </label>
                                <input type="file" id="myfile" name="myfile" />
                            </div>
                            <div className="">
                                <h6 className="headingBasic">
                                    Constraints<span className="bcolor">*</span>
                                </h6>
                                <CKEditor
                                    editor={ClassicEditor}

                                    data={editorData}
                                    onReady={(editor) => {
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                        setConstraints(data);
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                    value={Constraints} />

                                <label htmlFor="myfile">
                                    <h6 className="my-2 mx-2">Constraints Image</h6>
                                </label>
                                <input type="file" id="myfile" name="myfile" /><br />
                                <button>Submit</button>
                            </div>
                        </form> */}
						<form className="basic" onSubmit={handleSubmit}>
              <div className="row">
              <div className="my-2 col-lg-6">
								<h6 className="">
									Subjetcts<span className="bcolor">*</span>
									<br />{" "}
								</h6>
								<select className="form-control" onChange={(e) => setSelectedSubject(e.target.value)}>
									<option value="">All Subjects</option>
									{blogslist.map((blog, blogIndex) =>
										blog.chapter.map((chapter, chapterIndex) =>
											chapter.codingbasic.map((coding, codingIndex) => (
												<option
													key={`${blogIndex}-${chapterIndex}-${codingIndex}`}
												>
													{coding.Subjects}
												</option>
											))
										)
									)}
								</select>
							</div>
							<div className="my-2 col-lg-6">
								<h6 className="">
									Chapter<span className="bcolor">*</span>
									<br />
                  </h6>
									<select className="form-control" onChange={(e) => setSelectedChapter(e.target.value)}>
										<option value="">All Chapters</option>
										{blogslist.map((blog, blogIndex) =>
											blog.chapter.map((chapter, chapterIndex) =>
												chapter.codingbasic.map((coding, codingIndex) => (
													<option
														key={`${blogIndex}-${chapterIndex}-${codingIndex}`}
													>
														{coding.Chapters}
													</option>
												))
											)
										)}
									</select>
							</div>
              </div>
							

							<div className="my-2">
								<h6 className="">
									Title<span className="bcolor">*</span>
								</h6>
								<select
									name="title"
									className="form-select"
									value={formData.title}
									onChange={handleChange}
								>
									<option value="Select Title">Select Title</option>
									<option value="Python">Python</option>
									<option value="Javascript">Javascript</option>
									<option value="React.js">React.js</option>
								</select>
							</div>

							<div className="my-3">
								<h6 className="">
									Programming language<span className="bcolor">*</span>
								</h6>
								<select
									name="programmingLanguage"
									className="form-select"
									value={formData.programmingLanguage}
									onChange={handleChange}
								>
									<option value="Select programming language">
										Select programming language
									</option>
									<option value="Python">Python</option>
									<option value="Javascript">Javascript</option>
									<option value="React.js">React.js</option>
								</select>
							</div>

							<div className="description">
								<h6 className="">
									Description<span className="bcolor">*</span>
								</h6>
								<CKEditor
									editor={ClassicEditor}
									data={formData.description}
									onReady={(editor) => {
										console.log("Editor is ready to use!", editor);
									}}
									onChange={(event, editor) => {
										const data = editor.getData();
										console.log({ event, editor, data });
										setDescription(data);
										handleChange({
											target: { name: "description", value: data },
										}); // Call your handleChange function to update formData
									}}
									onBlur={(event, editor) => {
										console.log("Blur.", editor);
									}}
									onFocus={(event, editor) => {
										console.log("Focus.", editor);
									}}
								/>

								<label htmlFor="myfile">
									<h6 className="my-2 ">Description Image</h6>
								</label>
								<input type="file" id="myfile" name="myfile"  className="form-control my-2"/>
							</div>
							<div className="">
								<h6 className="my-3">
									Constraints<span className="bcolor">*</span>
								</h6>
								<CKEditor
									editor={ClassicEditor}
									data={formData.constraints}
									onReady={(editor) => {
										console.log("Editor is ready to use!", editor);
									}}
									onChange={(event, editor) => {
										const data = editor.getData();
										console.log({ event, editor, data });
										setConstraints(data);
										handleChange({
											target: { name: "constraints", value: data },
										}); // Call your handleChange function to update formData
									}}
									onBlur={(event, editor) => {
										console.log("Blur.", editor);
									}}
									onFocus={(event, editor) => {
										console.log("Focus.", editor);
									}}
								/>

								<label htmlFor="myfile">
									<h6 className="my-3">Constraints Image</h6>
								</label>
								<input type="file" id="myfile" name="myfile" className="form-control" />
								<br />
								<button type="submit" className="btn_submit my-3">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Codingupdate;