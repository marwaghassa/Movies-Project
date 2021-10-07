import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/footer";
import MoviePage from "./components/MoviePage";
import HomePage from "./components/homepage";
import ActorPage from "./components/actorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [genre, setGenre] = useState(undefined);
  const [moviesData, setMoviesData] = useState([]);
  const [query, setQuery] = useState("");

  const constructUrl = (query, path = "search/movie") => {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };
  useEffect(() => {
    if (query === "") {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=c804f8530c2990b932ec85cdb5fc2b0b&&lar?api_key=c804f8530c2990b932ec85cdb5fc2b0b&&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((json) => {
          setMoviesData(json.results);
        });
    } else {
      handleMovies(query);
    }
  }, [query]);

  useEffect(() => {
    console.log(moviesData.filter((m) => m.genre_ids.includes(genre)));
  }, [genre, moviesData]);

  function handleMovies(movies) {
    fetch(constructUrl(movies))
      .then((response) => response.json())
      .then((json) => {
        setMoviesData(json.results);
      });
  }

  return (
    <Router>
      <div className="App">
        <Navigation setQuery={setQuery} setGenre={setGenre} />

        <Switch>
          <HomePage
            path="/"
            exact
            moviesData={
              genre === undefined
                ? moviesData
                : moviesData.filter((m) => m.genre_ids.includes(genre))
            }
          />
          <Route path="/MoviePage/:id">
            <MoviePage moviesData={moviesData} />
          </Route>
          <Route path="/ActorPage/:id">
            <ActorPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
