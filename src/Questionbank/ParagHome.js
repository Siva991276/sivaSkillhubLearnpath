import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./parag.css";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ParagHome = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [reference, setReferencce] = useState("");
  const [question, setQuestion] = useState("");
  const [allquestionData, setallquestionData] = useState("");
  const [questionImage, setQuestionImage] = useState("");

  let navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // const token = Cookies.get("token");
    if (
      selectedSubject &&
      selectedChapter &&
      selectedDifficulty &&
      reference &&
      question !== ""
    ) {
      try {
        const QuestionData = {
          Subjects: selectedSubject,
          Chapters: selectedChapter,
          Difficulty: selectedDifficulty,
          Reference: reference,
          Question: question,
        };
        console.log(QuestionData);
        const response = await axios.post(
          `http://localhost:4010/v2/addparaMcq/${selectedSubjectId}/${selectedChapterId}`,
          QuestionData
        );

        setallquestionData(response.data);
        console.log(response.data);
        if (response.status === 200) {
          toast.success("Paragraph Added", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            className: "custom-toast-custom",
          });
        }
      } catch (error) {
        console.log(error.response.data);
        toast.error("Question already added");
      }
    } else {
      toast.warning("Enter Required details");
    }
  };
  const [selectedSubjectId, setSelectedSubjectId] = useState([]);
  const handleSubjectTagTypeSelection = (event) => {
    setSelectedSubject(
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-value"
      )
    );
    setSelectedSubjectId(
      event.target.options[event.target.selectedIndex].getAttribute("value")
    );
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

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    menuBtnChange();
  };
  const [allsubjectsData, setAllsubjectsData] = useState([]);
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
  useEffect(() => {
    fetchsubjectsData();
  }, []);

  const handleEditorChange = (content, editor) => {
    setQuestion(content); // Update the state with the new content
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
            <div className=" col-12 col-lg-3 col-md-12 sectioncard121">
              <Sidebar />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          )}
          <div
            className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
              isOpen ? 9 : 12
            }`}
          >
            <div className="ml-5 d-lg-block d-none">
              <i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
              <div class="paragCreate mx-5 mt-5 ''">
                <h6>
                  <b>CREATE PARAGRAPH</b>
                </h6>
                <form>
                  <div className="paragSubject">
                    <label>
                      <b>
                        Subjects <span>*</span>
                      </b>
                    </label>
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
                  </div>
                  <div className="paragChapter">
                    <label>
                      <b>Chapters *</b>
                    </label>
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
                  </div>
                  <p className="my-3">
                    <b>Difficulty *</b>
                  </p>
                  <div className="row">
                    <div className="d-flex flex-row col-4">
                      <div>
                        <input
                          type="radio"
                          name="diffculty"
                          value="easy"
                          onChange={handleDifficultyChange}
                          checked={selectedDifficulty === "easy"}
                        />
                      </div>
                      <div className="px-2">Easy</div>
                    </div>
                    <div className="d-flex flex-row col-4">
                      <div>
                        <input
                          type="radio"
                          name="diffculty"
                          value="Medium"
                          onChange={handleDifficultyChange}
                          checked={selectedDifficulty === "Medium"}
                        />
                      </div>
                      <div className="mx-2">Medium</div>
                    </div>

                    <div className="d-flex flex-row col-4">
                      <div>
                        <input
                          type="radio"
                          name="diffculty"
                          value="Hard"
                          onChange={handleDifficultyChange}
                          checked={selectedDifficulty === "Hard"}
                        />
                      </div>
                      <div className="mx-2">Hard</div>
                    </div>
                  </div>
                  <div className="paragRef">
                    <label>
                      <b>Reference *</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Reference"
                      onChange={(e) => setReferencce(e.target.value)}
                    ></input>
                  </div>
                  <p className="my-2">
                    <b>Question*</b>
                  </p>
                  <div>
                    <Editor
                      apiKey="7i21ngugg1cjfakayo2q7hic9y1avm1aykresfo9pf3jtnaq"
                      init={{
                        plugins:
                          "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                        toolbar:
                          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                        tinycomments_mode: "embedded",
                        tinycomments_author: "Author name",
                        mergetags_list: [
                          { value: "First.Name", title: "First Name" },
                          { value: "Email", title: "Email" },
                        ],
                        ai_request: (request, respondWith) =>
                          respondWith.string(() =>
                            Promise.reject("See docs to implement AI Assistant")
                          ),
                      }}
                      initialValue=""
                      value={question}
                      onEditorChange={handleEditorChange}
                    />
                  </div>
                  <div className="my-1">
                    <p>
                      <b>Question Image</b>
                    </p>
                  </div>
                  <div className="my-1">
                    <button type="button" className="paragImg">
                      Choose Image
                    </button>
                  </div>
                  <div className="my-3">
                    <button type="button" className="paragInsert">
                      Insert Image
                    </button>
                  </div>
                  <div className="my-3">
                    <button
                      type="submit"
                      className="paragbtn"
                      onClick={(e) => onSubmitForm(e)}
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParagHome;
