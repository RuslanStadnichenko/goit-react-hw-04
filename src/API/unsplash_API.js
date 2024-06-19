import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImagesByQuery = async configParams => {
  const result = await axios.get('/search/photos', {
    params: {
      per_page: 12,
      client_id: '_JOtHj03--XGVDXVNfSUDkvpQCPZjpP6GhX8kCpRF5s',
      ...configParams,
    },
  });
  return result;
};