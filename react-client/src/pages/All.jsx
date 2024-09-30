import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Chars from "./Chars";

import "./All.css";

const All = (props) => {
  const [selectedGame, setSelectedGame] = useState("0");

  const handleGameChange = (e) => {
    setSelectedGame(e.target.value);
    console.log("Selected Game:", e.target.value);
  };

  const handleClick = () => {
    setSelectedGame("0");
  };

  return (
    <div className="Titles">
      <div className="container">
        <button onClick={handleClick}>Reset</button>
        <select value={selectedGame} onChange={handleGameChange}>
          <option value="0">Select Game</option>
          <option value="1">Mario Bros</option>
          <option value="2">Crash Bandicoot</option>
        </select>
      </div>
      <Chars
        data={props}
        all={
          selectedGame === 0 ||
          selectedGame === "0" ||
          selectedGame === undefined
        }
        title={selectedGame}
      />
    </div>
  );
};

export default All;
