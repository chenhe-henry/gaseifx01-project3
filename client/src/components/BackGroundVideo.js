import React from "react";
import video from "../assets/video.mp4";
import videowebm from "../assets/video.webm";
import "../assets/BackGroundVideo.scss";

const BackGroundVideo = () => {
  return (
    <div>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src={videowebm} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
    </div>
  );
};

export default BackGroundVideo;
