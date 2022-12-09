import moment from 'moment';
import React from 'react';

const VideoLength = ({ time }) => {
  const VideoLengths = moment().startOf('day').second(time).format('H:mm:ss');

  return (
    <div className="absolute bottom-2 right-2 px-2 py-1 text-white rounded text-xs bg-black ">
      {VideoLengths}
    </div>
  );
};

export default VideoLength;
