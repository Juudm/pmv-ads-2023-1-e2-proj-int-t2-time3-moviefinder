import './Busca.css'

import {api} from "../../services/api.js";
import React, {useEffect, useState} from "react";

import MovieCard from '../../components/MovieCard/MovieCard'

import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Autocomplete, { createFilterOptions } from '@mui/joy/Autocomplete';

function Busca() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  
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

  useEffect(() => {
    getPopularMovies()
  }, [])

  return (
    <div className="search-body">
      <Sidebar
       className='sidebar-search-all'
       width='270'
       backgroundColor='rgba(255, 255, 255, 0)'
      >
        <h1>Movie Finder</h1>
        <Menu className='sidebar-menu-seach'>
          <FormControl id="filter-demo">
            <Autocomplete
              placeholder="Type something"
              options={movies}
              getOptionLabel={(option) => option.title || ''}
              filterOptions={filterOptions}
              sx={{ width: 400 }}
              inputValue={query}
              onInputChange={handleChange}
            />
          </FormControl>
          <h2>Filtros</h2>
          <MenuItem>Lançamentos</MenuItem>
          <SubMenu label="Generos">
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </SubMenu>
          <SubMenu label="Ordem alfabetica">
            <MenuItem> A-Z </MenuItem>
            <MenuItem> Z-A </MenuItem>
          </SubMenu>
          <SubMenu label="Por nota">
            <MenuItem> Melhores avaliados </MenuItem>
            <MenuItem> Piores avaliados </MenuItem>
          </SubMenu>
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
