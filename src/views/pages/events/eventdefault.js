import {
  Box, Button, Grid, makeStyles
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import BookmarkedEvents from 'src/components/BookmarkedEvents';
import UserNewEvents from 'src/components/UserNewEvents';
import UserUpcomingEvents from 'src/components/UserUpcomingEvents';
import UserEventStats from 'src/components/UserEventStats';
// import SearchBar from 'src/components/search';
import DrawerLayout from 'src/layouts/DrawerLayout';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: '120px',
    marginTop: '20px',
    width: '280px',
    height: '55px',
    borderRadius: '20px',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '18px',
    background: '#291757',
    [theme.breakpoints.down('xs')]: {
      marginTop: '29px',
      marginLeft: '215px'
    }
  }
}));

export default function EventDefaultPage() {
  const classes = useStyles();
  const [bookmarkEvent] = useState(null);
  const history = useHistory();
  const handleClick = () => {
    history.push('/createEvent');
  };
  const [eventsConducted, setEventsConducted] = useState(0);
  const [eventsAttended, setEventsAttended] = useState(0);

  useEffect(() => {
    setEventsAttended(2);
  }, []);

  return (
    <DrawerLayout>
      <Grid container>
        <Grid justify="center" md={8} sm={12} xs={12}>
          { bookmarkEvent !== null && <BookmarkedEvents /> }
          {/* <SearchBar /> */}
          <UserNewEvents />
          <Box textAlign="center">
            <Button className={classes.button} onClick={handleClick}>
              Create New Event
            </Button>
          </Box>
        </Grid>
        <Grid md={4} sm={12} xs={12}>
          <UserUpcomingEvents setConducted={setEventsConducted} />
          <UserEventStats
            conducted={eventsConducted}
            attended={eventsAttended}
          />
        </Grid>
      </Grid>
    </DrawerLayout>
  );
}
