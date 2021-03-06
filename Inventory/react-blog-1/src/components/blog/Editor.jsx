import React, { useState, useRef, createRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { InitialEl, Header1El } from "./elements/inputElements";

const initial_style = `
  font-size: 14px;
  height: 30px;
`;

const heading1_style = `
  font-size: 1.875em;
  font-weight: 600;
`;

const heading2_style = `
  font-size: 1.5em;
  font-weight: 600;
`;

const heading3_style = `
  font-size: 1.25em;
  font-weight: 600;
`;

const Editor = () => {
  const inputFocus = useRef([createRef()]);
  const [textFields, setTextFields] = useState([
    {
      type: "init",
      data: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const values = [...textFields];
    const inputText = event.target.value;
    values[index].data = inputText;
    console.log("test");
    console.log(event.target.value);
    if (inputText.slice(0, 2) === "# ") {
      inputFocus.current[index].current.style = heading1_style;
      values[index].type = "h1";
      values[index].data = "";
      setTextFields(values);
    } else if (inputText.slice(0, 3) === "## ") {
      inputFocus.current[index].current.style = heading2_style;
      values[index].type = "h2";
      values[index].data = "";
      setTextFields(values);
    } else if (inputText.slice(0, 4) === "### ") {
      inputFocus.current[index].current.style = heading3_style;
      values[index].type = "h2";
      values[index].data = "";
      setTextFields(values);
    } else {
      setTextFields(values);
    }
  };

  const handleAddFields = () => {
    const values = [...textFields];
    // const focuses = [...inputFocus.current];
    values.push({ type: "", data: "" });
    inputFocus.current.push(createRef());
    setTextFields(values);
  };

  const handleRemoveFields = (index, event) => {
    const values = [...textFields];
    if (index !== 0) {
      if (values[index].data.length === 0) {
        values.splice(index, 1);
        inputFocus.current.splice(index, 1);
        inputFocus.current[index - 1].current.focus();
        setTextFields(values);
      } else {
        handleLine(index, event);
      }
    } else {
      if (values[index].data.length === 0) {
        inputFocus.current[index].current.style = initial_style;
      } else {
        // handleLine(index, event);
      }
    }
  };

  const handleLine = (index, event) => {
    const lines = event.target.value;
    console.log(`lines : ${lines}`);
    console.log(lines.split("\n"));
    // const lines = textFields[index].data.split(/\r*\n/);
    // console.log(lines);
    // console.log(textFields[index].data);
    // inputFocus.current[index].current.style = `height: ${
    //   28 + 22 * lines.length
    // }px`;
  };

  return (
    <div className="container-content">
      <p>Editor</p>
      <input type="text" className="editor-title" placeholder="Untitled" />
      <TextareaAutosize />
      {textFields.map((textField, index) => {
        if (textField.type === "init") {
          return (
            <InitialEl
              key={`${textField}~${index}`}
              name={`input${index}`}
              value={textField.data}
              onChange={(event) => handleInputChange(index, event)}
              onKeyDown={(event) => {
                if (!event.shiftKey && event.key === "Enter") {
                  event.preventDefault();
                  return handleAddFields();
                  // } else if (event.shiftKey && event.key === "Enter") {
                  //   return handleLine(index, event);
                } else if (event.key === "Backspace") {
                  return handleRemoveFields(index, event);
                } else {
                  // console.log(event.key);
                }
              }}
              inputRef={inputFocus.current[index]}
            />
          );
        } else if (textField.type === "h1") {
          return (
            <Header1El
              key={`${textField}~${index}`}
              name={`input${index}`}
              value={textField.data}
              onChange={(event) => handleInputChange(index, event)}
              onKeyDown={(event) => {
                if (!event.shiftKey && event.key === "Enter") {
                  event.preventDefault();
                  return handleAddFields();
                  // } else if (event.shiftKey && event.key === "Enter") {
                  //   return handleLine(index, event);
                } else if (event.key === "Backspace") {
                  return handleRemoveFields(index, event);
                } else {
                  // console.log(event.key);
                }
              }}
              inputRef={inputFocus.current[index]}
            />
          );
        } else {
          return (
            <TextareaAutosize
              key={`${textField}~${index}`}
              className="input"
              placeholder="Input here"
              name={`input${index}`}
              value={textField.data}
              onChange={(event) => handleInputChange(index, event)}
              onKeyDown={(event) => {
                if (!event.shiftKey && event.key === "Enter") {
                  event.preventDefault();
                  return handleAddFields();
                  // } else if (event.shiftKey && event.key === "Enter") {
                  //   return handleLine(index, event);
                } else if (event.key === "Backspace") {
                  return handleRemoveFields(index, event);
                } else {
                  // console.log(event.key);
                }
              }}
              inputRef={inputFocus.current[index]}
              autoFocus
            />
          );
        }
      })}
    </div>
  );
};

export default Editor;
