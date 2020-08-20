import React from 'react';
import '../style/video.css';

const Video = ({ video, onVideoSelect }) => {
  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.thumbnails.medium.url}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default Video;
