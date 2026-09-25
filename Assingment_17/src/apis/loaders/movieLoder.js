import axios from "axios";
import { apiClient } from "../../apiClient";

export const getMovies = async () => {
  const res = await apiClient.get("/movies");
  return res;
};

export const getFav = async () => {
  const movieRes = await getMovies();
  const movieData = movieRes.data;

  const res = await apiClient.get("/favorites");
  const favData = res.data;

  const filteredMovies = movieData.filter((movie) =>
    favData.some((fav) => fav.movieId === movie.id),
  );

  return {
    data: filteredMovies,
  };
};
