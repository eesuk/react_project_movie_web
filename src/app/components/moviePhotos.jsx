import React from "react";
import styled from "styled-components";

const ImgStyle = styled.img`
  width: 1100px;
  height: 550px;
`;

const MoviePhotos = (photos) => {
  return (
    <div>
      {Object.keys(photos).map((photoArray) => {
        return photos[photoArray].map((photo) => {
          return <ImgStyle src={photo} />;
        });
      })}
    </div>
  );
};

export default MoviePhotos;
