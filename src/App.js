import React, { Component, useState, useEffect } from "react";
import background from "./resources/images/background.svg";
import "./App.css";
import Header from "./Components/Header";
import "materialize-css/dist/css/materialize.min.css";
import GameCard from "./Components/GameCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const ApiURL =
  "https://script.google.com/macros/s/AKfycbw5ilBrZfZXABaqDOXTaY_E1O66qV1oLb9ps5gxzrA1rSphDtup/exec";
  
function App() {
  const [jogos, setJogos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var result = fetch(ApiURL)
      .then(response => response.json())
      .then(d => {
        setJogos(d.filter(item => item.game.length > 0));
        setLoading(false);
      });
      console.log(jogos);
  }, []);

  return (
    <div className="Background">
      <Header handleSearch={setSearch.bind(this)} />
      {loading ? (
        <CircularProgress
          className="ActivityIndicator"
          style={{ color: "#E9A522" }}
        ></CircularProgress>
      ) : (
        <div className="GamesContainer">
          {jogos
            .filter(item =>
              search.length > 0
                ? item.game.toUpperCase().includes(search.toUpperCase()) ||
                  item.subdesc.toUpperCase().includes(search.toUpperCase())
                : item
            )
            .map(jogo => (
              <GameCard jogo={jogo} />
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
