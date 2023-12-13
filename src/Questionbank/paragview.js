import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

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
              <Sidebar />
            </div>
          )}
          <div
            className={`my-3 col-12 col-md-${isOpen ? 10 : 12} col-lg-${
              isOpen ? 10 : 12
            }`}
          >
            <div className="ml-5 d-lg-block d-none">
              <i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
              <div class="mx-5 paragView">
                <div className="row ">
                  <b>Fillter Graph Question</b>
                  <div className="col-2">
                    <select type="text" placeholder="" className="w-100">
                      <input value="reference1"></input>
                    </select>
                  </div>
                  <div className="col-2">
                    <select className="w-100">
                      <option>React</option>
                    </select>
                  </div>
                  <div className="col-2">
                    <select className="w-100">
                      <option>React</option>
                    </select>
                  </div>
                  <div className="col-2 ">
                    <button className="col-4 ">Go</button>
                  </div>
                  <div className="col-2">
                    <button className="paragbtn">Clear Filter</button>
                  </div>
                </div>
                <div className="tableContainer">
                  <h6 className="paragTableHeading">Paragraph Question:</h6>
                  <div className="paragShow">
                    <div className="paragHeading">
                      <label>Show</label>
                      <select>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="paragSearch">
                      <label>Search:</label>
                      <input></input>
                    </div>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>ID</th>
                        <th>MODULE</th>
                        <th>CHAPTER</th>
                        <th>PARAGRAPH</th>
                        <th>DIFFICULTY</th>
                        <th>QUESTIONS</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>d</td>
                        <td>dsd</td>
                        <td>fsdf</td>
                        <td>sdf</td>
                        <td>sdf</td>
                        <td>0</td>
                        <td className="paragEdit">
                          <FaRegEye className="paragEyeIcon" />
                          <NavLink to={"/ParagHome"}>
                          <button className="paragQuestionBtn">Question</button>
                          </NavLink>
                          <NavLink to={"/paragEdit"}>
                            <CiEdit className="paragEyeIcon" />
                          </NavLink>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ParagView;
