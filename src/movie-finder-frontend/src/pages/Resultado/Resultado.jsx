import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react'
import { api } from "../../services/api";

import { Link, useParams, useNavigate } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GoSearch } from "react-icons/go"
import { MdKeyboardArrowRight } from "react-icons/Md"
import { BsListStars, BsFillCircleFill } from "react-icons/bs"
import { MdOutlineFavorite } from "react-icons/Md"
import { Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Rodal from 'rodal';

import './Resultado.css'

function Resultado() {

  const { id } = useParams()
  const [visibleFavorites, setvisibleFavorites] = useState(false)
  const [starFill, setStarFill] = useState(false)
  const [recomendationMovies, setRecomendationMovies ] = useState([])
  const [movie, setMovie ] = useState([])
  const [discoverList, setDiscoverList ] = useState([])

  const navigate = useNavigate()

  const toHoursAndMinutes = () => {
    const totalTimeInMin = movie.runtime
    return Math.floor(totalTimeInMin / 60) + 'h' + totalTimeInMin % 60 + 'm'
  }

  const showModalFavorites = () => { setvisibleFavorites(true);}
  const closeModalFavorites = () => {setvisibleFavorites(false);}
  
  const starFillCheck = () =>  setStarFill(!starFill) 

  const gotoDetails = (movie) => { 
    navigate(`/Resultados/${movie.id}`);
    window.location.reload(true)
  }

  const getMovie = async () => {
    const response = await api.get(`/movieFinder/movie/${id}`)
    const movie = response.data
    setMovie(movie)
    const genres = movie.genres.map((genre) => genre.id).join()
    getDiscoverList(genres)
  }

  const getDiscoverList = async (genreIds) => {
    const response = await api.get(`/movieFinder/discover/movie?genreId=${genreIds}`)
    setDiscoverList(response.data.results) 
  }

  const getRecomendationMovies = async () => {
    const response = await api.get(`/movieFinder/recommendation/list/${id}`)
    setRecomendationMovies(response.data.results)

  }


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
    getMovie()
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="results-body">

      <div 
        className='results-movie'
        style={{
          backgroundImage: `url(${"http://image.tmdb.org/t/p/original" + movie.backdropPath})`,
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
        }}
      > 
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
            <span onClick={showModalFavorites}>
              <BsListStars/>
            </span>
            <Rodal
                visible={visibleFavorites}
                onClose={closeModalFavorites}
                showMask={true}
                closeOnEsc={true}
                closeMaskOnClick={true}
                showCloseButton={true}
                className="rodal-favorites-results"
                width={600}
                height={600}
                customStyles={{
                  background: 'linear-gradient(45deg, rgba(6,35,64,1) 24%, rgba(6,10,64,1) 49%, rgba(11,4,46,1) 68%)',
                  borderRadius: '10px',
                }}
              >
                <div className="modal-favorites-results">
                  <h1>MovieFinder</h1>
                </div>
              </Rodal>
          </div>
        </div>
        <div className='results-movie-details'>
          <div className='results-movie-details-card'>
            <img
            src={"http://image.tmdb.org/t/p/original" + movie?.posterPath}
            alt="card"
            style={{
              width: "100%",
              height: "450px"
            }}             
            />
            <div className='results-movie-details-card-streaming'>
              {/* {movie.providers && movie.providers.results.BR.flatrate?.length > 0 && movie.providers.results.BR.flatrate.map((provider) => (
                <img src={"https://image.tmdb.org/t/p/original" + provider.logoPath} alt="plataforma" />
              ))} */}
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
                <h1>{movie.title}</h1>  
                <h1>(ANO)</h1>  
              </div>
              <div className='results-movie-details-subdetails'>
                <p>{movie.releaseDate}</p>
                <p>{movie.originalLanguage}</p>
                <span><BsFillCircleFill /></span>
                {movie?.genres?.map((movie) => (
                  <p>{movie.name}</p>
                ))}
                <span><BsFillCircleFill /></span>
                <p>{toHoursAndMinutes()}</p>  
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
                        value={Math.round((movie.voteCount / 10) * movie.voteAverage)}
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
                          {`${Math.round((movie.voteCount / 10) * movie.voteAverage)}%`}
                        </Typography>
                      </Box>
                    </div>
                  </Box>
                </ThemeProvider>
                <div className='results-movie-details-rating-text'>Avaliação <p>feita pelo</p> <p>TMDB</p></div>
              </div>
            </div>
            <div className='results-movie-details-title-subdetails'>
              <h2>Sinopse</h2>
              <p>{movie.overview}</p>
            </div>
            <div className='results-movie-details-title-subdetails'>
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
          {recomendationMovies.map((movie, index) => movie.posterPath && (
            <SwiperSlide onClick={() => gotoDetails(movie)} className="swiper-cards-slide"virtualIndex={index}>
              <MovieCard movie={movie} posterSize="200px" /> 
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className='recommendation-movies'>
          <div className='recommendation-movies-text'>
            <h2>Filmes do mesmo gênero</h2>
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
            {discoverList.map(movie => (
              <SwiperSlide className="swiper-cards-slide" >
                <MovieCard movie={movie} posterSize="200px" /> 
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Footer/>
    
    </div>
  )
}

export default Resultado
