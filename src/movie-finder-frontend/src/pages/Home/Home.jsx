import React, { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/Md"
import { GoSearch } from "react-icons/go"
import SwiperCore, { Autoplay, Pagination, Navigation, Virtual } from "swiper";
import { Link } from 'react-router-dom';
import Rodal from 'rodal';

import './Home.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'rodal/lib/rodal.css';

import MovieCard from '../../components/MovieCard/MovieCard';
import Footer from '../../components/Footer/Footer';

SwiperCore.use([Virtual, Navigation, Pagination]);

function Home() {
  
  const [visibleLogin, setvisibleLogin] = useState(false)
  const [visibleRegister, setvisibleRegister] = useState(false)
  const [popularMovies, setPopularMovies ] = useState([])
  const [topRatedMovies, setTopRatedMovies ] = useState([])
  const [discoverList, setDiscoverList ] = useState([])
  
  const showModalLogin = () => { setvisibleLogin(true);}
  const closeModalLogin = () => {setvisibleLogin(false);}
  const showModalRegister = () => { setvisibleRegister(true);}
  const closeModalRegister = () => {setvisibleRegister(false);}
 
  const getPopularMovies = async () => {
    const response = await api.get('/movieFinder/movie/popularity')
    setPopularMovies(response.data)
  }

  const getTopRatedMovies = async () => {
    const response = await api.get('/movieFinder/movie/top_rated')
    setTopRatedMovies(response.data)
  }
  
  const getGenreList = async () => {
    const response = await api.get('/movieFinder/genre/list')
    const { genres } = response.data 
    const promises = genres.map(async (genre) => {
      const discoverList = await getDiscoverList(genre.id)
      return {
        genreName: genre.name,
        movies: discoverList
      }
    })
    const genresWithMovies = await Promise.all(promises)
    setDiscoverList(genresWithMovies)
  }

  const getDiscoverList = async (genreId) => {
    const response = await api.get(`/movieFinder/discover/movie?genreId=${genreId}`)
    return response.data.results
  }

  useEffect(() => {
    getPopularMovies()
    getTopRatedMovies()
    getGenreList()
  }, [])

  return (
    <div className="home-body">

      <div className='header'>
        <div className="header-text">
            <div className='header-left'>
             <Link to="/Busca" > <h2> <GoSearch style={{color: "rgba(255, 255, 255, 0.849)"}}/>Pesquisar</h2> </Link>
            </div>
            <div className='header-center'>
              <Link to="/">
                <h1>MovieFinder</h1>
              </Link>
            </div>
            <div className='header-right'>
              <h2 onClick={showModalRegister}>Cadastro</h2>
              <h2 onClick={showModalLogin}>Login</h2>
              <Rodal
                visible={visibleLogin}
                onClose={closeModalLogin}
                showMask={true}
                closeOnEsc={true}
                closeMaskOnClick={true}
                showCloseButton={true}
                className="rodal-login-home"
                width={450}
                height={500}
                customStyles={{
                  background: 'rgb(60,140,220)',
                  background: 'linear-gradient(45deg, rgba(6,35,64,1) 24%, rgba(6,10,64,1) 49%, rgba(11,4,46,1) 68%)',
                  borderRadius: '10px',
                }}
              >
                <div className="modal-login-home">
                  <h1>MovieFinder</h1>
                  <h2>Login</h2>
                  <p>Faça seu login em sua conta no MovieFinder</p>
                  <label htmlFor="">Email</label>
                  <input type="text" name="" id="" />
                  <label htmlFor="">Senha</label>
                  <input type="text" name="" id="" />
                  <p>Esqueceu a senha?</p>
                  <button>Entrar</button>
                  <button>Cadastrar nova conta</button>
                </div>
              </Rodal>
              <Rodal
                visible={visibleRegister}
                onClose={closeModalRegister}
                className="rodal-register-home"
                width={450}
                height={500}
                customStyles={{
                  background: 'rgb(60,140,220)',
                  background: 'linear-gradient(45deg, rgba(6,35,64,1) 24%, rgba(6,10,64,1) 49%, rgba(11,4,46,1) 68%)',
                  borderRadius: '10px',
                }}
               >
                <div className="modal-register-home">
                  <h1>MovieFinder</h1>
                  <h2>Cadastro</h2>
                  <p>Crie sua conta agora no MovieFinder</p>
                  <label htmlFor="">Nome completo</label>
                  <input type="text" name="" id="" />
                  <label htmlFor="">Email</label>
                  <input type="text" name="" id="" />
                  <label htmlFor="">Senha</label>
                  <input type="text" name="" id="" />
                  <label htmlFor="">Confirme sua senha</label>
                  <input type="text" name="" id="" />
                  <button>Cadastrar</button>
                </div>
              </Rodal>
            </div>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper-home-header"
        >
          {popularMovies.map((movie) => (
            <SwiperSlide className="swiper-header-img" style={{
              height: "850px",
              backgroundImage: `url(${"http://image.tmdb.org/t/p/original" + movie.backdrop_path})`,
              backgroundPosition: "center",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
            }}>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    <div className="content-home-body">
      <div className="content-home">
          <div className='recommendation-movies'>
            <div className='recommendation-movies-text'>
              <h2>Filmes com melhores avaliações</h2>
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
              {topRatedMovies.map((movie, index) => (
                <SwiperSlide className="swiper-cards-slide" key={movie} virtualIndex={index}>
                  <MovieCard movie={movie} posterSize="200px" /> 
                </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className='recommendation-movies'>
            <div className='recommendation-movies-text'>
              <h2>Filmes recomendados</h2>
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
              <SwiperSlide className="swiper-cards-slide">
                <MovieCard posterSize="200px" /> 
              </SwiperSlide>
            </Swiper>
          </div>
          {discoverList.map((moviesByGenre) => (
          <div className='recommendation-movies'>
            <div className='recommendation-movies-text'>
              <h2>Filme {moviesByGenre.genreName}</h2>
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
              {moviesByGenre.movies.map((movie) => 
                <SwiperSlide className="swiper-cards-slide">
                  <MovieCard movie={movie} posterSize="200px" /> 
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          ))}
      </div>
      <Footer/>
    </div>
  </div>
  )
}

export default Home
