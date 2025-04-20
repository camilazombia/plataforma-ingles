"use client";

import React from "react";

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const isEmbed = videoUrl.includes("youtube") || videoUrl.includes("vimeo");

  if (!videoUrl) return null;

  return (
    <div className="w-full aspect-video bg-black rounded-lg shadow-md overflow-hidden">
      {isEmbed ? (
        <iframe
          src={videoUrl}
          title="Video"
          className="w-full h-full"
          allowFullScreen
        />
      ) : (
        <video
          src={videoUrl}
          className="w-full h-full"
          controls
          preload="metadata"
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
