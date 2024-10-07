import "./App.css";
import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Chars from "./pages/Chars";
import All from "./pages/All";
import Titles from "./pages/Titles";
import CharDetails from "./pages/CharDetails";
import PageNotFound from "./pages/PageNotFound";
import { Link } from "react-router-dom";
import CreateChar from "./pages/CreateChar";
import EditChar from "./pages/EditChar";

function App() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const fetchChars = async () => {
      const response = await fetch("/chars");
      const data = await response.json();
      setChars(data);
    };

    fetchChars();
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <Titles />,
    },
    {
      path: "/title/:video_game_title",
      element: <Chars data={chars} />,
    },
    {
      path: "/char/:id",
      element: <CharDetails data={chars} />,
    },
    {
      path: "/all",
      element: <All data={chars} />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
    {
      path: "/new",
      element: <CreateChar />,
    },
    {
      path: "/edit/:id",
      element: <EditChar data={chars} />,
    },
  ]);

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.svg" />
            <h2>Mario's Friends</h2>
          </div>
          <div className="header-right">
            <Link to="/">
              <button className="homeBtn">Home</button>
            </Link>
            <Link to="/all">
              <button className="homeBtn">All</button>
            </Link>
            <Link to="/new">
              <button className="homeBtn">Add +</button>
            </Link>
          </div>
        </div>
      </header>

      {element}
    </div>
  );
}

export default App;
