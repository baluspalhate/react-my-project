import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter here text");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="MyBox"
          rows="10"
        ></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>
          clear text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraSpaces}
        >
          space
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text summery</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and words {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
