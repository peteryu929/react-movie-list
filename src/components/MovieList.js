import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';

function MovieList({ movieList }) {

  // const [movies, setMovies] = useState(movieList);

  // useEffect(() => {
  //   setMovies([...movieList]);
  // }, []);

  return (
    <div className="movie-list">
      {
        movieList.map((item, id) => {
          return <MovieItem movie={item} key={item.id}></MovieItem>
        }) 
      }
    </div>
  )
}

const navToCurrPage = (movies, page) => {
  return movies.slice((page-1) * 48, (page-1) * 48 + 48);
}

const mapStateToProps = (state) => {
  return {
    movieList: navToCurrPage(state.movieList, state.page),
  };
};

export default connect(mapStateToProps, null)(MovieList);