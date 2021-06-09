import { makeStyles } from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
// import DrawerLayout from 'src/layouts/DrawerLayout';
import Hero from './Hero';
import Footer from '../common/Footer';
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#291755',
    overflowX: 'hidden'
  }
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero />
      <Footer />
    </Page>
  );
}

export default HomeView;
