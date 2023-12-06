import React from "react";
import Sidebar from "../Sidebar";
import { useState } from "react";

const Coding = () => {
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
        <div className="container">
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

        </div>
        </div>
        </div>
    )
}
export default Coding;