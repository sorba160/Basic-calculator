import { useState } from "react";
import './Calculator.scss'

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const calcOperators = ["+", "-", "×", "÷"];
const equalSign = "=";
const clear = "C";

export const calculateExpression = (expression: string) => {
    const mulRegex = /×/g;
    const divRegex = /÷/g;
    const divideByZero = /\/0/g;

    const toEvaluate = expression.replace(mulRegex, "*").replace(divRegex, "/");

    try {
        if (divideByZero.test(toEvaluate)) {
            throw new Error("Can not divide by 0!");
        }

        // todo - refactor eval later
        const result = eval(toEvaluate);

        return result;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

const Calculator = () => {
    const [value, setValue] = useState("");

    const calculate = () => {
        const results = calculateExpression(value);
        setValue(results);
    };

    const clearValue = () => setValue("");

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <input
                type="text"
                defaultValue={value}
                placeholder="calculate"
                disabled
            />
            <div className="calc-opt">
                {rows.map((row, i) => {
                    return (
                        <div key={row.toString()}>
                            <div className="fragment" >
                                {i === 3 && <button onClick={clearValue}>{clear}</button>}
                                {row.map((n) => (
                                    <button
                                        key={n}
                                        onClick={() => setValue(value.concat(n.toString()))}
                                    >
                                        {n}
                                    </button>
                                ))}
                                {i === 3 && <button onClick={calculate}>{equalSign}</button>}
                            </div>
                        </div>
                    );
                })}
                <div className="operator-btn">
                    {calcOperators.map((c) => (
                        <button key={c} onClick={() => setValue(value.concat(c))}>
                            {c.toString()}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;