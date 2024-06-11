"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const YouTubeEmbedVideo = ({
  videoId,
  containerClass,
}: {
  videoId: string;
  containerClass?: string;
}) => {
  return (
    <div className={containerClass}>
      <LiteYouTubeEmbed
        title=""
        id={videoId!}
        params="autoplay=1"
        playlist={false}
        noCookie={true}
      />
    </div>
  );
};

export default YouTubeEmbedVideo;
