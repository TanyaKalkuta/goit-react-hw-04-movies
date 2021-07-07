import React, { Component } from 'react';
import axios from 'axios';
import MoviesList from '../Component/MoviesList';
import SearchForm from '../Component/Searchform';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const movies = localStorage.getItem('movies');
    const parsMovies = JSON.parse(movies);
    console.log(parsMovies);
    if (parsMovies) this.setState({ movies: parsMovies });
  }

  onChangeQuery = query => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&query=${query}`,
      )
      .then(response => {
        this.setState({
          movies: response.data.results,
        });

        localStorage.setItem('movies', JSON.stringify(this.state.movies));
        if (this.state.movies.length === 0) {
          alert('Sorry, movie not found');
        }
      });
  };

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />

        <h1>Movies Search</h1>

        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
export default MoviesPage;
