import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Context } from '../context/contextApi';
import { fetchDataFromApi } from '../utils/api';
import SearchResultVideo from './SearchResultVideo';

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState();
  const { setLoading } = useContext(Context);
  const { searchQuery } = useParams();

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      setSearchResults(res?.contents);
      setLoading(false);
    });
  };

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {searchResults?.map((item, id) => {
            if (item.type !== 'video') return false;
            let video = item?.video;
            return <SearchResultVideo key={id} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
