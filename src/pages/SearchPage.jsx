import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import './css/SearchPage.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { searchTerm } from '../components/SearchBar';


function SearchPage() {
  const search = searchTerm
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  function errorMovie() {
    alert('Movie not found')
  }

  async function getMovies() {
    const response = await axios.get(`http://www.omdbapi.com/?s=${search}&page=1&apikey=a0d26b4b&`)
    console.log(response);
    const data = response.data.Search
    if (data) {
      console.log(data);
      setMovies(data);
    }
    else {
      errorMovie()
    }
    
  } 

  useEffect(() => {
    getMovies()
  },[search])

  return (
    <section className="search__page">
      <div className="container">
        <div className="row">
          <div className="search__header">
            <h2 className='section__title'>Browse Movies</h2>
            <SearchBar/>
          </div>
          <div className="movies">
            {movies.slice(0, 6).map(movie => (
                <div className="movie" key={movie.imdbID} onClick={() => navigate(`/${movie.imdbID}`)} >
                  <figure className="movie__img--wrapper">
                    <img className="movie__img" src={movie.Poster} alt=""/>
                  </figure>
                  <div className="movie__display-text">
                    <div className="movie__title">{movie.Title}</div>
                    <div className="movie__year">Released: {movie.Year}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPage