import React from 'react'
import { useState } from 'react'

export const Movie = ({movie, movieImage, movieTitle, movieYear}) => {
  return (
    <div className='movie'>
        <img src={movieImage} alt="" className='movie-image'/>
        <div className="movie-info">
            <div className="movie-title">{movieTitle}</div>
            <div className="movie-year">{movieYear}</div>
        </div>
    </div>
  )
}