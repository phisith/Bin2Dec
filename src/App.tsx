import Button from "./Button";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [preInput, setPreInput] = useState("");
  const [inputError, setInputError] = useState(false);

  const regexCheck = new RegExp(/^[01]+$/g);
  const onChangeInput = (value: string) => {
    if (preInput) {
      const removePre = value.substring(input.length);
      setPreInput("");
      setInputError(!regexCheck.test(removePre));
      setInput(removePre);
    } else {
      setInputError(!regexCheck.test(value));
      setInput(value);
    }
  };

  const convertToDec = () => {
    if (!regexCheck.test(input)) {
      setInputError(!regexCheck.test(input));
      return;
    }
    let counter = 0;
    let endresult = 0;
    input
      .split("")
      .reverse()
      .forEach(
        (val) => (
          val === "1" ? (endresult = endresult + Math.pow(2, counter)) : 0,
          counter++
        )
      );
    setInput(endresult.toString());
    setPreInput(input);
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-900 gap-6">
      <h1 className="text-white font-extrabold text-2xl">
        Convert Binary to Decimal
      </h1>
      <div className="flex flex-col border border-white/5 bg-white/5 rounded-xl shadow-xl p-4 gap-4">
        <div className="flex flex-col text-right border border-white/5 bg-white/5 rounded-xl p-4 gap-2">
          <span className="text-gray-400 text-xl">
            {preInput} {preInput && "="}
          </span>
          <input
            className="text-right text-4xl bg-transparent text-white"
            value={input}
            onChange={(e) => onChangeInput(e.target.value)}
          />
        </div>
        {input ? (
          <div
            className={`text-center font-medium ${
              inputError ? "visible text-red-600" : "hidden"
            }`}
          >
            Please enter only 0 and 1
          </div>
        ) : null}
        <div className="flex gap-4">
          <Button
            title={"C"}
            onClickAction={() => {
              setInput(""), setPreInput("");
            }}
          />
          <Button
            title={"0"}
            onClickAction={() => onChangeInput(input + "0")}
          />
          <Button
            title={"1"}
            onClickAction={() => onChangeInput(input + "1")}
          />
          <Button
            title={"="}
            isSum={true}
            disabled={inputError ? true : false}
            onClickAction={() => convertToDec()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
