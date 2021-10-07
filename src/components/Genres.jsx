import { Dropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Genres = ({ setGenre }) => {
  const [genres, setGenres] = useState([]);
  const fetchGenres = () => {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c804f8530c2990b932ec85cdb5fc2b0b&language=en-US";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setGenres(json.genres);
      });
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <Dropdown onClick={fetchGenres}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Genres
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {genres &&
          genres.map((genre) => (
            <Dropdown.Item
              clickable
              label={genre.name}
              key={genre.id}
              onClick={() => setGenre(genre.id)}
            >
              {genre.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Genres;
