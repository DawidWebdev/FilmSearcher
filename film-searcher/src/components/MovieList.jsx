import React from 'react'

export const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, index) => 
        <div className='movie-list'>
            <img src={movie.Poster} alt="movie" />
        </div>)}
    </>
  )
}