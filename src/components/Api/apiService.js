import axios from 'axios';

export async function apiService(inputData, page) {
    const API_KEY = '31642520-d6a6357411a55db3459510987';
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: inputData,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
        page,
    });
    const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

    return images.data;
}

export default apiService;

//key=31642520-d6a6357411a55db3459510987
// https://pixabay.com/api/?q=cat&page=1&key=31642520-d6a6357411a55db3459510987&image_type=photo&orientation=horizontal&per_page=12