import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";


const ParagHome=()=>{
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
            </div>



        </div>
    )

}
export default ParagHome;