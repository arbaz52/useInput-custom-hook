import React from "react";
import "./styles.scss";
import useInput from "./useInput";

export default function App() {
  const [text, bindText, resetText] = useInput("");
  return (
    <div className="App">
      <h1>useInput Hook</h1>
      <p>Custom useInput Hook.</p>
      <input type="text" {...bindText} />
      <button onClick={resetText}>Reset</button>
      <br />
      <p>You wrote: {text} </p>
    </div>
  );
}
