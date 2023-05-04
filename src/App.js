import React, { useState, useEffect } from "react";

function App() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/races")
      .then((response) => response.json())
      .then((data) => setRaces(data))
      .catch((error) => console.error(error));
  }, []);

  const titleStyle = {
    textAlign: "center",
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "1em",
  };

  const raceStyle = {
    display: "inline-block",
    padding: "0.5em",
    margin: "0.5em",
    backgroundColor: "#eee",
    borderRadius: "0.25em",
    boxShadow: "0 0 0.25em rgba(0, 0, 0, 0.1)",
    textTransform: "capitalize",
  };

  return (
    <div>
      <h1 style={titleStyle}>Liste des races de chien</h1>
      <ul>
        {races.map((race) => (
          <li key={race} style={raceStyle}>
            {race}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
