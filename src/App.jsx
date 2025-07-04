import { useState } from "react";
import "./App.css";

function App() {
  const [headingText, setHeadingText] = useState("Hello lads!");

  function handleOnClick() {
    setHeadingText("Good-bye lads!");
  }
  return (
    <>
      <h1>{headingText}</h1>
      <button onClick={handleOnClick}>Click to change heading</button>
    </>
  );
}

export default App;
