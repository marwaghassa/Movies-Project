import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Trailer({ movieId }) {
  const [movieTrailer, setMovieTrailer] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?api_key=c804f8530c2990b932ec85cdb5fc2b0b&"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovieTrailer(json["results"][0].key);
        console.log(movieTrailer);
      });
  }, [movieId]);

  return (
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        title="title"
        src={`https://www.youtube.com/embed/${movieTrailer}`}
        allowfullscreen
      ></iframe>
    </div>
  );
}
