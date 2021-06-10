/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';
import Navigation from 'src/components/dashboard';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/pages/HomeView';
import Error404View from 'src/views/pages/Error404View';
import Badge from 'src/components/Badge';
import EventDefaultPage from 'src/views/pages/events/eventdefault';
import Firebasecurd from "src/firebase/Firebasecurd"

const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <MainLayout>
            <HomeView {...props} />
          </MainLayout>
        )}
      />
      <Route path="/dashboard" exact render={() => <Navigation />} />
      <Route path="/profile" exact render={() => <Badge />} />

      <Route path="/events" exact render={() => <EventDefaultPage />} />
      <Route path="/firebase" exact render={() => <Firebasecurd/>} />
      <Route path="*" exact render={() => <Error404View />} />
    </Switch>
  </Suspense>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
