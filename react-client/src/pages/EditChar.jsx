import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditChar.css";

const EditChar = () => {
  const { id } = useParams();
  const [char, setChar] = useState({
    id: 0,
    name: "",
    image: "",
    description: "",
    curiosity: "",
    video_game_title: "",
  });

  useEffect(() => {
    const fetchCharById = async () => {
      const response = await fetch(`/chars/${id}`);
      const data = await response.json();
      setChar(data);
    };

    fetchCharById();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setChar((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateChar = (event) => {
    event.preventDefault();

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(char),
    };

    fetch(`/chars/${id}`, options);
    window.location = "/";
  };

  const deleteChar = (event) => {
    event.preventDefault();

    const options = {
      method: "DELETE",
    };

    fetch(`/chars/${id}`, options);

    window.location = "/";
  };

  return (
    <div className="EditChar">
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
        <input
          className="submitButton"
          type="submit"
          value="Submit"
          onClick={updateChar}
        />
        <button className="deleteButton" onClick={deleteChar}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditChar;
