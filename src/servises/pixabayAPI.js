import axios from "axios";

axios.defaults.baseURL='https://pixabay.com'

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const getImages = async ({ search='', page=1 }) => {
    const responce = await axios.get('/api/', {
    params: {
        key: '35439381-dc6c31f5e4218074de9a0ab23',
        q: search,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12
    }})
  
   if (!responce.data.total) {
            throw new Error( console.error('Sorry, there are no images matching your search query. Please try again.'))
 }
    return responce.data.hits
}