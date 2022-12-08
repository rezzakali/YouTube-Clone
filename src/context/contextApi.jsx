import { createContext, useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [mobile, setMobile] = useState(false);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then((res) => {
      console.log(res);
      //   setSearchResults(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        mobile,
        setMobile,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
