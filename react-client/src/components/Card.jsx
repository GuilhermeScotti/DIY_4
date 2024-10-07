import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import more from "./more.png";

const Card = (props) => {
  const [char, setChar] = useState({
    id: 0,
    name: "",
    image: "",
    description: "",
    curiosity: "",
  });

  useEffect(() => {
    setChar({
      id: props.id,
      name: props.name,
      image: props.image,
      description: props.description,
      curiosity: props.curiosity,
    });
  }, [props]);

  return (
    <div className="card">
      <div>
        <Link to={"/edit/" + char.id}>
          <img className="more-img" src={more} />
        </Link>
      </div>
      <div>
        <img src={char.image} alt={char.name} className="game-img top-image" />
      </div>
      <div className="bottom-container">
        <h3>{char.name}</h3>
        <p>{"Name: " + char.name}</p>
        <Link to={"/char/" + char.id}>Read More →</Link>
      </div>
    </div>
  );
};

export default Card;
