import React, { useEffect, useState } from 'react'
import './css/Movie.css'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MissingImg from '../assets/missing_image.jpg'

function Movie() {
  let navigate = useNavigate()
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState()

  async function getMovieDetails(id) {
    setLoading(true)
    const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a0d26b4b`)
    setMovie(data)
    setLoading(false)
    console.log(movie);
  }
  
  function missingImage (image) {
    if (image == 'N/A') {
      return MissingImg
    }
    return image
  }

  useEffect(() => {
    getMovieDetails(id)
  },[])


  return (
    <section id='movie__details'>
      <div className="container">
        <div className="row">
          <div className="movie__back" onClick={() => navigate('/search')}>
            <ArrowBackIcon className="movie__back--btn"/>
            <h2 className="movie__back--title">Back</h2>
          </div>
          {
            loading ? (
              <div className="movie__selected">
                <div className='movie__poster--wrapper movie__poster--skeleton'/>
                <div className="movie__description">
                  <h2 className="movie__selected--title skeleton"></h2>
                  <div className='movie__credits'>
                    <h3 className='movie__credit skeleton'></h3>
                    <h3 className='movie__credit skeleton'></h3>
                  </div>
                  <div className="movie__specifics">
                  <p className="movie__specific skeleton"></p>
                  <p className="movie__specific skeleton"></p>
                  <p className="movie__specific skeleton"></p>
                  <p className="movie__specific skeleton"></p>
                </div>
                <div className="movie__summary">
                  <p className="movie__summary--para skeleton"></p>
                </div>
                <div className="movie__ratings">
                  <p className="movie__rating skeleton"></p>
                  <p className="movie__rating skeleton"></p>
                </div>
                <button onClick={() => alert('Not yet implemented :(')} className="movie__watch">
                  <PlayCircleOutlineIcon className="movie__back--btn"/>
                  <h2 className="movie__back--title">Watch Now</h2>
                </button>
                </div>
              </div>
            ) : (
              <div className="movie__selected">
                <figure className="movie__poster--wrapper">
                  <img src={missingImage(movie.Poster)} alt="" className="movie__poster" />
                </figure>
              <div className="movie__description">
                <h2 className="movie__selected--title">{movie.Title}</h2>
                <div className='movie__credits'>
                  <h3 className='movie__credit'>Director: {movie.Director}</h3>
                  <h3 className='movie__credit'>Actors: {movie.Actors}</h3>
                </div>
                <div className="movie__specifics">
                  <p className="movie__specific">Classification: <br></br> {movie.Rated}</p>
                  <p className="movie__specific">Genre: <br></br>{movie.Genre}</p>
                  <p className="movie__specific">Release Date: <br></br>{movie.Released}</p>
                  <p className="movie__specific">Runtime:<br></br> {movie.Runtime}</p>
                </div>
                <div className="movie__summary">
                  <p className="movie__summary--para">{movie.Plot}</p>
                </div>
                <div className="movie__ratings">
                  <p className="movie__rating">Metascore: {movie.Metascore}</p>
                  <p className="movie__rating">IMDb: {movie.imdbRating}</p>
                </div>
                <button onClick={() => alert('Not yet implemented :(')} className="movie__watch">
                  <PlayCircleOutlineIcon className="movie__back--btn"/>
                  <h2 className="movie__back--title">Watch Now</h2>
                </button>
            </div>
          </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Movie