import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const View = () => {
    const [blogslist, setBlogslist] = useState([]);

    useEffect(() => {
        fetchblogs();
    });

    // const fetchBlogs = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:3051/allperfexData/");
    //         setBlogslist(response.data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };
    const fetchblogs = async () => {
        const api = "http://localhost:3051/allperfexData";

        try {
            const response = await axios.get(api);
            setBlogslist(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };
    console.log(blogslist);

    return (
        <div>

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
                                    <li><a class="dropdown-item" href="/paragview" style={{ color: "white" }}>View</a></li>

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


                    <div className="col-md-9 py-3 card">
                        <p><b>Fillter Text Question</b> :</p>
                        <div className="row shadow">






                            {/* <div className="col-2">


                                <select type="text" placeholder="frontend" className="w-100">
                                    <option value="modlue">

                                    {blogslist.map((blog) => (
                                        
                                            <option>{blog.module}</option>
                                    
                                    )

                                    )}
                                    </option>
                                    
                                </select>
                                 
                            </div>  */}
                            <div className="col-2">
                                {/* <select type="text" placeholder="frontend" className="w-100">
                                    {blogslist.map((blog, index) => (
                                        <option key={index} value={blog.module}>
                                            {blog.module}
                                        </option>
                                    ))}
                                </select> */}
                                <select type="text" placeholder="....Select Subject ..." className="card">
                                    <option>...select Subject..</option>
                                    <option>Front end</option>

                                </select>
                                <p>Select Subject</p>



                            </div>


                            {/* <div className="col-2">
                            <select
                          
                          
                        >
                          <option value="Select Batch">
                            ---Select Batch---
                          </option>
                          {blogslist.map((blog) => (
                            <option
                             
                              
                            >
                              {blog.module}
                            </option>
                          ))}
                        </select>
                        </div> */}

                            <div className="col-2">

                                <select type="text" placeholder="" className="w-100" >
                                    <option value="chapter"></option>

                                    {blogslist.map((blog) => (
                                        <option key={blog.id} value={blog.chapter}>{blog.chapter}</option>
                                    ))}
                                </select>
                                <p>Select Chapter</p>



                            </div>
                            <div className="col-2">
                                <select type="text" placeholder="" className="w-100" >
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>

                                </select>
                                <p>Diffculty</p>
                            </div>

                            <div className="col-2">
                                <select type="text" placeholder="" className="w-100" >
                                    <option></option>
                                    <option value="refernce"></option>

                                    {blogslist.map((blog) => (
                                        <option key={blog.id} value={blog.refernce}>{blog.refernce}</option>
                                    ))}

                                </select>
                                <p>Reference</p>
                            </div>

                            <div className="col-2 mx-4">
                                <select type="text" placeholder="" className="w-100" >
                                    <option></option>
                                    <option value="questiontype"></option>

                                    {blogslist.map((blog) => (
                                        <option key={blog.id} value={blog.questiontype}>{blog.questiontype}</option>
                                    ))}

                                </select>
                                <p>Question type</p>
                            </div>




                        </div>
                        <div className="row">
                            <div className="col-5"></div>
                            <div className="col-2">
                                <button className=" mx-5 my-3" style={{ backgroundColor: "blue", color: "white", border: "1px solid blue" }}>Go</button>
                            </div>
                            <div className="col-2">
                                <button className="w-15  my-3" style={{ backgroundColor: "red", color: "white", border: "1px solid red" }}>Clear Fillter</button>
                            </div>
                        </div>
                        <div className="row shadow">
                        <div className="col-12 my-5 mx-4  ">
                        <p><b>Question Table</b></p>
                        <button style={{ width: "95px", }} cl >S.No</button>
                        <button style={{ width: "95px" }}>ID</button>
                        <button style={{ width: "95px" }}>Modulue</button>
                        <button style={{ width: "95px" }}>Chapter</button>
                        <button style={{ width: "95px" }}>Question</button>
                        <button style={{ width: "95px" }}>Diffculty</button>
                        
                        <button style={{ width: "95px" }}>Reference</button>
                        <button style={{ width: "95px" }}>Action</button>

                    </div>
                        </div>

                    </div>







                </div>
                questiontype



            </div>
            {blogslist.map((blog, index) => (
                <p key={index} >
                    {blog.questiontype}
                </p>
            ))}



        </div>
    )
}
export default View;


{/* <div className="container card my-5 shadow">
                <div className="row">
                   

                </div>

            </div> */}





{/* <div className="container card shadow">
                <div className="row">
                    

                </div>

            </div> */}