import React from 'react'
import '../styles/MovieContainer.css'
import MovieCard from './MovieCard'


export default function MovieContainer( { movieList }) {
  return (
    <div className='movie-container'>
        {
            movieList == undefined ? <h1 className="noMovie">No Such movies Found !!</h1> :
            movieList.length == 0 || movieList.length == undefined ? <h1 className="noMovie">Nothing to Show...</h1> : 
            movieList.map((movie, index) =>
                (
                    <MovieCard movie={movie} />
                )
            )
        }
        
    </div>
  )
}
