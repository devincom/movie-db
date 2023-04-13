import React from 'react'
import '../styles/MovieCard.css'

export default function MovieCard({ movie }) {
  return (
    <div className='movie-card card'>
        <img src={movie.Poster} alt="Image"/>
        <h2>{movie.Title}</h2>
        <p>Year : {movie.Year}</p>
    </div>
  )
}
