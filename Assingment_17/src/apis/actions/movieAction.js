import { apiClient } from "../../apiClient";

export const addToFav = async ({request}) => {
    const formData = await request.formData();
    const payload = {
        id: formData.get('id'),
        movieId: formData.get('movieId')
    }
  const res = await apiClient.post('/favorites', payload)  
  return res;
} 