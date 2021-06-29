import React from 'react';

const MovieCard = ({ poster_path, title, vote_average, overview, genres }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="MovieDetailsPage">
      {/* <h1>страница одной книги id: {this.props.match.params.movieId}</h1> */}
      <img
        src={`${IMG_URL}/${poster_path}`}
        alt="title"
        className="Movie--img"
      />
      <div className="MoviesInformation">
        <h1>{title}</h1>
        <p>User Score:{vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
