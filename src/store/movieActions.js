import { getAllMovies } from '../services/movie';
import {
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_LIST_FAILURE,
  ADD_LIKE_MOVIE,
  ADD_BLOCK_MOVIE,
  DELETE_BLOCK_MOVIE,
  DELETE_LIKE_MOVIE,
  SET_CURRENT_PAGE,
  SORT_MOVIE_LIST,
} from "./movieTypes";

export const fetchMovieListRequest = () => {
  return {
    type: FETCH_MOVIE_LIST_REQUEST,
  }
}

export const fetchMovieListSuccess = (movies) => {
  return {
    type: FETCH_MOVIE_LIST_SUCCESS,
    payload: movies
  }
}

export const fetchMovieListFailure = (error) => {
  return {
    type: FETCH_MOVIE_LIST_FAILURE,
    payload: error
  }
}

export const addLikeMovie = (movie) => {
  return {
    type: ADD_LIKE_MOVIE,
    payload: movie
  }
}

export const deleteLikeMovie = (movie) => {
  return {
    type: DELETE_LIKE_MOVIE,
    payload: movie
  }
}

export const addBlockMovie = (movie) => {
  return {
    type: ADD_BLOCK_MOVIE,
    payload: movie
  }
}

export const deleteBlockMovie = (id) => {
  return {
    type: DELETE_BLOCK_MOVIE,
    payload: id
  }
}

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}

export const sortMovieList = (method) => {
  return {
    type: SORT_MOVIE_LIST,
    payload: method
  }
}

export const setMovieList = () => {
  return (dispatch) => {
    dispatch(fetchMovieListRequest());
    getAllMovies()
      .then((res) => {
        const movies = res.data.items
        dispatch(fetchMovieListSuccess(movies));
      })
      .catch((err) => {
        dispatch(fetchMovieListFailure(err))
      });
  }
}