import React from 'react';
import Video from './Video';

function Videos({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    return (
      <Video
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
}

export default Videos;
