import React, { useState } from "react";

export default function Display({ board, setBoard }) {
  const [user, setUser] = useState("X");
  function changeGrid(e) {
    setBoard((currBoard) => {
      const newBoard = currBoard.slice();
      newBoard[e.target.id.slice(1)].state = user;
      return newBoard;
    });
    setUser((currUser) => {
      return currUser === "X" ? "O" : "X";
    });
  }
  return (
    <>
      {board.map((obj) => (
        <button id={"b" + obj.id} key={obj.id} onClick={changeGrid}>
          {obj.state}
        </button>
      ))}
    </>
  );
}
