import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?key=33583955-ce9811140fd4e045deb42856a&';

export async function fetchImages(value, page) {
  const apiFecthImages = await axios.get(
    `${BASE_URL}q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  console.log(page);
  return apiFecthImages;
}
  