import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

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
    return (
        <div>
            <div className="container ">
                <div className="row">
                {isOpen && (
              <div className=" col-12 col-md-2 sectioncard121">
              <Sidebar/>
              </div>
					  )}						
            <div className={`my-3 col-12 col-md-${isOpen ? 10: 12} col-lg-${isOpen ? 10 : 12}`}>
                <div className="ml-5 d-lg-block d-none">
                <i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
                <div class="mx-5">
                    <div>
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
        </div>
        </div>
        </div>
    )
}
export default Codingview;