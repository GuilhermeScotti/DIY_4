import React, { useState, useEffect } from "react";
import "./CharDetails.css";
import { useParams } from "react-router-dom";

const CharDetails = ({ data }) => {
  const { id } = useParams();

  const [gift, setChar] = useState({
    id: 0,
    name: "",
    image: "",
    description: "",
    curiosity: "",
  });

  // const gift = data;

  useEffect(() => {
    const fetchCharById = async () => {
      const response = await fetch(`/chars/${id}`);
      const data = await response.json();
      setChar(data);
    };

    fetchCharById();
  }, [data, id]);

  return (
    <div className="CharDetails">
      <main id="gift-content" class="char-info">
        <div class="image-container">
          <img id="image" src={gift.image} />
        </div>
        <div class="gift-details">
          <h2 id="name">{gift.name}</h2>
          <p id="description">{gift.description}</p>
          <p id="curiosity">{"Curiosity: " + gift.curiosity}</p>
        </div>
      </main>
    </div>
  );
};

export default CharDetails;
