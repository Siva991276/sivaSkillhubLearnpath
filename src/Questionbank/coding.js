import React from "react";


const Coding = () => {
    return (
        <div className="container">
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
                    <h4>CREATE Coding Question</h4>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-3">
                            <input type="radio" />
                            <p>BASIC</p>
                            <hr style={{ color: "red" }} />
                        </div>



                        <div className="col-4">
                            <input type="radio" />
                            <p>SAMPLE CODE</p>
                            <hr style={{ color: "black" }} />
                           
                        </div>
                        <div className="col-4">
                            <input type="radio" />
                            <p>TEST CASE</p>
                            <hr style={{ color: "black" }} />
                        </div>
                    </div>



                    <label style={{ fontSize: "15px" }}><b>Subjects *</b></label>
                    <select type="text" placeholder="....Select Subject ..." className="card">
                        <option>...select Subject..</option>
                        <option>Front end</option>

                    </select>
                    <label style={{ fontSize: "15px" }}><b>Chapter *</b></label>
                    <select type="text" placeholder="...Select Chapter" className="card">
                        <option>...select Chapter...</option>
                    </select>

                    <label style={{ fontSize: "15px" }}><b>Tittle *</b></label>
                    <select type="text" placeholder="...Select Chapter" className="card">
                        <option>...select Chapter...</option>
                    </select>


                    <label style={{ fontSize: "15px" }}><b>Programming Languages *</b></label>
                    <select type="text" placeholder="" className="card">
                        <option>...select Porgramming Languages..</option>
                        <option>C</option>
                        <option>Python</option>
                        <option>Java</option>
                        <option>CPP</option>
                        <option>JavaScript</option>
                        <option>React</option>

                    </select>




                    <label style={{ fontSize: "15px" }} className="my-3"><b>Description *</b></label>




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
                        <p><b>Description Image</b></p>
                    </div>

                    <div className="my-1" style={{ width: "110px" }}>
                        <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                    </div>




                    <label style={{ fontSize: "15px" }} className="my-3"><b>Constarin *</b></label>

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
                        <p><b>Constraints Image</b></p>
                    </div>

                    <div className="my-1" style={{ width: "110px" }}>
                        <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                    </div>




                    <label style={{ fontSize: "15px" }} className="my-3"><b>Example *</b></label>




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
                        <p><b>Example Image</b></p>
                    </div>

                    <div className="my-1" style={{ width: "110px" }}>
                        <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                    </div>





                    <label style={{ fontSize: "15px" }} className="my-3"><b>Explanation *</b></label>




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
                        <p><b>Explanation Image</b></p>
                    </div>

                    <div className="my-1" style={{ width: "110px" }}>
                        <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue" }}>Choose Image</button>
                    </div>
                    <div className="cotue">

                        <button className=" my-4" style={{ backgroundColor: "blue", color: "white", border: "1px solid blue" }}>Continue</button>
                    </div>



                </div>

            </div>


        </div>
    )
}
export default Coding;