import React, { useState, Fragment, useEffect, useRef, createRef } from 'react';
// import TextareaAutosize from "react-textarea-autosize";

const Editor = () => {
  const [textFields, setTextFields] = useState([
    {
      data: "",
      index: 0
    }
  ]);
  const inputFocus = useRef(null);

  const handleInputChange = (index, event) => {
    const values = [...textFields];
    values[index].data = event.target.value;
    setTextFields(values);
  }

  const handleAddFields = () => {
    const values = [...textFields];
    values.push({ data: "", index: values[values.length - 1] + 1 });    
    setTextFields(values);
  }

  const handleRemoveFields = (index) => {
    const values = [...textFields];
    if (index !== 0) {
      if (values[index].data.length === 0) {
        values.splice(index, 1);
        setTextFields(values);
      }
    }
  }

  useEffect(() => {
    console.log(inputFocus);
    textFields.map(textField => textField = createRef());
  }, [textFields])

  return (
    <div className="container-content">
      <p>Editor</p>
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
              else if (event.key === 'Backspace') {
                return handleRemoveFields(index);
              }
            }}
          ref={inputFocus}
          autoFocus
          />
        </Fragment>
      ))}
    </div>
  )
}

export default Editor;