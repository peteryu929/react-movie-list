import React from "react";
import "./MovieListPage.scss";
import MovieList from "../components/MovieList";
import PaginationComp from "../components/PaginationComp";
import Filter from "../components/Filter";

function MovieListPage() {

  const getMovielist = () => {
    return <MovieList></MovieList>
  }

  return (
    <div className="movielist-container">
      <div className="page-header">
        <div className="pw-l">Popular Movies</div>
        <PaginationComp></PaginationComp>
        <div className="pw-r"><Filter></Filter></div>
      </div>
      {getMovielist()}
    </div>
  );
}

export default MovieListPage;
