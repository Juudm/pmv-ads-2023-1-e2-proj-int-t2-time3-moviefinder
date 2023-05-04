import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react'
import { api } from "../../services/api";

import { Link } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GoSearch } from "react-icons/go"
import { MdKeyboardArrowRight } from "react-icons/Md"
import { BsListStars, BsFillCircleFill } from "react-icons/bs"
import { MdOutlineFavorite } from "react-icons/Md"
import { Typography, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from "swiper/react";

import './Resultado.css'

function Resultado() {

  const [starFill, setStarFill] = useState(false)
  const [recomendationMovies, setRecomendationMovies ] = useState([])

  const getRecomendationMovies = async () => {
    const response = await api.get(`/movieFinder/recommendation/list/${Id}`)
    setRecomendationMovies(response.data.results)
  }
  const starFillCheck = () =>  setStarFill(!starFill) 
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: 'rgba(255, 255, 255, 0.849)',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#ff0000',
      },
    },
  });

  useEffect(() => {
    getRecomendationMovies()
  },[])

  return (
    <div className="results-body">

      <div className='results-movie'> 
        <div className='results-movie-header'>
          <div className='results-header-left'>
            <Link to="/Busca" > <h2> <GoSearch style={{color: "rgba(255, 255, 255, 0.849)"}}/>Pesquisar</h2> </Link>
          </div>
          <div className='results-header-center'>
            <Link to="/">
              <h1>MovieFinder</h1>
            </Link>
          </div>
          <div className="results-header-right">
            <span>
              <BsListStars/>
            </span>
          </div>
        </div>
        <div className='results-movie-details'>
          <div className='results-movie-details-card'>
            <img
             src="https://assets.materialup.com/uploads/4045167a-85e3-4787-a6d1-e91a32071bf7/preview.jpg"
             alt="card"
             style={{
              width: "300px",
              height: "450px"
             }}             
            />
            <div className='results-movie-details-card-streaming'>
              <img src="https://assets.materialup.com/uploads/4045167a-85e3-4787-a6d1-e91a32071bf7/preview.jpg" alt="plataforma" />
              <div className='results-movie-details-favorite'>
                <h4 className='results-movie-details-favorite-circle' onClick={ starFillCheck }>
                  {starFill ? <span><MdOutlineFavorite className='results-movie-details-favorite-icon' style={{color: "rgba(255, 0, 0, 0.596"}} /></span> :
                  <span><MdOutlineFavorite className='results-movie-details-favorite-icon' /></span>}
                </h4>
              </div>
              <div className='results-movie-details-card-streaming-text'>
                <p>Disponivel em</p>
                <h2>Asista agora</h2>
              </div>
            </div>
          </div>
          <div className='results-movie-details-text' >
            <div className='results-movie-details-title-subdetails'>
              <div className='results-movie-details-title'>
                <h1>Filme titulo - Movie Finder</h1>  
                <h1>(ANO)</h1>  
              </div>
              <div className='results-movie-details-subdetails'>
                <p>da/ta/2023</p>
                <p>language</p>
                <span><BsFillCircleFill /></span>
                <p>genero</p>
                <span><BsFillCircleFill /></span>
                <p>duração</p>
              </div>
            </div>
            <div className='results-movie-details-rating-all'>
              <div className='results-movie-details-rating-circle'>
                <ThemeProvider theme={theme}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      display: 'inline-flex',
                    }}
                  >
                    <div className='results-movie-details-rating'>
                      <CircularProgress
                        value={100}
                        variant="determinate"
                        sx={{
                          position: 'absolute',
                          color: 'rgba(0, 0, 0, 0.432)'
                        }}
                        size={70}
                      />
                      <CircularProgress
                        value={80}
                        variant="determinate"
                        theme={theme}
                        size={70}
                      />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: 'absolute',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                        variant="caption"
                        component="div"
                        color="rgba(255, 255, 255, 0.849)"
                        >
                          {`${Math.round(1)}%`}
                        </Typography>
                      </Box>
                    </div>
                  </Box>
                </ThemeProvider>
                <div className='results-movie-details-rating-text'>Avaliação <p>feita pelo</p> <p>TMDB</p></div>
              </div>
            </div>
            <div>
              <h2>Sinopse</h2>
              <p>plataforma diponivel</p>
            </div>
            <div>
              <h2>Nome Diretor</h2>
              <p>Diretor</p>
            </div>
          </div>
        </div>
      </div>
      <div className='content-body'>
        <div className='content-body-details'>
          <div className='content-body-details-elenco'>
            <h1>Elenco Principal</h1>
            <div className='content-body-details-elenco-card'>
              <img src="" alt="foto ator" />
              <p>Nome Ator</p>
            </div>
          </div>
          <div className='content-body-details-additional'>
            <div>
              <h2>Orçamento</h2>
              <p>$ 100.000,00</p>
            </div>
            <div>
              <h2>Receita</h2>
              <p>$ 100.000,00</p>
            </div>
            <div>
              <h2>Situação</h2>
              <p>Lançado</p>
            </div>
          </div>
        </div>
        <div className='recommendation-movies'>
          <div className='recommendation-movies-text'>
            <h2>Filmes Recomendados</h2>
            <MdKeyboardArrowRight />
          </div>
          <Swiper
            loop={true}
            loopPreventsSliding={true}
            navigation={true}
            virtual
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.75": {
                slidesPerView: 3,
              },
              "@1.00": {
                slidesPerView: 4,
              },
              "@1.50": {
                slidesPerView: 8,
              },
            }}
          >
          {recomendationMovies.map((movie, index) => movie.poster_path && (
            <SwiperSlide className="swiper-cards-slide"virtualIndex={index}>
              <MovieCard movie={movie} posterSize="200px" /> 
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className='recommendation-movies'>
          <div className='recommendation-movies-text'>
            <h2>Filmes Genero do filme</h2>
            <MdKeyboardArrowRight />
          </div>
          <Swiper
            loop={true}
            loopPreventsSliding={true}
            navigation={true}
            virtual
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.75": {
                slidesPerView: 3,
              },
              "@1.00": {
                slidesPerView: 4,
              },
              "@1.50": {
                slidesPerView: 8,
              },
            }}
          >
            <SwiperSlide className="swiper-cards-slide" >
              <MovieCard posterSize="200px" /> 
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Footer/>
    
    </div>
  )
}

export default Resultado
