import React from "react";

function checkWinner(board) {
  // 0 1 2
  // 3 4 5
  // 6 7 8

  // rows
  for (let i = 0; i < 8; i += 3) {
    if (
      board[i].state === board[i + 1].state &&
      board[i + 2].state === board[i + 1].state
    ) {
      return { hasWon: true, winner: board[i].state };
    }
  }
  // columns
  for (let i = 0; i < 3; i++) {
    if (
      board[i].state === board[i + 3].state &&
      board[i + 6].state === board[i + 3].state
    ) {
      return { hasWon: true, winner: board[i].state };
    }
  }
  if (board[0].state === board[4].state && board[8].state === board[4].state) {
    return { hasWon: true, winner: board[4].state };
  }
  if (board[2].state === board[4].state && board[6].state === board[4].state) {
    return { hasWon: true, winner: board[4].state };
  }
  return { hasWon: false, winner: "-" };
}
export default function CheckState({ board }) {
  return (
    <>
      <div className={checkWinner(board).hasWon === true ? "show" : "hide"}>
        {checkWinner(board).winner + " wins!"}
      </div>
      {checkWinner(board).hasWon === false ? <div>Tied</div> : <></>}
    </>
  );
}
