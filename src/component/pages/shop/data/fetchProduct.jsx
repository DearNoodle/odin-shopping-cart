import axios from 'axios';

export const fetchProduct = async function (url) {
  const response = await axios.get(url);
  return response.data;
};
