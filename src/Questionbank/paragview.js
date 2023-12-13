import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

const ParagView = () => {
  const navigate = useNavigate();
  const [selectQuestionType, setSelectQuestionType] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [reference, setReferencce] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allquestionData, setallquestionData] = useState("");
  const [allsubjectsData, setAllsubjectsData] = useState([]);
  const [allParagList, setallParagList] = useState([]);

  const fetchsubjectsData = async () => {
    const api = "http://localhost:4010/v2/subjects";
    try {
      const response = await axios.get(api, {});
      const data = response.data;
      setAllsubjectsData(response.data);
    } catch (error) {
      console.error("Error fetch blogs:", error);
    }
  };

  const fetchMCQs = async () => {
    const api =
      "http://localhost:4010/v2/getparamcq/subjectId/chapterId/paragMCQ";

    try {
      const response = await axios.get(api);
      setallParagList(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchsubjectsData();
    fetchMCQs();
  }, []);
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
  const [selectedSubjectId, setSelectedSubjectId] = useState([]);
  const [filteredSubjectIdArray, setFilteredSubjectIdArray] = useState({});
  console.log(filteredSubjectIdArray);

  const handleSubjectTagTypeSelection = (event) => {
    setSelectedSubject(
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-value"
      )
    );
    setSelectedSubjectId(
      event.target.options[event.target.selectedIndex].getAttribute("value")
    );
    const subjectfilterId =
      event.target.options[event.target.selectedIndex].getAttribute("value");

    const result = allsubjectsData?.filter(
      (item) => item._id === subjectfilterId
    );
    console.log("Filtered Data:", result);
    setFilteredSubjectIdArray(result.map((each) => each.chapter));
  };
  const [selectedChapterId, setSelectedChapterId] = useState([]);

  const handleChapterTagTypeSelection = (event) => {
    setSelectedChapter(
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-value"
      )
    );
    setSelectedChapterId(
      event.target.options[event.target.selectedIndex].getAttribute("value")
    );
  };
  const [selectedReferenceId, setSelectedReferenceId] = useState([]);
  const handleReferenceTypeSelection = (event) => {
    setReferencce(
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-value"
      )
    );
    setSelectedReferenceId(
      event.target.options[event.target.selectedIndex].getAttribute("value")
    );
  };
  // const [selectedQuestionId, setSelectedQuestionId] = useState([]);
  const handleQuestionTypeSelection = (event) => {
    setQuestion(
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-value"
      )
    );
  };
  const [selectedMcqList, setSelectedMcqList] = useState({});

  const handleGoButtonClick = () => {
    const filteredMCQs = allsubjectsData
      .filter((subject) => subject?._id === selectedSubjectId)
      .flatMap(
        (subject) =>
          subject.chapter.find((chapter) => chapter?._id === selectedChapterId)
            ?.paragMCQ || []
      )
      .find((mcq) => mcq?._id);

    console.log(filteredMCQs);
    setSelectedMcqList(filteredMCQs);
  };
  console.log("selectedMcqList", selectedMcqList);

  const handleClearFilterButtonClick = () => {
    setSelectedMcqList("");
  };
  const gotoviewmcq = (McqId) => {
    navigate("/ParticularMcaView", {
      state: {
        subjectId: selectedSubjectId,
        chapterId: selectedChapterId,
        McqId: McqId,
      },
    });
  };
  const gotoUpdatemcq = (McqId) => {
    navigate("/Mcqupdate", {
      state: {
        subjectId: selectedSubjectId,
        chapterId: selectedChapterId,
        McqId: McqId,
      },
    });
  };
  const GotohandleDeleteClick = (McqId) => {
    // const token = Cookies.get("token");
    const api = `http://localhost:4010/v1/deleteMCQ/${selectedSubjectId}/${selectedChapterId}/${McqId}`;
    try {
      const response = axios.delete(api);
      //   console.log("Password updated successfully:", response.data);
      toast("Deleted Institute successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast-custom",
      });
      fetchsubjectsData();
      fetchMCQs();
    } catch (error) {
      console.error("Error Delete Institute:", error);
    }
    // toast.warning("Pending some fields Please check")
  };

  // const columns: GridColDef[] = [
  const columns = [
    { field: "SNO", headerName: "SNO", width: 100 },
    { field: "ID", headerName: "ID", width: 100 },
    { field: "Modulue", headerName: "Modulue", width: 120 },
    { field: "Chapter", headerName: "Chapter", width: 120 },
    { field: "Question", headerName: "Question", width: 120 },
    { field: "Diffculty", headerName: "Diffculty", width: 120 },
    { field: "Reference", headerName: "Reference", width: 120 },
    {
      field: "ACTION",
      headerName: "Action",
      width: 120,
      renderCell: (params) => renderActionButtons(params.row),
    },
  ];

  const headerColumns = columns.map((col) => ({
    field: col.field,
    headerName: col.headerName,
    width: col.width,
    renderCell: col.renderCell,
  }));

  const renderActionButtons = (McqId) => (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() =>
          navigate("/paragEdit", {
            state: {
              subjectId: selectedSubjectId,
              chapterId: selectedChapterId,
              McqId: McqId.id,
            },
          })
        }
      >
        <i
          className="fa-sharp fa-solid fa-pen"
          style={{ color: "skyblue" }}
        ></i>
      </button>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        // onClick={() => handleDelete(allSubjects._id, allChapters._id)}
      >
        <i
          className="fa-solid fa-trash-can "
          // onClick={() => {
          // 	setIsModalOpen(true);
          // 	// Additional logic if needed
          // }}
          style={{ color: "red" }}
        ></i>
      </button>
    </div>
  );

  // const rows = selectedMcqList.map((blog, index) => ({

  // 	SNO: index+1,
  // 	id: blog._id,
  // 	Modulue: `hyffgfg`, // Assuming "Name" is the property name for the chapter name
  // 	Chapter: `jkjhjhghfgfv`, // Assuming "subjectTag" is the property name for the subject tag
  // 	Question: blog.Question, // Assuming "totalqustions" is the property name for the total questions
  // 	Diffculty: ``,
  // 	Reference:``,
  // 	ACTION: renderActionButtons(blog),
  // }));
  if (Object.keys(selectedMcqList)?.length) {
    console.log("Data");
    var rows = [
      {
        SNO: 1,
        id: selectedMcqList?._id,
        Modulue: `1`, // Assuming "Name" is the property name for the chapter name
        Chapter: `Chapter2`, // Assuming "subjectTag" is the property name for the subject tag
        Question: selectedMcqList?.Question, // Assuming "totalqustions" is the property name for the total questions
        Diffculty: selectedMcqList?.Difficulty,
        Reference: selectedMcqList?.Reference,
        ACTION: renderActionButtons(selectedMcqList?._id),
      },
    ];
  } else var rows = [];
  return (
    <div>
      <div className="container">
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
                  <b>Filter Graph Question</b>
                  <div className="col-6">
                    <select
                      style={{ padding: "5px" }}
                      className="form-control"
                      onChange={handleSubjectTagTypeSelection}
                    >
                      <option className="hidden" value="">
                        Select Subject
                      </option>
                      {allsubjectsData?.map((subject) => (
                        <>
                          <option
                            className="name_item"
                            key={subject._id} // Use a unique key for each option
                            data-value={subject.subjectTag}
                            value={subject._id}
                          >
                            {subject.subjectTag}
                          </option>
                        </>
                      ))}
                    </select>
                    <p>Select Subject</p>
                  </div>
                  <div className="col-6">
                    <select
                      type="text"
                      placeholder="...Select Chapter"
                      className="form-control"
                      onChange={handleChapterTagTypeSelection}
                    >
                      <option>...select Chapter...</option>
                      {allsubjectsData?.map((subject, index) =>
                        subject?.chapter?.map((chapter) => (
                          <>
                            <option
                              className="name_item"
                              key={chapter._id} // Use a unique key for each option
                              data-value={chapter.ChapterTag}
                              value={chapter._id}
                            >
                              {chapter.ChapterTag}
                            </option>
                          </>
                        ))
                      )}
                    </select>
                    <p>Select Chapter</p>
                  </div>
                  <div className="col-6">
                    <select
                      type="text"
                      placeholder="...Select Reference"
                      className="form-control"
                      onChange={handleReferenceTypeSelection}
                    >
                      <option>...select Chapter...</option>
                      {allsubjectsData?.map((subject, index) =>
                        subject?.chapter?.map((chapter) =>
                          chapter?.paragMCQ?.map((each) => (
                            <>
                              <option
                                className="name_item"
                                key={each._id} // Use a unique key for each option
                                data-value={each.Reference}
                                value={each._id}
                              >
                                {each.Reference}
                              </option>
                            </>
                          ))
                        )
                      )}
                    </select>
                    <label>Reference</label>
                  </div>
                  <div className="col-lg-1 col-md-6 col-4 text-center">
                    <button
                      className=" my-2"
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
                  <div style={{ height: "auto", width: "100%" }}>
                    <DataGrid
                      rows={rows}
                      columns={headerColumns}
                      initialState={{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 5 },
                        },
                      }}
                      pageSizeOptions={[5, 10]}
                    />
                  </div>
                </div>
                {allParagList.map((blog, index) => (
                  <p key={index}>{blog.questiontype}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ParagView;
