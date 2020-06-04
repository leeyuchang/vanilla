import axios from "axios";
import { API_KEY, API_URL } from "../Config.js";
export default {
  page: 1,
  repo : [],
  async getData() {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page++}`;
    const { data } = await axios.get(endpoint);
    return this.repo = this.repo.concat(data.results);
  },
  async getMovieInfo(movieId) {
    const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    const { data } = await axios.get(endpoint)
    console.log('getMovieInfo', data)
    return data;
  }
};
