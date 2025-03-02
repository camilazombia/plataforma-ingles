"use client";

import React from "react";

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <iframe
      src={videoUrl}
      title="Video"
      className="w-full h-64 lg:h-96 rounded-lg shadow-md"
      allowFullScreen
    />
  );
};

export default VideoPlayer;
