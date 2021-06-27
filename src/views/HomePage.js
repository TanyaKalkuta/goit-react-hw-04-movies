import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class HomePage extends Component {
    state = {
        movies:[],
    }
    
async componentDidMount() {
    const response = await Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=b0771150ba8a2e624afdbb8a92bbf802`);
    console.log(response.data.results);
    this.setState({ movies: response.data.results })
}

    render() {
        console.log(this.props.match.url);
        return (
            <>
                <h1>Trending today</h1>
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default HomePage;
