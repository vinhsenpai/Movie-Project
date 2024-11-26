import React from 'react'
import './Movie.css'

const Movie = (props) => {
    const {item} = props;

    const Clicked = () => {
        document.getElementById("banner-img").src=item.imageBanner
        document.getElementById("banner-title").innerHTML=item.movieName
        document.getElementById("banner-text").innerHTML=item.description

    }

    return (
        <div className='Movie-area' onClick={Clicked}>
            <img src={item.image}/> 
            <div className='Movie-ep'>Episode {item.episode}</div>
            <div className='Movie-name'>{item.movieName}</div>
            <div className='Movie-blur'></div>
            
            
        </div>
    )
}

export default Movie
