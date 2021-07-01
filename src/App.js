import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
import routes from './routes';
import Container from './Component/Container';
import AppBar from './Component/AppNavBar';
import Spinner from './Component/Loader';
const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "moviesDetails-page" */
  ),
);

const App = () => (
  <Container>
    <AppBar />

    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />

        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
