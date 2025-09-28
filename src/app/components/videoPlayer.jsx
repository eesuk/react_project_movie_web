import React from "react";
import styled from "styled-components";

const VideoPlayer = () => {
  return (
    <div>
      <video
        src="\/images/drive/WIN_20240901_21_43_56_Pro.mp4"
        id="video"
        className="videojs"
        controls
        preload="auto"
        width="1150"
        height="600"
      ></video>
    </div>
  );
};

export default VideoPlayer;
