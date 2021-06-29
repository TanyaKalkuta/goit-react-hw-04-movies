import React, { Component } from 'react';
import axios from 'axios';
import MoviesList from '../Component/MoviesList';
import SearchForm from '../Component/Searchform';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  //   async componentDidMount() {
  //     const response = await Axios.get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&language=en-US&page=1&include_adult=false`,
  //     );
  //     console.log(response.data.results);
  //     // this.setState({ movies: response.data.results });
  //   }

  // async componentDidMount() {
  //   const response = await Axios.get(
  //     `https://api.themoviedb.org/3/trending/movie/day?api_key=b0771150ba8a2e624afdbb8a92bbf802`,
  //   );
  //   console.log(response.data.results);
  //   this.setState({ movies: response.data.results });
  // }

  onChangeQuery = query => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&query=${query}`,
      )
      .then(response => {
        this.setState({
          movies: response.data.results,
        });
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
