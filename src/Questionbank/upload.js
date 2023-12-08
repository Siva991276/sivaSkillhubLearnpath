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
    return (
        <div>
            <div className="container">
                <div className="row">
                {isOpen && (
						<div className=" col-12 col-md-2 sectioncard121">
							<Sidebar  />
						</div>
					)}
                    <div className="col-1"></div>
                    <div className="col-8 my-5">
                        <div className="card shadow">
                            <div className="row">
                                <div className="col-4 my-4 mx-3">
                                    <p><b>Upload Questions</b></p>
                                </div>
                                <div className="col-3"></div>
                                <div className="col-4 my-4" style={{ backgroundColor: "orange", color: "white", border: "1px solid orange" }}>
                                    <div className="" onClick={handleDownloadFormat}>
                                        
                                        <p className=""> <i class="fa-solid fa-download"></i> Download Format</p>
                                    </div>

                                </div>

                            </div>
                            <div className="row mx-1">
                                <div className="col-6">
                                    <label>Subject</label><br></br>
                                    <input type="text" placeholder="...Select Subject..." className="w-100" />

                                </div>
                                <div className="col-6">
                                    <label>Chapter</label><br></br>
                                    <input type="text" placeholder="...Select Chapter..." className="w-100" />

                                </div>


                            </div>
                            <div className="row my-3 mx-1">
                                <div className="col-6">
                                    <label>Question File</label><br></br>
                                    {/* <input type="text" className="w-100" /> */}
                                    <div className="shadow">
                                        {/* inpu className="w-100 text-start ">No file choosen</button> */}
                                        <label>Add File</label>
                                        <input type="file" className="w-100 text-start" onChange={handleFileChange}
                                            accept=".xls, .xlsx" />
                                    </div>

                                </div>

                            </div>
                            <div className="text-center my-5" >
                                <button type="" style={{ backgroundColor: "skyblue", color: "white", border: "1px solid skyblue" }} className="py-2">Upload Question</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Upload;