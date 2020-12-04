import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { setMovieList } from './store/movieActions';
import BlockListPage from './pages/BlockListPage';
import FavoriteListPage from './pages/FavoriteListPage';
import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';
import { Route } from "react-router-dom";

function Root({setMovieList}) {

  useEffect(() => {
    setMovieList();
  }, []);

  return (
    <div>
      <Route path='/' exact component={HomePage}></Route>
      <Route path='/movies' exact component={MovieListPage}></Route>
      <Route path='/favorite' exact component={FavoriteListPage}></Route>
      <Route path='/block' exact component={BlockListPage}></Route>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMovieList: () => dispatch(setMovieList()),
  };
};

export default connect(null, mapDispatchToProps)(Root)
