import React, { useState } from "react";
import Sidebar from "../Sidebar";

const Upload = () => {
	const [isOpen, setIsOpen] = useState(true);

	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedFile(file);
	};

	const handleDownloadFormat = () => {
		// Check if a file is selected
		if (selectedFile) {
			// Implement your file download logic here
			// For example, you can create a download link and trigger a click event
			const downloadLink = document.createElement("a");
			downloadLink.href = URL.createObjectURL(selectedFile);
			downloadLink.download = "Upload.xlsx"; // Specify the desired file name
			downloadLink.click();
		} else {
			alert("Please select a file before downloading the format.");
		}
	};

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
		<div>
			<div className="container-fluid">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-lg-3 col-md-12 sectioncard121">
							<Sidebar />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
						{" "}
                        <i
								className="fa-solid fa-bars bars d-lg-block d-none"
								onClick={toggleSidebar}
							></i>
						<div className="card shadow">
							<div className="row ">
								<div className=" col-lg-4 col-md-6 my-auto col-12 p-3">
									<h5>
										<b>Upload Questions</b>
									</h5>
								</div>
                                <div className="col-lg-2 d-lg-block  d-none"></div>
								<div
									className=" col-lg-4 col-md-6 col-12 my-4 mx-3 text-end"
									style={{
										backgroundColor: "orange",
										color: "white",
										border: "1px solid orange",
                                        width:"fit-content",
                                        borderRadius:"7px"
									}}
								>
									<div className="text-end p-2" onClick={handleDownloadFormat}>
										<span className="" >
											{" "}
											<i class="fa-solid fa-download"></i> Download Format
										</span>
									</div>
								</div>
							</div>
							<div className="row mx-1">
								<div className="col-6">
									<label>Subject</label>
									<br></br>
									<input
										type="text"
										placeholder="...Select Subject..."
										className=" form-control"
									/>
								</div>
								<div className="col-6">
									<label>Chapter</label>
									<br></br>
									<input
										type="text"
										placeholder="...Select Chapter..."
										className="form-control"
									/>
								</div>
							</div>
							<div className="row my-3 mx-1">
								<div className="col-6">
									<label>Question File</label>
									<br></br>
									{/* <input type="text" className="w-100" /> */}
									<div className="mt-3">
										{/* inpu className="w-100 text-start ">No file choosen</button> */}
										<label>Add File</label>
										<input
											type="file"
											className="w-100 text-start form-control"
											onChange={handleFileChange}
											accept=".xls, .xlsx"
										/>
									</div>
								</div>
							</div>
							<div className="text-center my-5">
								<button
									type=""
									style={{
										backgroundColor: "#910a8f",
										color: "white",
										border: "none",
                                        borderRadius:"7px"
									}}
									className="p-2"
								>
									Upload Question
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Upload;
