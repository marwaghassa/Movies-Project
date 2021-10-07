import MoviesGrid from "./MoviesGrid";
const HomePage = ({ moviesData, handleMovies }) => {
  return <MoviesGrid moviesData={moviesData} handleMovies={handleMovies} />;
};

export default HomePage;
