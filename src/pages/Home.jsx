import React from 'react'
import './css/Home.css'
import HomeImg from '../assets/Home_Illustration.svg'
import SearchBar from '../components/SearchBar'


function Home() {
  return (
    <section id='home'>
        <div className="home__container">
            <div className="home__row">
                <div className="home__content">
                    <h1 className='home__title'>OMDb Movies</h1>
                    <h3 className='home__title--description'>Search for your favourite movies from our <span className='purple'>large collection</span></h3>
                    <SearchBar/>
                </div>
                <div className="home__images">
                    <img src={HomeImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home