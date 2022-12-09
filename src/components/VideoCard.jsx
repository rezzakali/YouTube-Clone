import { abbreviateNumber } from 'js-abbreviation-number';
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import VideoLength from './VideoLength';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-6">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt={video?.thumbnails[0]?.url}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex item-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={video?.author?.avatar[0]?.url}
                alt="avatar_image"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden ml-3">
            <span className="font-bold text-sm line-clamp-2">
              {video?.title}
            </span>
            <span className="mt-2 text-gray-400 font-semibold text-sm flex items-center hover:text-white">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                <BsFillCheckCircleFill className="text-white/[0.5] ml-1 text-xs" />
              )}
            </span>
            <div className="flex text-xs text-gray-400 truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] leading-0 relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
