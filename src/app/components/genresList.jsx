import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

import Genre from "./genre";

const GenresList = ({ items }) => {
  // if (!items || items.length === 0) {
  //   return null;
  // }

  return (
    <li className="movie_info_static">
      Жанр:
      <span className="movie_info">
        {Object.keys(items).map((item) => {
          return (
            <Genre
              key={items[item].id}
              name={items[item].name}
              id={items[item].id}
            />
          );
        })}
      </span>
    </li>
  );
};

GenresList.protoTypes = {
  items: PropTypes.object.isRequired,
};

export default GenresList;
