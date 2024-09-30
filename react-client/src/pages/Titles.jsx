import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Titles.css";

const Titles = () => {
  return (
    <div className="Titles">
      <main>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Crash_bandicoot_logo.png" />
          <Link to="/title/2">Crash Bandicoot →</Link>
        </div>
        <div className="card">
          <img src="https://static.wikia.nocookie.net/mario/images/b/ba/Super_Mario_Bros_front_cover.jpg" />
          <Link to="/title/1">Mario Bros →</Link>
        </div>
      </main>
    </div>
  );
};

export default Titles;
