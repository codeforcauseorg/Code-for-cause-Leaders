import { Drawer } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useHistory } from 'react-router';
import Logo1 from '../../components/Logo1';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'white',
    color: '#291755'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#291755'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#291755'
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '30px'
  },
  disabled: {
    color: 'rgb(255,255,255,0.5)'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(3),
    marginTop: '80px',
    width: '100%'
  }
}));

export default function DrawerLayout({ children }) {
  const classes = useStyles();
  const history = useHistory();

  const myStyles = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const navItems = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Profiles', link: '/profile' },
    { name: 'Events', link: '/events' },
    { name: 'Blogs', link: '/blogs' },
    { name: 'Settings', link: '/settings' },
    { name: 'Log out', link: '/logout' }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={myStyles}>
          <Logo1 />
          <Typography variant="h6" noWrap>
            User Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <List>
          {navItems.map(({ name, link }, idx) => (
            <ListItem button key={idx} style={{ paddingLeft: '20%' }}>
              <ListItemText
                onClick={() => {
                  history.push(link);
                }}
                primary={
                  <Typography
                    type="body2"
                    className={clsx(
                      classes.textStyle,
                      window.location.pathname !== link ? classes.disabled : ''
                    )}
                  >
                    {name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
