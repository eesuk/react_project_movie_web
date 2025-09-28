import React from "react";
import GenresBoard from "./genresBoard";
import TopFiveMovies from "./topFiveMovies";
import PropTypes from "prop-types";

const BoardUI = ({ genres, onSelectedGenre, onClear, movies }) => {
  return (
    <div>
      <GenresBoard
        genres={genres}
        onSelectedGenre={onSelectedGenre}
        onClear={onClear}
      />
      <TopFiveMovies movies={movies} />
    </div>
  );
};

BoardUI.propTypes = {
  genres: PropTypes.object.isRequired,
  onSelectedGenre: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default BoardUI;
