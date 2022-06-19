import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MovieList } from './components/MovieList'; 

const App = () => {
  const[movies, setMovies] = useState([]);
  const[searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () =>{
    const url = 'http://www.omdbapi.com/?s=star wars&apikey=14e3337e';
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  }

  useEffect(() =>{
    getMovieRequest();
  }, []);

  return (
    <>
      <header>
        <div className='header-title'>Film Searcher</div>
        <input type='text' className='header-input' placeholder='Search for a movie...'></input>
      </header>
      
      <main>
          <MovieList movies={movies}/>
      </main>
    </>
  );
}

export default App;
