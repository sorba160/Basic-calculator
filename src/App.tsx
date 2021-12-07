import React from "react";
import "./App.scss";
import Calculator from "../src/components/calculator/Calculator";

const App: React.FC = () => {
  return (
    <div className="App">
      <Calculator />
    </div>
  )
};

export default App;