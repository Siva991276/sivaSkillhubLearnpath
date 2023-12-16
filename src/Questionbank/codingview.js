// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Sidebar from "../Sidebar";
// import "./Basic.css";
// import { ToastContainer } from "react-toastify";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// function Codingview() {
//   const [blogslist, setblogslist] = useState([]);
//   const [filteredBlogs, setFilteredBlogs] = useState([]);
//   const [isOpen, setIsOpen] = useState(true);
//   // sai
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     menuBtnChange();
//   };
//   const menuBtnChange = () => {
//     const sidebar = document.querySelector(".sidebar");
//     const closeBtn = document.querySelector("#btn");
//     const searchBtn = document.querySelector(".bx-search");

//     if (sidebar?.classList.contains("open")) {
//       closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right");
//     } else {
//       closeBtn?.classList.replace("bx-menu-alt-right", "bx-menu");
//     }
//   };

//   useEffect(() => {
//     fetchblogs();
//   }, []);
//   const fetchblogs = async () => {
//     const api = "http://localhost:4010/v4/getbasic";
//     try {
//       const response = await axios.get(api);
//       setblogslist(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };
//   const [selectedSubject, setSelectedSubject] = useState("");
//   const [selectedChapter, setSelectedChapter] = useState("");

//   // const handleGoButtonClick = () => {
//   //   const filteredData = blogslist.filter((blog) =>
//   //     blog.chapter.some((chapter) =>
//   //       chapter.codingbasic.some(
//   //         (coding) =>
//   //           (!selectedSubject || coding.Subjects === selectedSubject) &&
//   //           (!selectedChapter || coding.Chapters === selectedChapter)
//   //       )
//   //     )
//   //   );
//   //   setFilteredBlogs(filteredData);
//   // };

//   const handleGoButtonClick = () => {
//     const filteredData = blogslist.filter((blog) =>
//       blog.chapter.some((chapter) =>
//         chapter.codingbasic.some(
//           (coding) =>
//             (!selectedSubject || coding.Subjects === selectedSubject) &&
//             (!selectedChapter || coding.Chapters === selectedChapter)
//         )
//       )
//     );
//     setFilteredBlogs(filteredData);
//     console.log(filteredData);
//   };
//   const handleCheckboxChange = (e) => {
//     const value = e.target.value;
//     if (selectedSubject.includes(value)) {
//       setSelectedSubject(selectedSubject.filter((coding) => coding !== value));
//     } else {
//       setSelectedSubject([...selectedSubject, value]);
//     }
//   };
//   const handleCheckboxChange1 = (e) => {
//     const value = e.target.value;
//     if (selectedChapter.includes(value)) {
//       setSelectedChapter(selectedChapter.filter((coding) => coding !== value));
//     } else {
//       setSelectedChapter([...selectedChapter, value]);
//     }
//   };

//   const handleDelete = async (subjectId, chapterId, codingBasicId) => {
//     try {
//       const response = await axios.delete(
//         http://localhost:4010/v4/deletebasic/${subjectId}/${chapterId}/${codingBasicId}
//       );

//       if (response.data.status === "success") {
//         toast.success("Successfully delete !", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         });
//         fetchblogs();
//       } else {
//         toast.error(response.data.msg);
//       }
//     } catch (error) {
//       //   console.error('Error deleting coding basic:', error);
//       toast.error("Error deleting coding basic");
//     }
//   };

//   return (
//     <div>
//       <div className="container-fluid ">
//         <div className="row">
//           {isOpen && (
//             <div className=" col-12 col-lg-3 col-md-12 sectioncard121">
//               <Sidebar />
//               <ToastContainer />
//             </div>
//           )}
//           <div
//             className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
//               isOpen ? 9 : 12
//             }`}
//             style={{ height: "100vh", overflowY: "scroll" }}
//           >
//             <div className=" ">
//               <i
//                 className="fa-solid fa-bars bars d-lg-block d-none"
//                 onClick={toggleSidebar}
//               ></i>
//               <div class=" row ">
//                 <div className="col-lg-11 col-md-12 py-3  ">
//                   <div className="row  p-2">
//                     <div className="col-12 col-md-6">
//                       {/* <select
//                         onChange={(e) => setSelectedSubject(e.target.value)}
//                         className="form-control"
//                       >
//                         <option value="">All Subjects</option>
//                         {blogslist.map((blog, blogIndex) =>
//                           blog.chapter.map((chapter, chapterIndex) =>
//                             chapter.codingbasic.map((coding, codingIndex) => (
//                               <option
//                                 key={${blogIndex}-${chapterIndex}-${codingIndex}}
//                               >
//                                 {coding.Subjects}
//                               </option>
//                             ))
//                           )
//                         )}
//                       </select> */}
//                       <select
//                         style={{ padding: "5px" }}
//                         className="form-control"
//                         value={selectedSubject}
//                         onChange={handleCheckboxChange}
//                       >
//                         <option className="hidden" value="">
//                           Select Subject
//                         </option>
//                         {blogslist?.map((subject) => (
//                           <>
//                             <option
//                               className="name_item"
//                               key={subject._id} // Use a unique key for each option
//                               data-value={subject.Subjects}
//                               value={subject._id}
//                             >
//                               {subject.subjectTag}
//                             </option>
//                           </>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="col-12 col-md-6">
//                       {/* <select
//                         onChange={(e) => setSelectedChapter(e.target.value)}
//                         className="form-control"
//                       >
//                         <option value="">All Chapters</option>
//                         {blogslist.map((blog, blogIndex) =>
//                           blog.chapter.map((chapter, chapterIndex) =>
//                             chapter.codingbasic.map((coding, codingIndex) => (
//                               <option
//                                 key={${blogIndex}-${chapterIndex}-${codingIndex}}
//                               >
//                                 {coding.Chapters}
//                               </option>
//                             ))
//                           )
//                         )}
//                       </select> */}
//                       <select
//                         type="text"
//                         placeholder="...Select Chapter"
//                         className="form-control"
//                         value={selectedChapter}
//                         onChange={handleCheckboxChange1}
//                       >
//                         <option>...select Chapter...</option>
//                         {blogslist?.map((subject, index) =>
//                           subject?.chapter?.map((chapter) => (
//                             <>
//                               <option
//                                 className="name_item"
//                                 key={chapter._id} // Use a unique key for each option
//                                 data-value={chapter.Chapters}
//                                 value={chapter._id}
//                               >
//                                 {chapter.ChapterTag}
//                               </option>
//                             </>
//                           ))
//                         )}
//                       </select>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <button
//                       className="my-2"
//                       style={{
//                         backgroundColor: "black",
//                         color: "white",
//                         border: "none",
//                         padding: "6px",
//                         borderRadius: "7px",
//                       }}
//                       onClick={handleGoButtonClick}
//                     >
//                       Go
//                     </button>
//                   </div>

//                   <div
//                     className="row card-item  mt-3 pt-3 p-2"
//                     style={{ overflowX: "scroll" }}
//                   >
//                     <div className="col-12 ">
//                       <table className="table text-center table-bordered">
//                         <thead>
//                           <tr>
//                             <th>ID</th>
//                             <th>Module</th>
//                             <th>Chapters </th>
//                             <th>Title</th>
//                             <th>ACTIONS</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredBlogs.length > 0 ? (
//                             filteredBlogs.map((blog, index) =>
//                               blog.chapter.map((chapter, Index) =>
//                                 chapter.codingbasic.map(
//                                   (coding, codingIndex) => (
//                                     <tr key={coding._id}>
//                                       <td>{coding._id}</td>
//                                       <td>{coding.Subjects}</td>
//                                       <td>{coding.Chapters}</td>
//                                       <td>{coding.Title}</td>
//                                       <td>
//                                         <div className="A">
//                                           <Link
//                                             to="/codingupdate"
//                                             style={{ color: "#a5059d" }}
//                                           >
//                                             <span className="material-symbols-outlined">
//                                               edit_square
//                                             </span>
//                                           </Link>
//                                           <span
//                                             className="material-symbols-outlined"
//                                             style={{ color: "red" }}
//                                             onClick={() =>
//                                               handleDelete(
//                                                 blog._id,
//                                                 chapter._id,
//                                                 coding._id
//                                               )
//                                             }
//                                           >
//                                             delete
//                                           </span>
//                                         </div>
//                                       </td>
//                                     </tr>
//                                   )
//                                 )
//                               )
//                             )
//                           ) : (
//                             <tr className="text-start">
//                               <td colSpan="5">No data available</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Codingview;

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Basic.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Codingview() {
  const [blogslist, setblogslist] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  // sai
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

  useEffect(() => {
    fetchblogs();
  }, []);
  const fetchblogs = async () => {
    const api = "http://localhost:4010/v2/subjects";
    try {
      const response = await axios.get(api, {});
      setblogslist(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  const handleGoButtonClick = () => {
    const filteredData = blogslist.filter((blog) =>
      blog.chapter.some((chapter) =>
        chapter.codingbasic.some(
          (coding) =>
            (!selectedSubject || coding.Subjects === selectedSubject) &&
            (!selectedChapter || coding.Chapters === selectedChapter)
        )
      )
    );
    setFilteredBlogs(filteredData);
  };

  const handleDelete = async (subjectId, chapterId, codingBasicId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4010/v4/deletebasic/${subjectId}/${chapterId}/${codingBasicId}`
      );

      if (response.data.status === "success") {
        toast.success("Successfully delete !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        fetchblogs();
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      //   console.error('Error deleting coding basic:', error);
      toast.error("Error deleting coding basic");
    }
  };

  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          {isOpen && (
            <div className=" col-12 col-lg-3 col-md-12 sectioncard121">
              <Sidebar />
              <ToastContainer />
            </div>
          )}
          <div
            className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
              isOpen ? 9 : 12
            }`}
            style={{ height: "100vh", overflowY: "scroll" }}
          >
            <div className=" ">
              <i
                className="fa-solid fa-bars bars d-lg-block d-none"
                onClick={toggleSidebar}
              ></i>
              <div class=" row ">
                <div className="col-lg-11 col-md-12 py-3  ">
                  <div className="row  p-2">
                    <div className="col-12 col-md-6">
                      <select
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="form-control"
                      >
                        <option value="">All Subjects</option>
                        {blogslist.map((blog, blogIndex) =>
                          blog.chapter.map((chapter, chapterIndex) =>
                            chapter.codingbasic.map((coding, codingIndex) => (
                              <option
                                key={`${blogIndex}-${chapterIndex}-${codingIndex}`}
                              >
                                {coding.Subjects}
                              </option>
                            ))
                          )
                        )}
                      </select>
                    </div>

                    <div className="col-12 col-md-6">
                      <select
                        onChange={(e) => setSelectedChapter(e.target.value)}
                        className="form-control"
                      >
                        <option value="">All Chapters</option>
                        {blogslist.map((blog, blogIndex) =>
                          blog.chapter.map((chapter, chapterIndex) =>
                            chapter.codingbasic.map((coding, codingIndex) => (
                              <option
                                key={`${blogIndex}-${chapterIndex}-${codingIndex}`}
                              >
                                {coding.Chapters}
                              </option>
                            ))
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="my-2"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        padding: "6px",
                        borderRadius: "7px",
                      }}
                      onClick={handleGoButtonClick}
                    >
                      Go
                    </button>
                  </div>

                  <div
                    className="row card-item  mt-3 pt-3 p-2"
                    style={{ overflowX: "scroll" }}
                  >
                    <div className="col-12 ">
                      <table className="table text-center table-bordered">
                        <thead>
                          <tr>
                            <th> ID</th>
                            <th>Module</th>
                            <th>Chapters </th>
                            <th>Title</th>
                            <th>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog, index) =>
                              blog.chapter.map((chapters, chapterIndex) =>
                                chapters.codingbasic.map(
                                  (coding, codingIndex) => (
                                    <tr key={coding.id}>
                                      <td>{coding._id}</td>
                                      <td>{coding.Subjects}</td>
                                      <td>{coding.Chapters}</td>
                                      <td>{coding.Title}</td>
                                      <td>
                                        <div className="A">
                                          <Link
                                            to="/codingupdate"
                                            style={{ color: "#a5059d" }}
                                          >
                                            <span className="material-symbols-outlined ">
                                              edit_square
                                            </span>
                                          </Link>
                                          <span
                                            className="material-symbols-outlined "
                                            style={{ color: "red" }}
                                            onClick={() =>
                                              handleDelete(
                                                blog._id,
                                                chapters._id,
                                                coding._id
                                              )
                                            }
                                          >
                                            delete
                                          </span>
                                        </div>
                                      </td>
                                    </tr>
                                  )
                                )
                              )
                            )
                          ) : (
                            <tr className="text-start">
                              <td colSpan="5">No data available</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Codingview;