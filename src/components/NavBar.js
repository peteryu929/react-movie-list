import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import './NavBar.scss';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TheatersIcon from '@material-ui/icons/Theaters';
import GradeIcon from '@material-ui/icons/Grade';
import BlockIcon from '@material-ui/icons/Block';
import MenuIcon from '@material-ui/icons/Menu';
import NavLogo from '../assets/nav_logo.svg';
import TitleLogo from '../assets/title_logo.svg';
import { IconButton } from '@material-ui/core';

function NavBar() {
  const useStyles = makeStyles({
    navlist: {
      width: '240px',
    },
    navitem: {
      padding: '15px 5px 15px 40px'
    },
    navText: {
      color: '#404040',
      fontFamily: 'Montserrat'
    },
    navMenu: {
      position: 'absolute',
      top: '15px',
      left: '20px'
    }
  })
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  const navList = [
    { title: 'Home', icon: <HomeIcon />, route: '/' },
    { title: 'Movie List', icon: <TheatersIcon />, route: '/movies' },
    { title: 'My Favorite', icon: <GradeIcon />, route: 'favorite' },
    { title: 'Block List', icon: <BlockIcon />, route: 'block' }
  ]

  return (
    <Fragment>
      <header className='nav-container'>
        <div className='nav-button'><IconButton className={classes.navMenu} onClick={() => setToggle(() => !toggle)}><MenuIcon style={{ fontSize: '32px' }} /></IconButton></div>
        <Link className='nav-link' to='/'><img alt="TMDB" src={TitleLogo}></img></Link>
        <div className='top-nav'>
          {
            navList.map((item, id) => {
              return <div className='top-nav-item' key={id}><Link className='nav-link' to={item.route}>{item.title}</Link></div>
            })
          }
        </div>
      </header>
      <Drawer anchor="left" open={toggle} onClose={() => setToggle(() => !toggle)}>
        <div>
          <List>
            <ListItem alignItems="center">
              <img className="nav-logo" alt="TMDB" src={NavLogo}></img>
            </ListItem>
          </List>
          <Divider />
          <List className={classes.navlist}>
            {navList.map((nav, index) => (
              <Link className='nav-link' to={nav.route} onClick={() => setToggle(() => !toggle)} key={index}>
                <ListItem className={classes.navitem} button>
                    <ListItemIcon>{nav.icon}</ListItemIcon>
                    <ListItemText disableTypography={true} className={classes.navText} primary={nav.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </Fragment>
  );
}

export default NavBar
