import MovieItem from "./MovieItem";

export default function MoviesGrid({ moviesData }) {
  return (
    <div id="movies">
      {moviesData &&
        moviesData.map((movie) => (
          <div className="image-container d-flex justify-content-start m-3">
            <MovieItem movie={movie} key={movie.id} />{" "}
          </div>
        ))}
    </div>
  );
}
