import React, { useState, useEffect } from "react";
import "./Chars.css";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const Chars = (props) => {
  const { all, title } = props;
  const { video_game_title } = useParams();

  const [chars, setChars] = useState([]);

  useEffect(() => {
    const titleParam = title ? title : video_game_title;

    const fetchChars = async () => {
      const response =
        all && title === "0"
          ? await fetch(`/chars`)
          : await fetch(`/chars/title/${titleParam}`);
      const data = await response.json();
      setChars(data);
    };

    fetchChars();
  }, [props]);

  return (
    <div className="Chars">
      <main>
        {chars && chars.length > 0 ? (
          chars.map((gift, index) => (
            <Card
              key={gift.id}
              id={gift.id}
              name={gift.name}
              image={gift.image}
              description={gift.description}
              curiosity={gift.curiosity}
            />
          ))
        ) : (
          <h3 className="noResults">{"No Chars Yet 😞"}</h3>
        )}
      </main>
    </div>
  );
};

export default Chars;
