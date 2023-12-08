import React, { useState, useRef } from "react";
import "./Basic.css";
import JoditEditor from "jodit-react";
// import { Editor } from '@tinymce/tinymce-react';

const Basic = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <>
      <div className="basic">
        <div className="my-2">
          <h6 className="headingBasic">
            Subjetcts<span className="bcolor">*</span>
          </h6>
          <select class="form-select">
            <option selected> Select Subject</option>
            <option value="Python">Python</option>
            <option value="Javascript">Javascript</option>
            <option value="React.js">React.js</option>
          </select>
        </div>
        <div className="my-2">
          <h6 className="headingBasic">
            Chapter<span className="bcolor">*</span>
          </h6>
          <select class="form-select">
            <option selected> Select Chapter</option>
            <option value="Data type">Python</option>
            <option value="React hooks">React hooks</option>
            <option value=" life cycle method">life cycle method</option>
          </select>
        </div>
        <div className="my-2">
          <h6 className="headingBasic">
            Title<span className="bcolor">*</span>
          </h6>
          <select class="form-select">
            <option selected>Select Title</option>
            <option value="Python">Python</option>
            <option value="Javascript">Javascript</option>
            <option value="React.js">React.js</option>
          </select>
        </div>
        <div className="my-2">
          <h6 className="headingBasic">
            Programming language<span className="bcolor">*</span>
          </h6>
          <select class="form-select">
            <option selected>Select programming language</option>
            <option value="Python">Python</option>
            <option value="Javascript">Javascript</option>
            <option value="React.js">React.js</option>
          </select>
        </div>
        <div className="description">
          <h6 className="headingBasic">
            Description<span className="bcolor">*</span>
          </h6>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          />

          <label htmlFor="myfile">
            <h6 className="my-2 mx-2">Description Image</h6>
          </label>
          <input type="file" id="myfile" name="myfile" />
        </div>
        <div className="">
          <h6 className="headingBasic">
            Constraints<span className="bcolor">*</span>
          </h6>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          />

          <label htmlFor="myfile">
            <h6 className="my-2 mx-2">Constraints Image</h6>
          </label>
          <input type="file" id="myfile" name="myfile" />
        </div>
      </div>
    </>
  );
};

export default Basic;
