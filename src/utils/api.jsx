import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key':'32c6d28642msh4e93602e4713222p19d229jsna579ff2ce698',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export default options;
