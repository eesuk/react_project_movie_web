import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MoviesList from "../components/moviesList";
import MoviePage from "../components/moviePage";

const Movies = () => {
  const params = useParams();
  const { movieId } = params;
  return <>{movieId ? <MoviePage movieId={movieId} /> : <MoviesList />}</>;
};

export default Movies;
