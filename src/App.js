import React from 'react'
import { useState } from 'react'
import { Navbar, MovieContainer } from './components'

const URL = "https://www.omdbapi.com/";
// api key : 688eff80
//Start : https://www.omdbapi.com/?s=Shiva&apikey=688eff80


export default function App() {
  const [movie, setMovie] = useState();
  const [movieList, setMovieList] = useState([]);

  const searchMovie = async (e) => {
    if (e.code == 'Enter') {
      const fetchURL = URL + `?s=${movie}` + "&apikey=688eff80";
            const res = await fetch(fetchURL);
            res.json().then(data => {
                setMovieList(data.Search);
            })
    }
  }

  return (
    <>      
    <Navbar setMovie= {setMovie} searchMovie = {searchMovie}/>
    <MovieContainer movieList = {movieList}/>
    </>
  )
}
