import React, { useState, Fragment, useRef, createRef } from 'react';
import TextareaAutosize from "react-textarea-autosize";

const initial_style = `
  font-size: inherit;
`

const heading1_style = `
  font-size: 24px;
  font-weight: bold;
  height: 43px;
`

const Editor = () => {
  const inputFocus = useRef([createRef()]);
  const [textFields, setTextFields] = useState([
    {
      type: "",
      data: "",
    }
  ]);

  const handleInputChange = (index, event) => {
    const values = [...textFields];
    values[index].data = event.target.value;
    if (event.target.value === '# ') {
      inputFocus.current[index].current.style = heading1_style;
      values[index].type = 'h1';
      values[index].data = '';
      setTextFields(values);
    }
    setTextFields(values);
  }

  const handleAddFields = () => {
    const values = [...textFields];
    // const focuses = [...inputFocus.current];
    values.push({ type: '', data: "" });
    inputFocus.current.push(createRef());
    setTextFields(values);
  }

  const handleRemoveFields = (index, event) => {
    const values = [...textFields];
    if (index !== 0) {
      if (values[index].data.length === 0) {
        values.splice(index, 1);
        inputFocus.current.splice(index, 1);
        inputFocus.current[index - 1].current.focus();
        setTextFields(values);
      }
      else{
        handleLine(index, event);
      }
    }
    else{
      if(values[index].data.length === 0){
        inputFocus.current[index].current.style = initial_style;
      }
      else{
        handleLine(index, event);
      }
    }
  }

  const handleLine = (index, event) => {
    const lines = textFields[index].data.split(/\r*\n/);
    console.log(lines.length);
    console.log(textFields[index].data);
    inputFocus.current[index].current.style = `height: ${28 + (22 * (lines.length))}px`;
  }

  return (
    <div className="container-content">
      <p>Editor</p>
      <input type="text" className="editor-title" placeholder="Untitled" />
      <TextareaAutosize />
      {textFields.map((textField, index) => (
        <Fragment key={`${textField}~${index}`}>
          <textarea
            className="input"
            placeholder="Input here"
            name={`input${index}`}
            value={textField.data}
            onChange={event => handleInputChange(index, event)}
            onKeyDown={event => {
              if (!event.shiftKey && event.key === 'Enter') {
                event.preventDefault();
                return handleAddFields();
              }
              else if(event.shiftKey && event.key === 'Enter'){
                return handleLine(index, event);
              }
              else if (event.key === 'Backspace') {
                return handleRemoveFields(index, event);
              }
            }}
            ref={inputFocus.current[index]}
            autoFocus
          />
        </Fragment>
      ))}
    </div>
  )
}

export default Editor;