import { useState, useEffect } from "react";

import axios from "../axios";

export const useMovieDetails = (imdbId) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(`/movie/${imdbId}`);
        if (response.data.Response === "True") {
          setDetails(response.data);
        }
        setDetails;
      } catch {
        console.log("Unable to fetch movie details");
      }
    }

    getDetails();
  }, [imdbId]);

  return { details };
};
