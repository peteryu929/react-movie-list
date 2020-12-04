import React, { useEffect, useState } from 'react';
import { IconButton, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { IMAGE_URI } from "../constants/api";
import { autoSizeFont } from '../helpers/string';
import { Rating } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { addBlockMovie, addLikeMovie, deleteLikeMovie } from '../store/movieActions';
import { connect } from 'react-redux';
import * as moment from 'moment';

function MovieItem(props) {

  const [movie, setMovie] = useState(props.movie)
  const [like, setLike] = useState(false);
  const [block, setBlock] = useState(false);

  const useStyles = makeStyles({
    card: {
      height: '400px',
      width: '200px',
      margin: '20px',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      borderRadius: '10px',
      boxShadow: '2px 2px 8px gray',
      userSelect: 'none'
    },
    root: {
      padding: 0
    }
  })
  const classes = useStyles();

  useEffect(() => {
    if (props.likeList.findIndex((item) => item.id === props.movie.id) > -1) {
      setLike(true);
      setBlock(true);
    }
  }, [])

  const favorite = () => {
    return like ? <FavoriteIcon fontSize='large' color="secondary" /> : <FavoriteBorderIcon fontSize='large' color="secondary" />
  }

  const switchFavorite = () => {
    if (!like) {
      props.addLikeMovie(props.movie);
      setLike(!like);
    } else {
      props.deleteLikeMovie(props.movie.id);
      setLike(!like);
    }
    setBlock(!like);
  }

  const handleBlock = () => {
    props.addBlockMovie(props.movie);
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <div className='poster-container'>
          <img className='poster' alt={movie.title} src={`${IMAGE_URI}${movie.poster_path}`}></img>
        </div>
        <div className='movie-title'>
          <div className="main-title" style={{fontSize: autoSizeFont(movie.title)}}>{movie.title}</div>
          <div className="sub-title">{moment(movie.release_date).format('MMM DD, YYYY')}</div>
        </div>
      </CardContent>
      <div className="hover-container">
      <div className="card-menu">
        <div className="button-area">
          <IconButton onClick={switchFavorite}>{favorite()}</IconButton>
          <IconButton disabled={block} onClick={handleBlock}><NotInterestedIcon fontSize='large'></NotInterestedIcon></IconButton>
        </div>
        <div className="rating">
          <Rating
            defaultValue={movie.vote_average * 0.5}
            precision={0.2}
            readOnly={true}
          />
          <div className='rating-score'>{movie.vote_average % 1 === 0 ? movie.vote_average+'.0' : movie.vote_average }</div>
        </div>
      </div>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    likeList: state.likeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLikeMovie: (movie) => dispatch(addLikeMovie(movie)),
    addBlockMovie: (movie) => dispatch(addBlockMovie(movie)),
    deleteLikeMovie: (id) => dispatch(deleteLikeMovie(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieItem)
