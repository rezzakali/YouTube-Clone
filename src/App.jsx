import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';
import { AppContext } from './context/contextApi';

const App = () => {
  return (
    <AppContext>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>
    </AppContext>
  );
};

export default App;
