import React from "react";
import PropTypes from "prop-types";

const FavouriteMark = ({ status, ...rest }) => {
  return (
    <button {...rest}>
      <i className={"favourite_mark bi bi-heart" + (status ? "-fill" : "")}></i>
    </button>
  );
};

FavouriteMark.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default FavouriteMark;
