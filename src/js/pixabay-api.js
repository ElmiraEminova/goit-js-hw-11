const API_KEY = '44000737-c23aa9eb5fa4f7b392d266f4c';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImg = searchImage => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    });

  return fetch(`${BASE_URL}/?${params}`).then(response =>{
    if (!response.ok){
      throw new Error(
        'Sorry, there are no image matching your search query. Please try again!'
      );
    }
    return response.json();
  });
}