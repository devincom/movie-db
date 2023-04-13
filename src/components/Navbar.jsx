import React from 'react'
import '../styles/Navbar.css'

export default function Navbar({ setMovie, searchMovie }) {
  return (
    <header className='navbar'>
        <h1>Moview-Details-Application</h1>
        <input type="text" placeholder='Enter a movie name'
        onChange={
            (e) => {
                console.log(e.target.value);
                setMovie(e.target.value);
            }
        }
        onKeyDown={searchMovie}
        />
    </header>
  )
}
