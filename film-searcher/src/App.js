import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Movie } from './components/Movie';

const App = () => {
  const[movies, setMovies] = useState([]);
  const[searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=14e3337e`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search);
      console.log(movies);
    }
  }

  useEffect(() =>{
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <header>
        <div className='header-title'>FilmSearcher</div>
        <input type='text' className='header-input' placeholder='Search for a movie...' value={searchValue} onChange={e=>{
          setSearchValue(e.target.value);
        }}></input>
      </header>
      
      <main>
          <div className='movies-list'>
            {movies.map((movie) =>{
              return(
                <Movie movie={movie} movieImage={movie.Poster} movieTitle={movie.Title} movieYear={movie.Year.substr(0, 4)}/>
              )
            })}
          </div>
      </main>
    </>
  );
}

export default App;
