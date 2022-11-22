import "./App.css";
import { useState } from "react";
import Display from "./components/Display";
import CheckState from "./components/CheckState";

function App() {
  const [board, setBoard] = useState([
    { id: 0, state: "1" },
    { id: 1, state: "2" },
    { id: 2, state: "3" },
    { id: 3, state: "4" },
    { id: 4, state: "5" },
    { id: 5, state: "6" },
    { id: 6, state: "7" },
    { id: 7, state: "8" },
    { id: 8, state: "9" },
  ]);
  function resetBoard() {
    setBoard(() => [
      { id: 0, state: "1" },
      { id: 1, state: "2" },
      { id: 2, state: "3" },
      { id: 3, state: "4" },
      { id: 4, state: "5" },
      { id: 5, state: "6" },
      { id: 6, state: "7" },
      { id: 7, state: "8" },
      { id: 8, state: "9" },
    ]);
  }
  return (
    <div className="App">
      <h1 id="header">Noughts and Crosses</h1>
      <div id="board-container">
        <div id="board">
          <Display board={board} setBoard={setBoard} />
        </div>
      </div>
      <button id="resetButton" onClick={resetBoard}>
        Reset
      </button>
      <CheckState board={board} />
    </div>
  );
}

export default App;
