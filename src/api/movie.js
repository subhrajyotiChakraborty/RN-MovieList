import axios from "../axios";
export const getMovieDetails = async (imdbId) => {
  try {
    const response = await axios.get(`/movie/${imdbId}`);
    if (response.data.Response === "True") {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
