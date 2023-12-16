import React, { useState, useRef } from "react";
import "./Basic.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEffect } from "react";
const Basic = () => {
  const [editorData, setEditorData] = useState("");
  const [Subjects, setSubjects] = useState("");
  const [Chapters, setChapters] = useState("");
  const [Title, setTitle] = useState("");
  const [Programminglanguage, setProgramminglanguage] = useState("");
  const [Description, setDescription] = useState("");
  const [Constraints, setConstraints] = useState("");
  const useData2 = {
    Subjects: Subjects,
    Chapters: Chapters,
    Title: Title,
    Programminglanguage: Programminglanguage,
    Description: Description,
    Constraints: Constraints,
  };
  console.log(useData2);

  const [selectedSubjectId, setSelectedSubjectId] = useState("");

  const handleSubjectTagTypeSelection = (event) => {
    setSelectedSubjectId(event.target.value);
    setSubjects(
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-value"
      )
    );
  };

  console.log(selectedSubjectId);

  const [selectedChapterId, setSelectedChapterId] = useState("");

  const handleChapterTagTypeSelection = (event) => {
    setSelectedChapterId(event.target.value);
    setChapters(
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-value"
      )
    );
  };

  console.log(selectedChapterId);
  const [allsubjectsData, setAllsubjectsData] = useState([]);
  const fetchsubjectsData = async () => {
    const api = "http://localhost:4010/v4/getbasic";
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
  const onSubmitForm3 = (e) => {
    e.preventDefault();

    if (
      (Subjects,
      Chapters,
      Title,
      Programminglanguage,
      Description,
      Constraints !== "")
    ) {
      axios
        .post(
            `http://localhost:4010/v4/addbasic/${selectedSubjectId}/${selectedChapterId}`,
          useData2
        )
        .then((response) => {
          if (response.status === 200) {
            let jwtToken = response.data.token;
            localStorage.setItem("token", jwtToken);

            toast.success("Coding Create Successfull", {
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
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(" Failed");
        });
    } else {
      toast.success("Please fill in all fields", {
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
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form className="basic" onSubmit={onSubmitForm3}>
        <div className="row">
          <div className="col-md-6">
            <div className="my-2">
              <h6 className="">
                Subjetcts<span className="bcolor">*</span>
              </h6>

              <select
                style={{ padding: "5px" }}
                className="form-control"
                value={selectedSubjectId}
                onChange={handleSubjectTagTypeSelection}
              >
                <option className="hidden" value="">
                  Select Subject
                </option>
                {allsubjectsData?.map((subject) => (
                  <option
                    className="name_item"
                    key={subject._id}
                    data-value={subject.name}
                    value={subject._id}
                  >
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="my-2">
              <h6 className="">
                Chapter<span className="bcolor">*</span>
              </h6>

              <select
                type="text"
                placeholder="...Select Chapter"
                className="form-control"
                onChange={handleChapterTagTypeSelection}
                value={selectedChapterId}
              >
                <option>...select Chapter...</option>
                {allsubjectsData?.map((subject) =>
                  subject?.chapter?.map((chapter) => (
                    <option
                      className="name_item"
                      key={chapter._id} // Use a unique key for each option
                      data-value={chapter.Name}
                      value={chapter._id}
                    >
                      {chapter.Name}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="my-2">
              <h6 className="">
                Title<span className="bcolor">*</span>
              </h6>
              <select
                class="form-select"
                onChange={(e) => setTitle(e.target.value)}
                value={Title}
              >
                <option selected>Select Title</option>
                <option value="Python">Python</option>
                <option value="Javascript">Javascript</option>
                <option value="React.js">React.js</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="my-2">
              <h6 className="">
                Programming language<span className="bcolor">*</span>
              </h6>
              <select
                class="form-select"
                onChange={(e) => setProgramminglanguage(e.target.value)}
                value={Programminglanguage}
              >
                <option selected>Select programming language</option>
                <option value="Python">Python</option>
                <option value="Javascript">Javascript</option>
                <option value="React.js">React.js</option>
              </select>
            </div>
          </div>
        </div>

        <div className="description">
          <h6 className="my-3">
            Description<span className="bcolor">*</span>
          </h6>
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setDescription(data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
            value={Description}
          />

          <label htmlFor="myfile">
            <h6 className="my-3">Description Image</h6>
          </label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            className="form-control"
          />
        </div>
        <div className="my-3">
          <h6 className="">
            Constraints<span className="bcolor">*</span>
          </h6>
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setConstraints(data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
            value={Constraints}
          />

          <label htmlFor="myfile">
            <h6 className="my-3">Constraints Image</h6>
          </label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            className="form-control"
          />
          <br />
          <button className="btn_submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Basic;