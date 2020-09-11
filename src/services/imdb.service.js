import axios from 'axios'

const IMDB_API_URL = 'https://api.themoviedb.org/3'
const IMDB_API_KEY = 'b2907782d07859a652052d3bae537475'

const API_IMDB = {
  getMovies(query, page, adult) {
    return axios.get(`${IMDB_API_URL}/search/movie?api_key=${IMDB_API_KEY}&query=${query}&page=${page}&include_adult=${adult}`)
  },
  getMovie(movie_id) {
    return axios.get(`https://api.themoviedb.org/3/movie/550?api_key=b2907782d07859a652052d3bae537475`)
  }
}

export default API_IMDB