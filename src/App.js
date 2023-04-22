import React from 'react';
import './App.css'
import { useState } from 'react';
import MovieCard from './components/MovieCard';
import SearchIcon from './search.svg';
const App = () => {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=22cd9843";
  const searchMovies = async (v) => {
    const response = await fetch(`${API_URL}&s=${v}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search)
  };

  let [movies, setMovies] = useState([]);
  let [title, setTitle] = useState('');
  return (
    <div className="app">
      <h1>Movies App</h1>
      <div className="search">
        <input placeholder='Search for a movie' value={title} onChange={(v) => {
          setTitle(v.target.value)
        }} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(title)} />
      </div>
      {
        movies==null ?
        (<h2>No movies found</h2>):
          (
            <div className="container">
              {
                movies.map((item) => {
                  return <MovieCard movie={item}></MovieCard>
                })
              }
            </div>
          ) 
         
      }
    </div>
  )
};
export default App;