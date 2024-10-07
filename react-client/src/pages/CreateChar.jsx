import { useState } from "react";
import "./CreateChar.css";

const CreateChar = () => {
  const [char, setChar] = useState({
    id: 0,
    name: "",
    image: "",
    description: "",
    curiosity: "",
    video_game_title: "1",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setChar((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createChar = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(char),
    };

    const response = fetch("/chars", options);

    window.location = "/";
  };

  return (
    <div className="CreateGift">
      <center>
        <h2>Add a Char</h2>
      </center>
      <form>
        <label>Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={char.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={char.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <label>Image URL</label>
        <br />
        <input
          type="text"
          id="image"
          name="image"
          value={char.image}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Curiosity</label>
        <br />
        <input
          type="text"
          id="curiosity"
          name="curiosity"
          value={char.curiosity}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Game Title</label>
        <br />
        <select
          className="select-input"
          id="video_game_title"
          name="video_game_title"
          value={char.video_game_title}
          onChange={handleChange}
        >
          <option value="1">Mario Bros</option>
          <option value="2">Crash Bandicoot</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" onClick={createChar} />
      </form>
    </div>
  );
};

export default CreateChar;
