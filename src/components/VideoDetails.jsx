import { abbreviateNumber } from 'js-abbreviation-number';
import React, { useContext, useEffect, useState } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { RiShareForwardLine } from 'react-icons/ri';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { Context } from '../context/contextApi';
import { fetchDataFromApi } from '../utils/api';
import RelatedVideoComponent from './RelatedVideoComponent';

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();

  const { id } = useParams();
  const { setLoading } = useContext(Context);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      setLoading(false);
      setVideo(res);
      console.log(res);
    });
  };

  const relatedVideoFetch = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      setLoading(false);
      setRelatedVideos(res);
    });
  };
  useEffect(() => {
    document.getElementById('root').classList.add('custom-h');
    fetchVideoDetails();
    relatedVideoFetch();
  }, []);
  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto overflow-x-hidden">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height="100%"
              controls
              playing={true}
              styles={{ backgroundColor: 'black' }}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4">
            <p>{video?.title}</p>
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex items-center">
              <div className="flex items-start">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                    alt="author_image"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-gray-400 font-semibold text-md flex items-center hover:text-white">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                    <BsFillCheckCircleFill className="text-white/[0.5] ml-1 text-xs" />
                  )}
                </div>
                <div className="text-gray-400 text-sm">
                  <p>{video?.author?.stats?.subscribersText}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex text-white text-xl items-center justify-between">
                <div className="flex bg-white/[0.1] rounded-3xl items-center">
                  <div className="flex items-center justify-center px-2 h-9 hover:bg-white/[0.09]  hover:rounded-l-3xl">
                    <BiLike className="text-white cursor-pointer mx-2" />
                    <span className="text-sm">{`${abbreviateNumber(
                      video?.stats?.likes,
                      2
                    )}`}</span>
                  </div>
                  <div className="hover:bg-white/[0.09]  hover:rounded-r-3xl h-9 items-center flex justify-center">
                    <div className="px-2 border-l">
                      <BiDislike className="text-white cursor-pointer mx-2" />
                    </div>
                  </div>
                </div>
              </div>
              {/* share */}
              <div className="h-9 px-3 bg-white/[0.1]  mx-2 text-white rounded-3xl items-center justify-center flex hover:bg-white/[0.15] cursor-pointer">
                <RiShareForwardLine className="text-white cursor-pointer text-lg mr-1" />{' '}
                <span>Share</span>
              </div>
              {/* download */}
              <div className="h-9 px-3 bg-white/[0.1] hidden md:flex text-white rounded-3xl items-center justify-center hover:bg-white/[0.15] cursor-pointer">
                <HiDownload className="text-white cursor-pointer text-lg mr-1" />{' '}
                <span>Download</span>
              </div>
              {/* three dots */}
              {/* <div className=" h-9 px-3 bg-white/[0.1]  mx-2 text-white rounded-3xl items-center justify-center flex hover:bg-white/[0.15] cursor-pointer font-bold">
                <p> ... </p>
              </div> */}
            </div>
          </div>
          <div className="text-white  bg-white/[0.1]  hover:bg-white/[0.15] hover:cursor-pointer overflow-hidden hover:overflow-y-auto mt-2 p-2 rounded-lg h-52">
            <div className="flex text-sm font-semibold text-gray-400 truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
            <h1>{video?.description}</h1>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, id) => {
            if (item.type !== 'video') return false;
            return <RelatedVideoComponent key={id} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
