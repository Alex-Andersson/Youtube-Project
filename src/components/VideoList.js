import React from "react";
import VideoItime from "./VideoItem";

const VideoList = ({ videos,onVideoSelect }) => {
   const renderredList = videos.map((video) => {
        return <VideoItime key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    return <div className="ui relaxed divided list">{renderredList}</div>;
};

export default VideoList;