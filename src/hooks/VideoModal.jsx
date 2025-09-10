import React from "react";

const VideoModal = ({ videoActive, setVideoActive, videoSrc }) => {
  if (!videoActive) return null;

  return (
    <div
      className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
      onClick={() => setVideoActive(false)}
    >
      <div className="video-inner">
        <div className="video-container" onClick={(e) => e.stopPropagation()}>
          <iframe
            className="video"
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <button
            aria-label="close video popup"
            className="close-video-popup"
            onClick={() => setVideoActive(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
