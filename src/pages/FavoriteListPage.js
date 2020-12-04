import { IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react'
import { connect } from "react-redux";
import FavoriteIcon from '@material-ui/icons/Favorite';
import './FBListPage.scss'
import { deleteLikeMovie } from '../store/movieActions';
import { IMAGE_URI } from '../constants/api';
import PaginationComp from '../components/PaginationComp';
import Filter from '../components/Filter';


function FavoriteListPage({ likeList, deleteLikeMovie }) {

  const useStyles = makeStyles({
    list: {
      width: '80%',
      fontFamily: 'Montserrat'
    },
    fblistitem: {
      boxShadow: '1px 2px 8px -1px rgb(163, 163, 163)',
      borderRadius: '10px',
      margin: '20px 0px'
    },
  })
  const classes = useStyles();

  const handleClick = (movie) => {
    deleteLikeMovie(movie);
  }

  return (
    <div className="fb-container">
      <div className="page-header">
        <div className="pw-l">Favorite Movies</div>
      </div>
      <List className={classes.list}>
        {
          likeList.map((item, id) => { 
            return (
              <ListItem key={id} className={classes.fblistitem}>
                <ListItemAvatar>
                  <img className='fb-poster' alt={item.title} src={`${IMAGE_URI}${item.poster_path}`}></img>
                </ListItemAvatar>
                <ListItemText className={classes.text} primary={item.title} disableTypography />
                <ListItemSecondaryAction>
                  <IconButton onClick={(item) => handleClick(item)} edge="end">
                    <FavoriteIcon fontSize='large' color="secondary" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
      </List>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    likeList: state.likeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLikeMovie: (movie) => dispatch(deleteLikeMovie(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteListPage);
