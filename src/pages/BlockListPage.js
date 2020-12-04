import { IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react'
import { connect } from "react-redux";
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import { IMAGE_URI } from '../constants/api';
import './FBListPage.scss'
import { deleteBlockMovie } from '../store/movieActions';
import PaginationComp from '../components/PaginationComp';
import Filter from '../components/Filter';

function BlockListPage({ blockList, deleteBlockMovie }) {
  
  const useStyles = makeStyles({
    list: {
      width: '80%',
      fontFamily: 'Montserrat'
    },
    fblistitem: {
      boxShadow: '1px 2px 8px -1px rgb(163, 163, 163)',
      borderRadius: '10px',
      margin: '20px'
    }
  })
  const classes = useStyles();

  const handleClick = (movie) => {
    deleteBlockMovie(movie);
  }

  return (
    <div className='fb-container'>
      <div className="page-header">
        <div className="pw-l">Block Movies</div>
      </div>
      <List className={classes.list}>
        {
          blockList.map((item, id) => {
            return (
              <ListItem key={id} className={classes.fblistitem}>
                <ListItemAvatar>
                  <img className='fb-poster' alt={item.title} src={`${IMAGE_URI}${item.poster_path}`}></img>
                </ListItemAvatar>
                <ListItemText className={classes.text} primary={item.title} disableTypography />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleClick(item)} edge="end">
                    <RestoreFromTrashIcon fontSize='large' />
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
    blockList: state.blockList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBlockMovie: (movie) => dispatch(deleteBlockMovie(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockListPage);
