import React, { useEffect, useState } from "react";
import API from "../API";
import Movie from "./movie";
import VideoPlayer from "./videoPlayer";
import Input from "./input";
import CommList from "./commList";
import Pagintation from "./pagination";
import paginate from "./utils/paginate";

import _ from "lodash";
import { FormWrapper } from "./fromstyle";
import PropTypes from "prop-types";
import MoviePhotos from "./moviePhotos";

const MoviePage = ({ movieId }) => {
  const [movie, setMovie] = useState();
  const [commentary, setCommentary] = useState({
    nickname: "",
    commText: "",
    date: new Date(),
  });
  const [commList, setCommList] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    API.movies.getById(movieId).then((data) => setMovie(data));
  }, []);

  useEffect(() => {
    API.commentaries.getById(movieId).then((data) => setCommList(data));
  }, []);

  const handleFavourite = (movieId) => {
    if (movie.id === movieId) {
      if (movie.favouriteMark === false) {
        movie.favouriteMark = true;
      } else {
        movie.favouriteMark = false;
      }
      setMovie(movie);
    }
    setMovie({ ...movie });
  };

  const handleChange = (e) => {
    setCommentary((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentary.commText && commentary.nickname) {
      const newCommentary = [commentary];
      setCommList((prevState) => [...prevState, ...newCommentary]);
      setCommentary({ nickname: "", commText: "", date: new Date() });
    }
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  if (movie) {
    const pageCorp = paginate(movie.photos, currentPage, 1);

    const sortedCommsByDate = commList
      ? _.orderBy(commList, ["date"], ["desc"])
      : [];

    return (
      <div className="movie_page">
        <Movie {...movie} onFavourite={handleFavourite} />
        <MoviePhotos photos={pageCorp} />
        <Pagintation
          itemsCount={3}
          pageSize={1}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <VideoPlayer />
        <FormWrapper onSubmit={handleSubmit}>
          <Input
            label="Ник:"
            name="nickname"
            value={commentary.nickname}
            type="text"
            onChange={handleChange}
          />
          <Input
            label="Комментарий: "
            name="commText"
            value={commentary.commText}
            type="text"
            onChange={handleChange}
          />
          <button type="submit">Отправить</button>
        </FormWrapper>
        {commList && <CommList commList={sortedCommsByDate} />}
      </div>
    );
  }

  return null;
};

MoviePage.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MoviePage;
