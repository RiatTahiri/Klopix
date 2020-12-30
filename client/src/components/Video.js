import React from "react";
import { Player } from "video-react";

const Video = () => {
  return (
    /// Test

    <Player playsInline fluid={false} width={950} height={700}>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};

export default Video;
