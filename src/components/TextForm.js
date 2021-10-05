import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const convertUpperCase = () => {
    setText(text.toUpperCase());
  };

  const convertLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.alert("Copied to clipboard", "success");
  };

  const removeSpaces = () => {
    let newString = text.replace(/\s+/g, " ").trim();
    setText(newString);
  };

  var previewText =
    text.length === 0 ? "Enter something to preview it here" : text;

  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div>
        <div className="my-3 container">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={changeHandler}
            id="textarea"
            rows="8"
          ></textarea>
          <button
            className="btn btn-success my-3 me-2"
            onClick={convertUpperCase}
          >
            Convert to Uppercase
          </button>
          <button className="btn btn-success me-2" onClick={convertLowerCase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-success me-2" onClick={clearText}>
            Clear Text
          </button>
          <button className="btn btn-success me-2" onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
          <button className="btn btn-success me-2" onClick={removeSpaces}>
            Remove Extra spaces
          </button>
        </div>
      </div>
      <div className="container my-3">
        <div className="card">
          <h5 className="card-header">Your Text Summary</h5>
          <div className="card-body">
            <p className="card-text">
              {text.split(" ").length - 1} words and {text.length} characters
            </p>
            <p className="card-text">
              Reading time: {(text.split(" ").length - 1) / 250} minutes
            </p>
          </div>
        </div>
        <h2 className="my-2">Preview</h2>
        <div className="card">
          <div className="card-body">{previewText}</div>
        </div>
      </div>
    </div>
  );
}

TextForm.defaultProps = {
  heading: "Demo Text",
};
