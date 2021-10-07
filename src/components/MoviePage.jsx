import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Trailers from "./trailers";
import Actors from "./Actors";

const MoviePage = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=c804f8530c2990b932ec85cdb5fc2b0b&"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
      });
  }, []);

  return (
    <div>
      {movie && (
        <div className="moviePage">
          <Link to="/HomePage">
            <Button> Back to Grid</Button>
          </Link>
          <div className="movieImage">
            <img
              style={{ width: "25%", high: "25%" }}
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              alt="poster"
            />
          </div>

          <div className="movieTitle">
            <h1>{movie.original_title}</h1>
          </div>

          <div className="movieReleaseDate">
            <p>release date: {movie.release_date}</p>
          </div>

          <div className="movieOverview">
            <p>
              <b>overview</b>
            </p>
            <span>{movie.overview}</span>
          </div>
          <Trailers movieId={id} />
          <div className="movieActors">
            <h2>Actors</h2>

            <Actors movieId={id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
