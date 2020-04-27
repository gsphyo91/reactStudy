import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const handleTest = (event) => {
  console.log(event.target.value);
}

export const InitialEl = (props) => (
  <TextareaAutosize
    className="input"
    placeholder="Input here"
    name={props.name}
    value={props.value}
    onChange={handleTest}
    onKeyDown={props.onKeyDown}
    inputRef={props.inputRef}
    autoFocus
  />
);

export const Header1El = (props) => (
  <TextareaAutosize
    className="input"
    placeholder="H1"
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    onKeyDown={props.onKeyDown}
    inputRef={props.inputRef}
    autoFocus
  />
);
