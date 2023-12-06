import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Codingview = () => {

    const [blogslist, setBlogslist] = useState([]);

    useEffect(() => {
        fetchBlogs2();
    }, []);

    const fetchBlogs2 = async () => {
        const api = "http://localhost:3051/allperfexData";

        try {
            const response = await axios.get(api);
            setBlogslist(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };
    return (
        <div>

            <div className="container ">
                <div className="row">
                    <div className="col-md-2 card " style={{ backgroundColor: "black", color: "white" }}>
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
                                    <li><a class="dropdown-item" href="/assesment" style={{ color: "white" }}>Subject</a></li>
                                    <li><a class="dropdown-item" href="/chapter" style={{ color: "white" }}>Chapters</a></li>
                                </ul>

                                <p className="dropdown-toggle">MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="" style={{ color: "white" }}>Create</a></li>
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
                    <div className="col-md-8 my-4  ">
                        <p><b>Fillter Coding Question</b> :</p>
                        <div className="row shadow py-4 ">
                            <div className="col-2 mx-4" >
                                <select type="text" placeholder="....Select Subject ..." className="card">
                                    <option></option>
                                    <option>Front end</option>

                                </select>
                                <p>Select subject</p>
                            </div>

                            <div className="col-2">
                                <select type="text" placeholder="frontend" className="w-100">
                                    {blogslist.map((blog, index) => (
                                        <option key={index} value={blog.chapter2}>
                                            {blog.chapter2}
                                        </option>
                                    ))}
                                </select>
                                <p>Select Chapter</p>
                            </div>





                            <div className="col-1">
                                <button style={{ backgroundColor: "blue", color: "white", border: "1px solid blue" }} className="w-100 ">Go</button>
                            </div>

                            <div className="col-1">
                                <button style={{ backgroundColor: "white", color: "blue", border: "1px solid blue", width: "150px", height: "25px" }} >Clear Fillter</button>
                            </div>




                        </div>

                        <div className="row shadow py-5">

                            <p>Serach Coding Question</p>
                            <div className="col-6">
                                {/* <input type="text" placeholder="Search coding question" className="w-75" /> */}
                                <select type="text" placeholder="" className="card w-75">
                                    <option></option>
                                    <option>C</option>
                                    <option>Python</option>
                                    <option>Java</option>
                                    <option>CPP</option>
                                    <option>JavaScript</option>
                                    <option>React</option>

                                </select>
                            </div>

                            <div className="col-1">
                                <butoon className="w-15 py-1 mx-2" style={{ backgroundColor: "blue", color: "white" }}>Search</butoon>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-12 my-5 shadow py-4">
                                <p><b>Coding Question Table:</b></p>
                                <button style={{ width: "95px", }} cl >S.No</button>
                                <button style={{ width: "95px" }}>ID</button>
                                <button style={{ width: "95px" }}>Modulue</button>
                                <button style={{ width: "95px" }}>Chapter</button>
                                <button style={{ width: "95px" }}>Tittle</button>
                                <button style={{ width: "95px" }}>Validate</button>
                                <button style={{ width: "120px" }}>Action</button>

                            </div>

                        </div>


                    </div>



                </div>


            </div>
















        </div>
    )
}
export default Codingview;