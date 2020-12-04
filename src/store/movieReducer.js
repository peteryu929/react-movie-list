import { sortMovies } from "../helpers/array";
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

const initialState = {
  loading: false,
  error: "",
  page: 1,
  movieList: [],
  likeList: [],
  blockList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        movieList: payload,
      };
    case FETCH_MOVIE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_LIKE_MOVIE:
      return {
        ...state,
        likeList: [...state.likeList, payload],
      };
    case DELETE_LIKE_MOVIE:
      const delLikeList = [...state.likeList];
      const like_id = state.likeList.findIndex((item) => item.id === payload);
      delLikeList.splice(like_id, 1);
      return {
        ...state,
        likeList: delLikeList,
      };
    case ADD_BLOCK_MOVIE:
      const addBlockList = [...state.movieList];
      const add_block_id = state.movieList.findIndex(
        (item) => item.id === payload.id
      );
      addBlockList.splice(add_block_id, 1);
      return {
        ...state,
        blockList: [...state.blockList, payload],
        movieList: addBlockList,
      };
    case DELETE_BLOCK_MOVIE:
      const delBlockList = [...state.blockList];
      const del_block_id = state.blockList.findIndex(
        (item) => item.id === payload.id
      );
      delBlockList.splice(del_block_id, 1);
      return {
        ...state,
        blockList: delBlockList,
        movieList: [...state.movieList, payload],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: payload,
      };
    case SORT_MOVIE_LIST:
      const sortList = sortMovies(payload, [...state.movieList]);
      console.log(payload)
      return {
        ...state,
        movieList: sortList,
      };

    default:
      return state;
  }
};

export default reducer;
