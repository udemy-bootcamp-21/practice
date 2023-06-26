import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://yts.mx/api/v2",
  // timeout: 5000,
});

export const getMovieList = async (query_term) => {
  try {
    const response = query_term
      ? await axiosInstance.get(`/list_movies.json?query_term=${query_term}`)
      : await axiosInstance.get("/list_movies.json");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetail = async (movieId) => {
  try {
    // https://yts.mx/api/v2/movie_details.json?
    const response = await axiosInstance.get(
      `/movie_details.json?movie_id=${movieId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
