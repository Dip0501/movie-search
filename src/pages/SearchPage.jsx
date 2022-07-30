import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import './css/SearchPage.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { searchTerm } from '../components/SearchBar';
import MissingImg from '../assets/missing_image.jpg'
import SearchError from '../assets/search_error.svg'


function SearchPage() {
  const search = searchTerm
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState()
  const [validSearch, setValidSearch] = useState()
  const navigate = useNavigate()


  function missingImage(image) {
    if (image == 'N/A') {
      return MissingImg
    }
    return image
  }

  async function getMovies() {
    setLoading(true)
    const response = await axios.get(`https://www.omdbapi.com/?s=${search}&page=1&apikey=a0d26b4b&`)
    const data = response.data.Search
    if (data) {
      console.log(data);
      setValidSearch(true)
      setMovies(data);
      setLoading(false)
    }
    else {
      setValidSearch(false)
      setLoading(false)
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
            {
              validSearch ? (
                  ( loading ? (
                  movies.slice(0, 6).map(movie => (
                  <div className="movie__skeleton">
                      <div className='movie__img--skeleton'/>
                      <div className="movie__display-text">
                        <div className="movie__title--skeleton"/>
                        <div className="movie__year--skeleton"/>
                      </div>
                  </div>
                  ))
                ) : ( 
                  movies.slice(0, 6).map(movie => (
                    <div className="movie" key={movie.imdbID} onClick={() => navigate(`/${movie.imdbID}`)} >
                      <figure className="movie__img--wrapper">
                        <img className="movie__img" src={missingImage(movie.Poster)} alt=""/>
                      </figure>
                      <div className="movie__display-text">
                        <div className="movie__title">{movie.Title}</div>
                        <div className="movie__year">Released: {movie.Year}</div>
                      </div>
                    </div>
                  )))
                )
              ) : (
                <div className='movie__search--fail'>
                  <img className='search__fail--img' src={SearchError} alt="" />
                  <h2 className='search__fail--text'>We couldn't find what you're after, try a different search.</h2>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPage