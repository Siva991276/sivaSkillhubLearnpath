import React, { useState } from "react";
import Sidebar from "../Sidebar";
import "./parag.css";
import { Editor } from "@tinymce/tinymce-react";

const ParagHome = () => {
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
                    <select>
                      <option>React</option>
                    </select>
                  </div>
                  <div className="paragChapter">
                    <label>
                      <b>Chapters *</b>
                    </label>
                    <select>
                      <option>...select Subject..</option>
                    </select>
                  </div>
                  <p className="my-3">
                    <b>Difficulty *</b>
                  </p>
                  <div className="row">
                    <div className="d-flex flex-row col-4">
                      <div>
                        <input type="radio" />
                      </div>
                      <div className="px-2">Diffcult</div>
                    </div>
                    <div className="d-flex flex-row col-4">
                      <div>
                        <input type="radio" />
                      </div>
                      <div className="mx-2">Easy</div>
                    </div>

                    <div className="d-flex flex-row col-4">
                      <div>
                        <input type="radio" />
                      </div>
                      <div className="mx-2">Medium</div>
                    </div>
                  </div>
                  <div className="paragRef">
                    <label>
                      <b>Reference *</b>
                    </label>
                    <input></input>
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
                    />
                  </div>
                  <div className="my-1">
                    <p>
                      <b>Question Image</b>
                    </p>
                  </div>
                  <div className="my-1">
                    <button className="paragImg">Choose Image</button>
                  </div>
                  <div className="my-3">
                    <button className="paragInsert">Insert Image</button>
                  </div>
                  <div className="my-3">
                    <button type="submit" className="paragbtn">
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
