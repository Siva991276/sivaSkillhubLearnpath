import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Multipule = () => {
    let navigate = useNavigate();
    const [selectedOption,setselectedOption]=useState("");

    const handleSelectChange= (event)=>{
     const selectedValue =event.target.value;
     setselectedOption(selectedValue);
 
     if(selectedValue ==='firstquestion'){
         navigate('/firstquestion');
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
    };
 
    return (
        <div>

            <div className="container ">
                <div className="row">
                    <div className="col-md-2 card" style={{ backgroundColor: "black", color: "white" }}>
                        <div className="d-flex flex-row justify-content-between ">
                            <div>
                                <h5>Instacks</h5>
                            </div>
                            <div>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="mx-2">
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">

                                <p>HomePage</p>
                            </div>
                        </div>


                        <h5>INSTITUTIONS</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Institutions</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>

                            </div>
                            <div className="mx-2">
                                <p>Batch Years</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Batches</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Users</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-brands fa-algolia"></i>
                            </div>
                            <div className="mx-2">
                                <p>Search user</p>
                            </div>
                        </div>

                        <h5>QUESTION BANK</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-layer-group"></i>
                            </div>
                            <div className="mx-2 ">
                                <p className="dropdown-toggle">Self Created QB</p>
                                <ul>
                                    <li><a class="dropdown-item" href="#" style={{ color: "white" }}>Subject</a></li>
                                    <li><a class="dropdown-item" href="#" style={{ color: "white" }}>Chapters</a></li>
                                </ul>
                                {/* <div class="dropdown">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                        Dropdown button
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Link 1</a></li>
                                        <li><a class="dropdown-item" href="#">Link 2</a></li>
                                        <li><a class="dropdown-item" href="#">Link 3</a></li>
                                    </ul>
                                </div> */}
                                <p className="dropdown-toggle">MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="#./parag" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/view" style={{ color: "white" }}>View</a></li>
                                    <li><a class="dropdown-item" href="#" style={{ color: "white" }}>Upload</a></li>
                                </ul>
                                <p className="dropdown-toggle">Parag MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/mcq" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/paragview" style={{ color: "white" }}>View</a></li>

                                </ul>

                                <p className="dropdown-toggle">Coding Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/coding" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/codingview" style={{ color: "white" }}>View</a></li>

                                </ul>

                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-row">

                                <i class="fa-brands fa-algolia"></i>

                                <div className="mx-2">
                                    <p>Assigned QB</p>
                                </div>
                            </div>
                        </div>

                        <h5>ASSESSMENTS</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assessments</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Reports</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assigned Assessments</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                            <div className="mx-2">
                                <p>Compare</p>
                            </div>
                        </div>

                        <h5>LEARNING PATH</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Learning Path</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">
                                <p>Access</p>
                            </div>
                        </div>

                        <h5>PRACTICE</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className="mx-2">
                                <p>pratice</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-file-lines"></i>
                            </div>
                            <div className="mx-2">
                                <p>Participation Report</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assigned</p>
                            </div>
                        </div>


                        <h5>Blogs</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Blogs</p>
                            </div>
                        </div>

                        <h5>PROCTORING</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-circle-dot"></i>
                            </div>
                            <div className="mx-2">
                                <p>proctoring</p>
                            </div>
                        </div>

                        <h5>PROFILE</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-dollar-sign"></i>
                            </div>
                            <div className="mx-2">
                                <p>billing</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Invoices</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-key"></i>
                            </div>
                            <div className="mx-2">
                                <p>Change Password</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">

                                <p>Compiler Test</p>
                            </div>
                        </div>

                        <hr style={{ backgroundColor: "white" }} />
                        <div className="text-center" >
                            <button style={{ backgroundColor: "blue", color: "white" }}>Logout</button>
                        </div>
                        <div className="text-center">
                            <i class="fa-regular fa-message"></i>
                        </div>
                    </div>







                    <div className="col-1"></div>


                    <div className="col-12 col-md-8 card">
                        <h4>CREATE Question</h4>
                        <label><b>Select Question Type*</b></label>
                        <select value={selectedOption} onChange={handleSelectChange} type="text" placeholder="...select Question Type..." className="w-100" style={{ color: "1px solid blue" }} >
                            <option>...Select Question Type....</option>
                            <option value="firstquestion">Single Correct Option</option>

                            <option value="secondquestion">Multi Correct Option</option>
                            <option value="thitdquestion">Multi Correct Option With Partial Marketing</option>
                            <option value="fourthquestion">Fill in the Blanks</option>
                            <option value="fifth">True Or False</option>
                            <option>Writing</option>
                            <option>Speaking</option>
                        </select>Option Question

                        <p>Note: <b>Multipule Question</b> Will have a minimum of 3 options and a maximum of 5 options.<br />
                            One of the option will be the correct answer for this type of question. </p>
                        <label style={{ fontSize: "15px" }}><b>Subjects *</b></label>
                        <select type="text" placeholder="....Select Subject ..." className="card">
                            <option>...select Subject..</option>
                            <option>Front end</option>

                        </select>
                        <label style={{ fontSize: "15px" }}><b>Chapter *</b></label>
                        <select type="text" placeholder="...Select Chapter" className="card">
                            <option>...select Chapter...</option>
                        </select>

                        <p className="my-3"><b>Difficulty *</b></p>
                        <div className="row">
                            <div className="d-flex flex-row col-4">
                                <div>
                                    <input type="radio" />
                                </div>
                                <div className="px-2">
                                    Diffcult
                                </div>
                            </div>
                            <div className="d-flex flex-row col-4">
                                <div>
                                    <input type="radio" />
                                </div>
                                <div className="mx-2">
                                    Easy

                                </div>
                            </div>

                            <div className="d-flex flex-row col-4">
                                <div>
                                    <input type="radio" />
                                </div>
                                <div className="mx-2">
                                    Medium

                                </div>
                            </div>




                        </div>


                        <label><b>Reference *</b></label>
                        <select input type="text" placeholder="Reference">
                            <option>Reference</option>

                        </select>

                        <p className="my-2"><b>Question*</b></p>
                        <div className="row card mx-1">
                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <p>Edit</p>
                                </div>
                                <div className="col-2 ">
                                    view
                                </div>

                                <div className="col-2">
                                    Insert
                                </div>
                                <div className="col-2">
                                    Format
                                </div>
                                <div className="col-2">
                                    Table
                                </div>

                            </div>



                        </div>

                        <div className="card">

                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <i class="fa-solid fa-share"></i>
                                </div>
                                <div className="col-2  ">
                                    paragraph
                                </div>

                                <div className="col-2">
                                    <i class="fa-sharp fa-solid fa-b"></i>
                                </div>
                                <div className="col-2">
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

                        <textarea />
                        <div className="card">

                            <div className="row">
                                <div className="col-1">
                                    <p>p</p>

                                </div>
                                <div className="col-1">

                                </div>
                                <div className="col-10 text-end">
                                    <p>0 words powderd by tinny</p>

                                </div>
                            </div>


                        </div>

                        <div className="my-1">
                            <p>Question Image</p>
                        </div>

                        <div className="my-1" style={{ width: "110px" }}>
                            <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                        </div>

                        <div className="my-3">
                            <button style={{ width: "110px", backgroundColor: "blue", color: "white", border: "1px solid blue" }}>Insert Image</button>
                        </div>


                        {/* option 1 */}

                        <div>
                            <p><b>Option 1</b></p>
                        </div>
                        <div className="row card mx-1">
                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <p>Edit</p>
                                </div>
                                <div className="col-2 ">
                                    view
                                </div>

                                <div className="col-2">
                                    Insert
                                </div>
                                <div className="col-2">
                                    Format
                                </div>
                                <div className="col-2">
                                    Table
                                </div>

                            </div>



                        </div>

                        <div className="card">

                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <i class="fa-solid fa-share"></i>
                                </div>
                                <div className="col-2  ">
                                    paragraph
                                </div>

                                <div className="col-2">
                                    <i class="fa-sharp fa-solid fa-b"></i>
                                </div>
                                <div className="col-2">
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


                        <textarea />
                        <div className="card">

                            <div className="row">
                                <div className="col-1">
                                    <p>p</p>

                                </div>
                                <div className="col-1">

                                </div>
                                <div className="col-10 text-end">
                                    <p>0 words powderd by tinny</p>

                                </div>
                            </div>


                        </div>

                        <div className="my-1">
                            <p>Option1 Image</p>
                        </div>
                        <div className="row">
                            <div className="d-flex flex-row ">
                                <div className="my-1" style={{ width: "110px" }}>
                                    <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                                </div>
                                <div className="col-4"></div>

                                <div className="col-2 text-end w-50">
                                    <button style={{ backgroundColor: "red", color: "white", border: "1px solid red" }}>Delete<br></br>
                                        option</button>
                                </div>
                            </div>
                        </div>

                        <div className="my-3">
                            <button style={{ width: "110px", backgroundColor: "blue", color: "white", border: "1px solid blue" }}>Insert Image</button>
                        </div>

                        {/* option1 */}


                        {/* option2 */}



                        <div>
                            <p><b>Option 2</b></p>
                        </div>
                        <div className="row card mx-1">
                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <p>Edit</p>
                                </div>
                                <div className="col-2 ">
                                    view
                                </div>

                                <div className="col-2">
                                    Insert
                                </div>
                                <div className="col-2">
                                    Format
                                </div>
                                <div className="col-2">
                                    Table
                                </div>

                            </div>



                        </div>

                        <div className="card">

                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <i class="fa-solid fa-share"></i>
                                </div>
                                <div className="col-2  ">
                                    paragraph
                                </div>

                                <div className="col-2">
                                    <i class="fa-sharp fa-solid fa-b"></i>
                                </div>
                                <div className="col-2">
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


                        <textarea />
                        <div className="card">

                            <div className="row">
                                <div className="col-1">
                                    <p>p</p>

                                </div>
                                <div className="col-1">

                                </div>
                                <div className="col-10 text-end">
                                    <p>0 words powderd by tinny</p>

                                </div>
                            </div>


                        </div>

                        <div className="my-1">
                            <p><b>Option2 Image</b></p>
                        </div>
                        <div className="row">
                            <div className="d-flex flex-row ">
                                <div className="my-1" style={{ width: "110px" }}>
                                    <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                                </div>
                                <div className="col-4"></div>

                                <div className="col-2 text-end w-50">
                                    <button style={{ backgroundColor: "red", color: "white", border: "1px solid red" }}>Delete<br></br>
                                        option</button>
                                </div>
                            </div>
                        </div>

                        <div className="my-3">
                            <button style={{ width: "110px", backgroundColor: "blue", color: "white", border: "1px solid blue" }}>Insert Image</button>
                        </div>

                        {/* option2 */}



                        {/* option 3 */}


                        <div>
                            <p><b>Option 3</b></p>
                        </div>
                        <div className="row card mx-1">
                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <p>Edit</p>
                                </div>
                                <div className="col-2 ">
                                    view
                                </div>

                                <div className="col-2">
                                    Insert
                                </div>
                                <div className="col-2">
                                    Format
                                </div>
                                <div className="col-2">
                                    Table
                                </div>

                            </div>



                        </div>

                        <div className="card">

                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <i class="fa-solid fa-share"></i>
                                </div>
                                <div className="col-2  ">
                                    paragraph
                                </div>

                                <div className="col-2">
                                    <i class="fa-sharp fa-solid fa-b"></i>
                                </div>
                                <div className="col-2">
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


                        <textarea />
                        <div className="card">

                            <div className="row">
                                <div className="col-1">
                                    <p>p</p>

                                </div>
                                <div className="col-1">

                                </div>
                                <div className="col-10 text-end">
                                    <p>0 words powderd by tinny</p>

                                </div>
                            </div>


                        </div>

                        <div className="my-1">
                            <p>Option3 Image</p>
                        </div>
                        <div className="row">
                            <div className="d-flex flex-row ">
                                <div className="my-1" style={{ width: "110px" }}>
                                    <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                                </div>
                                <div className="col-4"></div>

                                <div className="col-2 text-end w-50">
                                    <button style={{ backgroundColor: "red", color: "white", border: "1px solid red" }}>Delete<br></br>
                                        option</button>
                                </div>
                            </div>
                        </div>

                        <div className="my-3">
                            <button style={{ width: "110px", backgroundColor: "blue", color: "white", border: "1px solid blue" }}>Insert Image</button>
                        </div>

                        {/* option 3 */}


                        <button style={{ backgroundColor: "lightblue", color: "black", border: "1px solid blue" }}>Add Option</button>



                        <label style={{ fontSize: "15px" }}>Correct Answer *</label>
                        <select type="text" placeholder="....Select Correct Answer ..." className="card" >
                            <option>...select Correct Answer..</option>
                        </select>


                        <label style={{ fontSize: "15px" }} className="my-3">Explanation *</label>



                        <div>
                            <p>Option 2</p>
                        </div>
                        <div className="row card mx-1">
                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <p>Edit</p>
                                </div>
                                <div className="col-2 ">
                                    view
                                </div>

                                <div className="col-2">
                                    Insert
                                </div>
                                <div className="col-2">
                                    Format
                                </div>
                                <div className="col-2">
                                    Table
                                </div>

                            </div>



                        </div>

                        <div className="card">

                            <div className="d-flex flex-row">
                                <div className="col-1 my-1">
                                    <i class="fa-solid fa-share"></i>
                                </div>
                                <div className="col-2  ">
                                    paragraph
                                </div>

                                <div className="col-2">
                                    <i class="fa-sharp fa-solid fa-b"></i>
                                </div>
                                <div className="col-2">
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


                        <textarea />
                        <div className="card">

                            <div className="row">
                                <div className="col-1">
                                    <p>p</p>

                                </div>
                                <div className="col-1">

                                </div>
                                <div className="col-10 text-end">
                                    <p>0 words powderd by tinny</p>

                                </div>
                            </div>
                        </div>



                        <div className="my-1">
                            <p>Explanation Image</p>
                        </div>

                        <div className="my-1" style={{ width: "110px" }}>
                            <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                        </div>

                        <div className="my-3">
                            <button style={{ width: "110px", backgroundColor: "blue", color: "white", border: "1px solid blue" }}>Insert Image</button>
                        </div>

                        <div className="my-3">
                            <button style={{ width: "70px", backgroundColor: "lightblue", color: "white", border: "1px solid blue" }}>Create</button>
                        </div>















                    </div>




                </div>
            </div>




        </div>
    )
}

export default Multipule;