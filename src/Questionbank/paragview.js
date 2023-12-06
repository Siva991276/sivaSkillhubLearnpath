import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const ParagView = () => {

    const [blogslist, setBlogslist] = useState([]);

    useEffect(() => {
        fetchBlogs1();
    }, []);
    const fetchBlogs1 = async () => {
        const api = "http://localhost:3051/allperfexData";

        try {
            const response = await axios.get(api);
            setBlogslist(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };
    console.log(blogslist);
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
                        <p><b>Fillter Graph Question</b> :</p>
                        <div className="row shadow">
                            <div className="col-2 ">
                                {/* <select type="text" placeholder="frontend" className="w-100">
                                    {blogslist.map((blog, index) => (
                                        <option key={index} value={blog.module}>
                                            {blog.module}
                                        </option>
                                    ))}
                                </select> */}
                                <select type="text" placeholder="" className="card w-100">
                                    <option>...select Subject..</option>
                                    <option>Front end</option>

                                </select>
                                <p>Select subject</p>
                            </div>

                            <div className="col-2 ">
                                <select type="text" placeholder="frontend" style={{ width: "120px" }} >
                                    <option value="chapter1"></option>
                                    {blogslist.map((blog) => (
                                        <option key={blog.id} value={blog.chapter1}>{blog.chapter1}</option>
                                    ))}

                                </select>
                                <p>Select Chapter</p>
                            </div>
                            <div className="col-2">
                                <select type="text" placeholder="" style={{ width: "120px" }} >
                                    <option>Easy</option>
                                    <option>Medium</option>

                                    <option>Hard</option>


                                </select>
                                <p> Diffculty</p>
                            </div>

                            <div className="col-2">
                                <select type="text" placeholder="" className="w-100" >
                                    <option value="reference1"></option>

                                    {blogslist.map((blog) => (
                                        <option key={blog.id} value={blog.reference1}>{blog.reference1}</option>
                                    ))}
                                </select>
                            </div>


                            <div className="col-2">
                                <button style={{ backgroundColor: "blue", color: "white", border: "1px solid blue", }} className="w-75 ">Go</button>
                            </div>

                            <div className="col-2">
                                <button style={{ backgroundColor: "red", color: "white", border: "1px solid red" }} className="w-75">Clear Fillter</button>
                            </div>




                        </div>
                        {/* <div className="row">
                            <div className="col-5"></div>
                            <div className="col-2">
                            <button className="w-15 mx-5 my-3" style={{backgroundColor:"blue",color:"white",border:"1px solid blue"}}>Go</button>
                            </div>
                            <div className="col-2">
                            <button className="w-15  my-3" style={{backgroundColor:"red",color:"white", border:"1px solid red"}}>Clear Fillter</button>
                            </div>
                        </div> */}
                        <div className="row shadow py-4">
                            <div className="col-12 my-5 mx-3  ">
                                <p><b>Paragraph Question:</b></p>
                                <button style={{ width: "95px", }} cl >S.No</button>
                                <button style={{ width: "95px" }}>ID</button>
                                <button style={{ width: "95px" }}>Modulue</button>
                                <button style={{ width: "95px" }}>Chapter</button>
                                <button style={{ width: "95px" }}>Question</button>
                                <button style={{ width: "95px" }}>Diffculty</button>
                                
                                <button style={{ width: "95px" }}>Reference</button>
                                

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div className="container card shadow">

                <div className="col-8 my-5  ">
                    <p><b>Paragraph Question:</b></p>
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
        </div>
        </div>
    )
}
export default ParagView;