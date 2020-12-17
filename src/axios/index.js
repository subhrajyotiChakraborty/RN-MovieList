import axios from "axios";

const reference = axios.create({
  baseURL: "https://flask-movie-app.herokuapp.com",
});

export default reference;
