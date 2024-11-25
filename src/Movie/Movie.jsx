import React from 'react'
import './Movie.css'

const Movie = (props) => {
    const {item} = props;

    const Clicked = () => {
        document.getElementById("banner-img").src="https://s3-alpha-sig.figma.com/img/a159/88d8/3feb9d7a97a93cac67eb291272ab227e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f5k1WBYZxaoVkFTwI-94mq4J6wLwoJkTSotxhDEo04OGfnfMTI7MIAd-QLYnGbyTvHRkSlKmvlKgjht-883JhGw5GZa94KY3ibA-ZzNcjg-CZWrYvmFkpUs3Qo2pOu9MoaD78~SXSvvkDvnLUV2kJfyjs8lXuZ6z75CRXbawX9FCHGJ1MJBDf2U6iTcXhYA0-YcVWrN3PNIbWfsdINJ-lQfJYRin9ZoBOs2nZa-GRjJ4z0wN5KJXmVPQ-FdQC1anZJ98h92sNzcLo25bl7G1V6xgqJf111pgSGZbZa2Bu0k48dtU3CV0~pn39wvyZ6dlLfVCq2SvPPm4ggPONIeYxg__"
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
