import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import _ from "lodash";
import styled from "styled-components";
import { InputSearch } from "./inputSearch";

import API from "../API";
import Movie from "./movie";
import Pagintation from "./pagination";
import paginate from "./utils/paginate";
import SortButtons from "./sortButtons";
import BoardUI from "./boardUI";

const AppStyle = styled.h1`
  margin: 50px auto;
  padding: 25px;
  background-color: #18202a;
  border-radius: 10px;
  max-width: 1200px;
  border: solid 1px #8499c3;
  display: flex;
`;

const MovieBoard = styled.div`
  margin-bottom: 25px;
  gap: 20px;
`;

const MovieList = styled.div`
  border: solid 1px #2d435d;
  margin-left: 0px;
  border-radius: 8px;
`;

const MoviesList = () => {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();
  const [selectedGenre, setSelectedGenre] = useState();
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ iter: "year", order: "desc" });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    API.movies.fetchAll().then((data) => setMovies(data));
  }, []);

  useEffect(() => {
    API.genres.fetchAll().then((data) => setGenres(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedGenre]);

  const handleFavourite = (movieId) => {
    setMovies(
      movies.map((movie) => {
        if (movie.id === movieId) {
          return { ...movie, favouriteMark: !movie.favouriteMark };
        }
        return movie;
      })
    );
  };

  const handleSelectedGenre = (genre) => {
    if (searchQuery !== "") setSearchQuery("");
    setSelectedGenre(genre);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const filterByGenre = (items, selectedGenre) => {
    let filteredMovies = [];
    items.map((item) => {
      Object.keys(item.genre).map((OneGenre) => {
        if (
          JSON.stringify(item.genre[OneGenre]) === JSON.stringify(selectedGenre)
        ) {
          let newMovie = [item];
          filteredMovies = [...filteredMovies, ...newMovie];
        }
      });
    });
    return filteredMovies;
  };

  const handleSearchQuery = ({ target }) => {
    setSelectedGenre(undefined);
    setSearchQuery(target.value);
  };

  if (movies) {
    const filteredByGenre = searchQuery
      ? movies.filter(
          (movie) =>
            movie.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )
      : selectedGenre
      ? filterByGenre(movies, selectedGenre)
      : movies;

    const moviesCount = filteredByGenre.length;
    const sortedMovies = _.orderBy(filteredByGenre, sortBy.iter, sortBy.order);
    const moviesCorp = paginate(sortedMovies, currentPage, pageSize);
    const ClearGenreFilter = () => {
      setSelectedGenre();
    };

    return (
      <AppStyle>
        {genres && (
          <BoardUI
            genres={genres}
            onSelectedGenre={handleSelectedGenre}
            onClear={ClearGenreFilter}
            movies={movies}
          />
        )}
        <MovieBoard>
          <InputSearch
            type="text"
            name="searchQuery"
            placeholder="поиск..."
            onChange={handleSearchQuery}
            value={searchQuery}
          />
          <MovieList>
            <SortButtons onSort={handleSort} selectedSort={sortBy} />
            {moviesCorp.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  {...movie}
                  onFavourite={handleFavourite}
                />
              );
            })}
          </MovieList>
          <Pagintation
            itemsCount={moviesCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </MovieBoard>
      </AppStyle>
    );
  }
};

export default MoviesList;

//

/*import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import _ from "lodash";

import API from "../API";
import Movie from "./movie";
import GenresBoard from "./genresBoard";
import Pagintation from "./pagination";
import paginate from "./utils/paginate";
import SortButtons from "./sortButtons";

const MoviesList = () => {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();
  const [selectedGenre, setSelectedGenre] = useState();
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ iter: "year", order: "desc" });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    API.movies.fetchAll().then((data) => setMovies(data));
  }, []);

  useEffect(() => {
    API.genres.fetchAll().then((data) => setGenres(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedGenre]);

  const handleFavourite = (movieId) => {
    setMovies(
      movies.map((movie) => {
        if (movie.id === movieId) {
          return { ...movie, favouriteMark: !movie.favouriteMark };
        }
        return movie;
      })
    );
  };

  const handleSelectedGenre = (genre) => {
    setSelectedGenre(genre);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };

  const filterByGenre = (items, selectedGenre) => {
    let filteredMovies = [];
    items.map((item) => {
      Object.keys(item.genre).map((OneGenre) => {
        if (
          JSON.stringify(item.genre[OneGenre]) === JSON.stringify(selectedGenre)
        ) {
          let newMovie = [item];
          filteredMovies = [...filteredMovies, ...newMovie];
        }
      });
    });
    return filteredMovies;
  };

  if (movies) {
    const filteredByGenre = selectedGenre
      ? filterByGenre(movies, selectedGenre)
      : movies;

    const moviesCount = filteredByGenre.length;
    const sortedMovies = _.orderBy(filteredByGenre, sortBy.iter, sortBy.order);
    const moviesCorp = paginate(sortedMovies, currentPage, pageSize);
    const ClearGenreFilter = () => {
      setSelectedGenre();
    };

    return (
      <div className="app">
        <div className="paginator_and_searcher">
          <Pagintation
            itemsCount={moviesCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <input
            type="text"
            name="searchQuery"
            onChange={handleSearchQuery}
            value={searchQuery}
          />
        </div>
        <div className="movie_board">
          {genres && (
            <GenresBoard
              genres={genres}
              onSelectedGenre={handleSelectedGenre}
              onClear={ClearGenreFilter}
            />
          )}
          <div className="movie_list">
            <SortButtons onSort={handleSort} selectedSort={sortBy} />
            {moviesCorp.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  {...movie}
                  onFavourite={handleFavourite}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default MoviesList;*/
