import React, { useEffect, useState } from 'react'
import './css/Movie.css'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

function Movie() {
  let navigate = useNavigate()
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  async function getMovieDetails(id) {
    const { data } = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=a0d26b4b`)
    setMovie(data)
    console.log(movie);
  }
  
  
  useEffect(() => {
    getMovieDetails(id)
  },[])


  return (
    <section id='movie__details'>
      <div className="container">
        <div className="row">
          <div className="movie__info__header" onClick={() => navigate('/search')}>
              <ArrowBackIcon className="movie__header--btn"/>
            <h2 className="movie__header--title">Back</h2>
          </div>
          <div className="movie__selected">
            <figure className="movie__poster--wrapper">
              <img src={movie.Poster} alt="" className="movie__poster" />
            </figure>
            <div className="movie__description">
              <h2 className="movie__selected--title">{movie.Title}</h2>
              <p>Director: {movie.Director}</p>
              <p>Actors: {movie.Actors}</p>
              <p>Classification: {movie.Rated}</p>
              <p>Genre: {movie.Genre}</p>
              <p>Release Date: {movie.Released}</p>
              <p>Runtime: {movie.Runtime}</p>
              <div className="movie__summary">
                <p>Plot: {movie.Plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movie