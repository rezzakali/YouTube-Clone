import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_HOST,
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export default options;
