import { useEffect, useState } from "react";

import axios from "../axios";

export const useMovies = (searchText, page) => {
  console.log(searchText, page);
  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [endReached, setEndReached] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setShowLoader(true);
        const response = await axios.get(`/movies/${searchText}?page=${page}`);
        // console.log("useMovies =>", searchText);
        setShowLoader(false);
        if (response.data.Response === "True") {
          if (page === 1) {
            setMovies([...response.data.Search]);
          } else {
            setMovies([...movies, ...response.data.Search]);
          }
          setTotalMovies(+response.data.totalResults);
          setEndReached(false);
        } else {
          setEndReached(true);
        }
      } catch {
        console.log("Unable to fetch movies!!!");
        setShowLoader(false);
      }
    }
    fetchMovies();
  }, [searchText, page]);

  return { movies, totalMovies, showLoader, endReached };
};
