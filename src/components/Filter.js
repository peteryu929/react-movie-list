import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SortIcon from '@material-ui/icons/Sort';
import { IconButton, List, ListItem, Popover } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { sortMovieList } from '../store/movieActions';

function Filter() {

  // const route = useLocation().pathname.slice(1).toUpperCase();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (method) => {
    setAnchorEl(null);
    dispatch(sortMovieList(method))
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'sort-popover' : undefined;
  const sortMethod = ['title', 'time', 'rating']

  return (
    <div>
      <IconButton
        onClick={handleClick}
        aria-describedby={id}
        variant="contained"
      >
        <SortIcon style={{ fontSize: "28px" }}></SortIcon>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          {sortMethod.map((method, id) => {
            return (
              <ListItem
                style={{
                  padding: "10px 20px",
                  fontWeight: "600",
                  color: "rgb(80, 80, 80)",
                  fontSize: "13px",
                }}
                onClick={() => handleClose(method)}
                key={id}
                button
              >
                {`sort by ${method}`.toUpperCase()}
              </ListItem>
            );
          })}
        </List>
      </Popover>
    </div>
  );
}

export default Filter
