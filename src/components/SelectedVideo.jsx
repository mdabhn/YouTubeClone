import React from 'react';

const SelectedVideo = ({ video }) => {
  if (video == null) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: 'larger',
        }}
      >
        Select Your Video
      </div>
    );
  }
  return (
    <div className=''>
      <div className='ui embed'>
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameborder='0'
          title={video.snippet.title}
        ></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p className=''>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default SelectedVideo;
