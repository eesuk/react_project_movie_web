import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GenreInfo = styled.span`
  margin-right: 10px;
  color: #bac7e2;
`;

const Genre = ({ name, id }) => {
  return (
    <GenreInfo id={id} className="genre_info">
      {name}
    </GenreInfo>
  );
};

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Genre;
