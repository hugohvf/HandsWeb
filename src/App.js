import React, { Component, useState, useEffect } from "react";
import background from "./resources/images/background.svg";
import "./App.css";
import Header from "./Components/Header";
import "materialize-css/dist/css/materialize.min.css";
import GameCard from "./Components/GameCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ApiURL =
  "https://script.google.com/macros/s/AKfycbw5ilBrZfZXABaqDOXTaY_E1O66qV1oLb9ps5gxzrA1rSphDtup/exec";

function App() {
  const [jogos, setJogos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [appear, setAppear] = useState(true);

  useEffect(() => {
    var result = fetch(ApiURL)
      .then((response) => response.json())
      .then((d) => {
        d = d.map((game) => {
          let title = game.game;
          title = title
            .toLowerCase()
            .split(" ")
            .map((word, i) => {
              let firstLetter = word.charAt(0).toUpperCase();
              if (
                (firstLetter === "E" ||
                  firstLetter === "A" ||
                  firstLetter === "O" ||
                  firstLetter === "À") &&
                word.length === 1 &&
                i !== 0
              )
                return word;
              return firstLetter + word.slice(1);
            })
            .join(" ");
          return { ...game, game: title };
        });

        setJogos(d.filter((item) => item.subdesc.length > 0));
        setLoading(false);
      });
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
        <TransitionGroup className="GamesContainer">
          {jogos
            .filter((item) =>
              search.length > 0
                ? item.game.toUpperCase().includes(search.toUpperCase()) ||
                  item.subdesc.toUpperCase().includes(search.toUpperCase())
                : item
            )
            .map((jogo) => (
              <CSSTransition
                in={appear}
                leave={true}
                appear={true}
                timeout={2000}
                classNames="fade"
              >
                <GameCard jogo={jogo} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </div>
  );
}

export default App;
