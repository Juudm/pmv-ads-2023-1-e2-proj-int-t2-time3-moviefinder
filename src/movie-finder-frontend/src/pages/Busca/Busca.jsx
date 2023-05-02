import './Busca.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import { IoIosArrowBack } from "react-icons/io"
import {api} from "../../services/api.js";
import React, {useState} from "react";

function Busca() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = async (event) => {
    setQuery(event.target.value);
    const response = await findMovie(event.target.value);
    setMovies(response);
  }

  const findMovie = async (query) => {
    const response = await api.get(`/movieFinder/movie_query/${query}`)
    return response.data.results;
  }

  return (
    <div className="busca-body">

      <div className="sidebar-busca">
        <div className='sidebar-busca-top'>
          <div className='sidebar-busca-arrow'>
            <IoIosArrowBack /> 
          </div>
            <h1>Movie Finder</h1>
        </div>
          <input type="text" value={query} onChange={handleChange}/>
        <div className='sidebar-busca-filters'>
          <h1>Filtros</h1>
          <div className='sidebar-busca-filters-dropdown'>
            <button>Genero</button>
            <button>A-Z</button>
            <button>Lançamentos</button>
            <button>Nota</button>
          </div>
        </div>
      </div>

      <div>
        <h1>Resultados</h1>
        {movies.map((movie) => <MovieCard movie={movie} posterSize="200px" />)}
      </div>

    </div>
  )
}

export default Busca
