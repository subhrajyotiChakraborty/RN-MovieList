import { useEffect, useState } from "react";

import axios from "../axios";

export const useMovies = (searchText) => {
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(`/movies/${searchText}`);
        // console.log("useMovies =>", searchText);
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
          setTotalMovies(+response.data.totalResults);
        }
      } catch {
        console.log("Unable to fetch movies!!!");
      }
    }
    fetchMovies();
  }, [searchText]);

  return { movies, totalMovies };
};
