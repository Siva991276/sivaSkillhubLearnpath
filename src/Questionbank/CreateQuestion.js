import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../Sidebar";



const CreateQuestion = () => {
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
    }

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
                <div class="mx-5 mt-5">
                        <h4>CREATE Question</h4>
                        <label><b>Select Question Type * </b></label>
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

                        <p>Note:<b> Single Option Question</b> Will have a minimum of 3 options and a maximum of 5 options.<br />
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
                            <p><b>Question Image</b></p>
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

                                <div className="col-2 text-end w-50 mx-5">
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
                            <p>Option2 Image</p>
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
        </div>
        </div>
    )
}
export default CreateQuestion;