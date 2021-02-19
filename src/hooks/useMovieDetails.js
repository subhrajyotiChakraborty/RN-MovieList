import { useQuery } from "react-query";

import { getMovieDetails } from "../api/movie";

export const useMovieDetails = (imdbId) => {
  return useQuery(["movie", imdbId], () => getMovieDetails(imdbId), {
    enabled: !!imdbId,
  });
};
