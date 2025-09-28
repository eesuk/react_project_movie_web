import React from "react";
import "../App.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import GenresList from "./genresList";
import MovieRate from "./movierRate";
import FavouriteMark from "./favouriteMark";
import styled from "styled-components";

const MovieBoardBorder = styled.div`
  margin: 15px;
  padding-bottom: 15px;
  border: solid 1px #2d435d;
  border-radius: 8px;
  background-color: #1f2936;
  color: #e0e5ec;
  font: 16px "Montserrat", sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 350px;
  width: 800px;
`;

const MovieBoard = styled.div`
  display: flex;
  margin-bottom: 25px;
  gap: 20px;
`;

const MovieMainImage = styled.img`
  height: 240px;
  width: 160px;
  border-radius: 8px;
  margin-top: 10px;
  margin: 15px;
`;

const AllInfo = styled.ul`
  line-height: 1.7;
  color: #bac7e2;
  border: solid 1px #8499c3;
  border-radius: 3%;
  padding: 2px;
  margin-top: 10px;
  background-color: #18202a;
`;

const MovieTitle = styled.li`
  margin-bottom: 12px;
  font-size: 32px;
  color: #8499c3;
`;

const MovieInfoStatic = styled.li`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const MovieInfo = styled.span`
  margin-left: 12px;
  font-style: italic;
`;

const MovieInfoRate = styled.span`
  margin: 40px;
  font-size: 20px;
`;

const ButtonLink = styled.button`
  margin-right: 420px;
`;

const Movie = ({
  id,
  name,
  originalName,
  year,
  country,
  genre,
  views,
  rate,
  director,
  mainPhoto,
  favouriteMark,
  onFavourite,
}) => {
  return (
    <MovieBoardBorder>
      <MovieBoard id={id}>
        <Link to={`/movie_page/${id}`}>
          <MovieMainImage src={mainPhoto} />
        </Link>
        <AllInfo>
          <MovieTitle>
            {name}
            <MovieInfo>{` (${year})`}</MovieInfo>
          </MovieTitle>
          <MovieInfoStatic>
            Оригинальное название:
            <MovieInfo>{originalName}</MovieInfo>
          </MovieInfoStatic>
          <MovieInfoStatic>
            Страна:
            <MovieInfo>{country}</MovieInfo>
          </MovieInfoStatic>
          <GenresList key={id} items={genre} />
          <MovieInfoStatic>
            Режисер:
            <MovieInfo>{director}</MovieInfo>
          </MovieInfoStatic>
          <MovieInfoStatic>
            Количество просмотров:
            <MovieInfo>{views}</MovieInfo>
          </MovieInfoStatic>
        </AllInfo>
      </MovieBoard>
      <MovieInfoRate>
        Рeйтинг:
        <MovieRate key={id} rate={rate} />
      </MovieInfoRate>
      <Link to={`/movie_page/${id}`}>
        <ButtonLink>Смотреть</ButtonLink>
      </Link>
      <FavouriteMark
        key={id}
        status={favouriteMark}
        onClick={() => onFavourite(id)}
      />
    </MovieBoardBorder>
  );
};

Movie.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  originalName: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  genre: PropTypes.object.isRequired,
  views: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  mainPhoto: PropTypes.string.isRequired,
  favouriteMark: PropTypes.bool.isRequired,
  onFavourite: PropTypes.func.isRequired,
};

export default Movie;
