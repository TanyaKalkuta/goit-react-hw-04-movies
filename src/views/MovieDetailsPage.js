import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../Component/Cast';
import Reviews from '../Component/Reviews'

class MovieDetailsPage extends Component {
    state = {
        // movie:null,
        poster_path: null,
        title: null,
        popularity:null,
        overview:null,
        genres:[],
    };

        
    async componentDidMount() {
        const { movieId } = this.props.match.params;

    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b0771150ba8a2e624afdbb8a92bbf802`);
    // console.log(response.data);
        this.setState({...response.data });
    }
    

  render() {
        
        const { poster_path, title, popularity, overview, genres } = this.state;
        // const urlPoster = `https://image.tmdb.org/t/p/w500/${poster_path}`
    return (
            <>
<div className="MovieDetailsPage">
          {/* <h1>страница одной книги id: {this.props.match.params.movieId}</h1> */}
     <img src={ `https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""
     className="Movie--img" />
     <div className="MoviesInformation">
     <h1>{title}</h1>
     <p>User Score:{popularity}%</p>
     <h2>Overview</h2>
     <p>{overview}</p>
     <h3>Genres</h3>
     <ul>
         {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
     </ul>
         
     </div>
               
</div>
               
 <div className="MovieAdditionalInfo">
    <h4 className="title">Additional information</h4>
    <ul>
      <li>
        <NavLink
          exact
          to={`/movies/${this.props.match.params.movieId}/cast`}
          className="NavLinkMovies"
        >
          Cast</NavLink>
      </li>
      <li>
        <NavLink
          to={`/movies/${this.props.match.params.movieId}/reviews`}
          className="NavLinkMovies"
        >
          Reviews</NavLink>
      </li>
    </ul>
  </div>       
        <Route path="/movies/:movieId/cast" render={props =>
            < Cast movieId={props.match.params.movieId} />}/>
                    
        <Route
            path="/movies/:movieId/reviews"
            render={props => {
            console.log(props.match.params.movieId);
            return < Reviews movieId={props.match.params.movieId} />
            }}
        />          
      </>
      )    
    }
}
 
export default MovieDetailsPage;