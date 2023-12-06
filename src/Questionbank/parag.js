import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Parag1=()=>{
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
    else if(selectedValue ==='sixth'){
        navigate('/sixth');
    }
    else if(selectedValue ==='seventh'){
        navigate('/seventh');
    }
   };

    // const subbtn = () => {
    //     navigate("/singlequestion")
    // }
    const [Open, setOpen] = useState(false)
    const created = () => {
        setOpen(!Open)
    }

    const subbtn1=()=>{

    }
     const [Open1, setOpen1] = useState(false)
    const created1 = () => {
        setOpen(!Open)
    }
    const [Open2, setOpen2] = useState(false)
    const created2 = () => {
        setOpen(!Open)
    }

    const [Open3, setOpen3] = useState(false)
    const created3 = () => {
        setOpen(!Open)
    }

    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col-md-4 card" style={{ backgroundColor: "black", color: "white" }}>
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
                                <p onClick={created} className="dropdown-toggle">Self Created QB</p>
                                {Open && (
                                    <ul>

                                        <li><a class="dropdown-item" href="#" style={{ color: "white" }}>Subject</a></li>
                                        <li><a class="dropdown-item" href="#" style={{ color: "white" }}>Chapters</a></li>
                                    </ul>
                                )
                                }

                                <p onClick={created1} className="dropdown-toggle">MCQ Question</p>
                                {Open &&(
                                <ul>
                                    <li><a class="dropdown-item" href="/parag" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/view" style={{ color: "white" }}>View</a></li>
                                    <li><a class="dropdown-item" href="" style={{ color: "white" }}>Upload</a></li>
                                </ul>
                                )
                                }
                                <p onClick={created2}className="dropdown-toggle">Parag MCQ Question</p>
                                {Open && (
                                <ul>
                                    <li><a class="dropdown-item" href="/mcq" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/paragview" style={{ color: "white" }}>View</a></li>

                                </ul>
                                )
                                }

                                <p onClick={created3} className="dropdown-toggle">Coding Question</p>
                                {Open &&(
                                <ul>
                                    <li><a class="dropdown-item" href="/coding" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/codingview" style={{ color: "white" }}>View</a></li>

                                </ul>
                                )
                                }

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


                    <div className="col-12 col-md-6 card">
                        <h4>CREATE Question</h4>
                        <label>Select Question Type*</label>
                        <select value={selectedOption} onChange={handleSelectChange} type="text" placeholder="...select Question Type..." className="w-100" style={{ color: "1px solid blue" }} >
                            <option>...Select Question Type....</option>
                            <option value="firstquestion">Single Correct Option</option>

                            <option value="secondquestion">Multi Correct Option</option>
                            <option value="thitdquestion">Multi Correct Option With Partial Marketing</option>
                            <option value="fourthquestion">Fill in the Blanks</option>
                            <option value="fifth">True Or False</option>
                            <option value="sixth">Writing</option>
                            <option value="seventh">Speaking</option>
                        </select>


                    </div>




                </div>
            </div>



        </div>
    )

}
export default Parag1;