import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './styles.css';
import HomePage from './views/HomePage'
import MoviesPage from './views/MoviesPage'
import NotFoundView from './views/NotFoundViews'
import MovieDetailsPage from './views/MovieDetailsPage'

// import Button from './Component/Button';
// import Spinner from './Component/Loader';

// import SearchForm from './Component/Searchform';
// import apiFetchImages from './api';

const App = () => (
  <>
    <ul className="Navbar">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home</NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
       <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
     
      <Route component={HomePage} />
    </Switch>
</>
);
export default App;