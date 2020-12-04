import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { setCurrentPage } from '../store/movieActions';

function PaginationComp(props) {
  const [page, setPage] = useState(1);
  
  const handleChange = (event, value) => {
    setPage(value);
  }

  useEffect(() => {
    props.setCurrentPage(page);
  }, [page])


  return (
    <div>
      <Pagination count={props.pageCount} page={page} onChange={handleChange} shape="rounded" />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pageCount: Math.floor(state.movieList.length / 48) + 1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComp)
