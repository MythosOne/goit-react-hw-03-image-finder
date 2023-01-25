import axios from 'axios';

export function apiService(searchQuery, page) {
    const API_KEY = '31642520-d6a6357411a55db3459510987';
    const BASE_URL = 'https://pixabay.com/api/';
    return  axios(`${BASE_URL}?${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(resp => {
            return resp.data;
        });
};

export default apiService;