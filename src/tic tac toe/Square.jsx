import { useState } from "react"

export function Square({ value, onSquareClick }) {
    return (
      <button onClick={onSquareClick} style={{width:'100px', height:'100px', fontSize:'30px'}}>
        .{value}
      </button>
    );
  }