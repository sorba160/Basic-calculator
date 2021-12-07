import React, { useState } from "react";
import Button from "../button/Button";
import Input from "../inputs/Input";
import "./Calculator.scss";

const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>("");

  return (
    <div className="calculator">
      <Input result={result} />
      <Button result={result} setResult={setResult} />
    </div>
  );
};

export default Calculator;