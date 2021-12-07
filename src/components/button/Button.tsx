import React from "react";
import { IButtonProps } from "./Types";
import { Item } from "./Types";
const Button: React.FC<IButtonProps> = ({ result, setResult }) => {
  const handleClick = (e: string) => {
    setResult(result.concat(e));
  };
  const clearClick = () => {
    setResult("");
  };
  const backspaceClick = () => {
    setResult(result.slice(0, -1));
  };
  const calculateClick = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("ERROR");
    }
  };
  const itemsArr: Item[] = [
    {
      symbol: "Clear",
      type: "operation",
      key: 1,
      value: null,
      onclick: clearClick,
      className: "blue",
      id: "clear",
    },
    {
      symbol: <i className="fas fa-backspace"></i>,
      type: "operation",
      key: 2,
      value: null,
      onclick: backspaceClick,
      className: "blue",
      id: "",
    },
    {
      symbol: "7",
      type: "num",
      key: 4,
      value: "7",
      onclick: () => handleClick("7"),
      className: "num",
      id: "",
    },
    {
      symbol: <>&divide;</>,
      type: "operator",
      key: 3,
      value: null,
      onclick: () => handleClick("/"),
      className: "blue",
      id: "",
    },

    {
      symbol: "8",
      type: "num",
      key: 5,
      value: "8",
      onclick: () => handleClick("8"),
      className: "num",
      id: "",
    },
    {
      symbol: "9",
      type: "num",
      key: 6,
      value: "9",
      onclick: () => handleClick("9"),
      className: "num",
      id: "",
    },
    {
      symbol: "4",
      type: "num",
      key: 8,
      value: "4",
      onclick: () => handleClick("4"),
      className: "num",
      id: "",
    },
    {
      symbol: <>&times;</>,
      type: "operator",
      key: 7,
      value: "*",
      onclick: () => handleClick("*"),
      className: "blue",
      id: "",
    },

    {
      symbol: "5",
      type: "num",
      key: 9,
      value: "5",
      onclick: () => handleClick("5"),
      className: "num",
      id: "",
    },
    {
      symbol: "6",
      type: "num",
      key: 10,
      value: "6",
      onclick: () => handleClick("6"),
      className: "num",
      id: "",
    },
    {
      symbol: "1",
      type: "num",
      key: 12,
      value: "1",
      onclick: () => handleClick("1"),
      className: "num",
      id: "",
    },
    {
      symbol: <>&minus;</>,
      type: "operator",
      key: 11,
      value: "-",
      onclick: () => handleClick("-"),
      className: "blue",
      id: "",
    },

    {
      symbol: "2",
      type: "num",
      key: 13,
      value: "2",
      onclick: () => handleClick("2"),
      className: "num",
      id: "",
    },
    {
      symbol: "3",
      type: "num",
      key: 14,
      value: "3",
      onclick: () => handleClick("3"),
      className: "num",
      id: "",
    },
    {
      symbol: "0",
      type: "num",
      key: 16,
      value: "0",
      onclick: () => handleClick("0"),
      className: "num",
      id: "",
    },
    {
      symbol: <>&#43;</>,
      type: "operator",
      key: 15,
      value: "+",
      onclick: () => handleClick("+"),
      className: "blue",
      id: "",
    },

    {
      symbol: ".",
      type: "operator",
      key: 17,
      value: ".",
      onclick: () => handleClick("."),
      className: "blue",
      id: "",
    },
    {
      symbol: "=",
      type: "equal",
      key: 18,
      value: "=",
      onclick: calculateClick,
      className: "blue",
      id: "equal",
    },
  ];
  return (
    <div className="num-pad">
      {itemsArr.map((item) => (
        <button
          id={item.id}
          className={item.className}
          onClick={item.onclick}
          key={item.key}
        >
          {item.symbol}
        </button>
      ))}
    </div>
  );
};

export default Button;