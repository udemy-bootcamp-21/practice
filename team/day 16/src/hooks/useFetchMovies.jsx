import { useState } from "react";
import { getMovieDetail, getMovieList } from "../api/axiosInstance";

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const requestMovie = (requestType, query) => {
    setIsLoading(true);
    if (requestType === "list") {
      getMovieList(query).then((res) => {
        console.log(res);
        setIsLoading(false);
        setMovies(res.data.data.movies);
      });
    } else if (requestType === "detail") {
      getMovieDetail(query).then((res) => {
        setIsLoading(false);
        setMovieDetail(res.data.data.movie);
      });
    }
  };

  return { movies, movieDetail, isLoading, requestMovie };
};

export default useFetchMovies;
