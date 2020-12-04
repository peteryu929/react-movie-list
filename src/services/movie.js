import axios from 'axios';
import { LIST_API, MOVIE_URI, QUERY_STRING } from '../constants/api';

export function getAllMovies() {
  return axios
    .get(`${MOVIE_URI}${LIST_API}${QUERY_STRING}`)
}