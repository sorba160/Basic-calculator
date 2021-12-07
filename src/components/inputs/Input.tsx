import React from "react";
import {IInputProps} from "./Types"
const Input: React.FC <IInputProps> = ({ result }) => {
  return <div className="input-content">{result}</div>;
};

export default Input;