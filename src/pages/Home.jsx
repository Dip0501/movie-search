import React from 'react'
import Navbar from '../components/Navbar.'
import './css/Home.css'
import HomeImg from '../assets/Home_Illustration.svg'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <section id='home'>
        <div className="home__container">
            <div className="home__row">
                <h1 className="home__title">
                  Find your favourite movies by browsing our extensive library
                </h1>
                <h2 className="home__title--description">
                  Our library is updated regularly to ensure you get access to the lastest movies
                </h2>
                <SearchBar/>
                <img src={HomeImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Home