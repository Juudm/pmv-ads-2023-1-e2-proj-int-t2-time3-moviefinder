import './Busca.css'

import {api} from "../../services/api.js";
import React, {useEffect, useState} from "react";

import MovieCard from '../../components/MovieCard/MovieCard'

import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import FormControl from '@mui/joy/FormControl';
import Autocomplete, { createFilterOptions } from '@mui/joy/Autocomplete';

function Busca() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genreList, setGenreList] = useState([])
  
  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });
  
  const handleChange = async (event, inputValue) => {
    setQuery(inputValue);
    if (inputValue === '') {
      setMovies(popularMovies)
      return
    } 
    const response = await findMovie(inputValue);
    setMovies(response);
  }

  const findMovie = async (query) => {
    const response = await api.get(`/movieFinder/movie_query/${query}`)
    return response.data.results;
  }
   
  const getPopularMovies = async () => {
    const response = await api.get('/movieFinder/movie/popularity')
    setMovies(response.data)
    setPopularMovies(response.data)
  }

  const getGenreList = async () => {
    const response = await api.get('/movieFinder/genre/list')
    setGenreList(response.data.genres) 
  }
  
  useEffect(() => {
    getPopularMovies()
    getGenreList()
  }, [])

  return (
    <div className="search-body">
      <Sidebar
      className='sidebar-search-all'
      backgroundColor='rgba(255, 255, 255, 0)'
      >
        <Link to='/' title="Go to home">
          <h1>Movie Finder</h1>
        </Link>
        <Menu className='sidebar-menu-seach'>
          <FormControl id="filter-demo">
            <div className="teste">
              <Autocomplete
                className='teste'
                placeholder="Type something"
                options={movies}
                getOptionLabel={(option) => option.title || ''}
                filterOptions={filterOptions}
                inputValue={query}
                onInputChange={handleChange}
                style={{margin: "30px"}}
              />
            </div>
          </FormControl>
          <div className="sidebar-filter-search">
            <h2>Filtros</h2>
            <MenuItem>Lançamentos</MenuItem>
            <SubMenu label="Generos" >
              {genreList.map((name) => (
                <MenuItem>
                  <p>
                    {name.name}
                  </p>
                </MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Ordem alfabetica">
              <MenuItem> A-Z </MenuItem>
              <MenuItem> Z-A </MenuItem>
            </SubMenu>
            <SubMenu label="Por nota">
              <MenuItem> Melhores avaliados </MenuItem>
              <MenuItem> Piores avaliados </MenuItem>
            </SubMenu>
          </div>
          </Menu>
      </Sidebar>
      <div className='results-search'>
        <h1>Resultados</h1>
        <div className='results-search-cards'>
          {movies.map((movie) => movie.poster_path && <MovieCard movie={movie} posterSize="200px"/>)} 
        </div>
      </div>

    </div>
  )
}

export default Busca
