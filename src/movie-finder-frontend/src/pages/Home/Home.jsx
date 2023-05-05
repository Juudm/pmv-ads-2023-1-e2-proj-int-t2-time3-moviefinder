import React, { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/Md"
import { GoSearch } from "react-icons/go"
import SwiperCore, { Autoplay, Pagination, Navigation, Virtual } from "swiper";
import { Link, useNavigate } from 'react-router-dom';
import Rodal from 'rodal';
import Input from '@mui/joy/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('');
  const [open, setOpen] = React.useState(false);
  
  const navigate = useNavigate()

  const showModalLogin = () => { setvisibleLogin(true);}
  const closeModalLogin = () => {setvisibleLogin(false);}
  const showModalRegister = () => { setvisibleRegister(true);}
  const closeModalRegister = () => {setvisibleRegister(false);}

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      await api.post('/movieFinder/cadastrarUsuario', {
        nome: name,
        email,
        senha: password,
        idade: parseInt(age),
        genero: genre,
      })
      closeModalRegister()
      setOpen(true)
    } catch (error) {
      
    }
  }

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

  const gotoDetails = (movie) => { 
    navigate(`/Resultado/${movie.id}`);
  }

  useEffect(() => {
    getPopularMovies()
    getTopRatedMovies()
    getGenreList()
    window.scrollTo(0, 0)
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
                  background: 'linear-gradient(45deg, rgba(6,35,64,1) 24%, rgba(6,10,64,1) 49%, rgba(11,4,46,1) 68%)',
                  borderRadius: '10px',
                }}
              >
                <div className="modal-login-home">
                  <h1>MovieFinder</h1>
                  <div className="modal-login-body">
                    <div className="modal-login-text">
                      <h2>Login</h2>
                    </div>
                    <div className="modal-login-input-label">
                      <Input
                        color="neutral"
                        disabled={false}
                        size="md"
                        placeholder="Email..."

                      />
                      <Input
                        color="neutral"
                        disabled={false}
                        placeholder="Senha..."
                        size="md"
                      />
                    </div>
                    <div className="modal-login-in">
                      <p>Esqueceu a senha?</p>
                      <Button className="modal-button-login">Entrar</Button>
                    </div>
                  </div>
                    <Button className="modal-button-login">Cadastrar nova conta</Button>
                </div>
              </Rodal>
              <Rodal
                visible={visibleRegister}
                onClose={closeModalRegister}
                className="rodal-register-home"
                width={450}
                height={500}
                customStyles={{
                  background: 'linear-gradient(45deg, rgba(6,35,64,1) 24%, rgba(6,10,64,1) 49%, rgba(11,4,46,1) 68%)',
                  borderRadius: '10px',
                }}
               >
                <div className="modal-register-home">
                  <h1>MovieFinder</h1>
                  <div className="modal-register-input-button">
                    <div className="modal-register-text">
                      <h2>Cadastro</h2>
                    </div>
                    <Input
                      color="neutral"
                      disabled={false}
                      size="md"
                      placeholder="Nome Completo..."
                      value={name}
                      onChange={e => setName(e.target.value )}
                    />
                    <Input
                      color="neutral"
                      disabled={false}
                      size="md"
                      placeholder="Email..."
                      value={email}
                      onChange={e => setEmail(e.target.value )}
                    />
                    <Input
                      color="neutral"
                      disabled={false}
                      placeholder="Senha..."
                      size="md"
                      value={password}
                      onChange={e => setPassword(e.target.value )}
                    />
                    <Input
                      color="neutral"
                      disabled={false}
                      placeholder="Confirme sua senha..."
                      size="md"
                    />

                    <select                   
                      value={genre}
                      className="modal-register-select"
                      onChange={e => setGenre(e.target.value)}
                    >
                      <option value="Homem">Homem</option>
                      <option value="Mulher">Mulher</option>
                    </select>
                    <Input
                      color="neutral"
                      type="number"
                      disabled={false}
                      placeholder="Digite sua idade..."
                      size="md"
                      value={age}
                      onChange={e => setAge(e.target.value)}
                    />
                    <p>Crie sua conta agora no MovieFinder</p>
                    <Button
                     className="modal-register-button"
                     onClick={handleSubmit}
                    >
                      Cadastrar
                    </Button>
                  </div>
                </div>
              </Rodal>
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert elevation={100000000} onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  This is a success message!
                </Alert>
              </Snackbar>
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
              <SwiperSlide onClick={ () => gotoDetails(movie) } className="swiper-header-img" style={{
                height: "850px",
                backgroundImage: `url(${"http://image.tmdb.org/t/p/original" + movie.backdropPath})`,
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
                <SwiperSlide onClick={ () => gotoDetails(movie) }  className="swiper-cards-slide" key={movie} virtualIndex={index}>
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
                <MovieCard onClick={ () => gotoDetails(movie) } posterSize="200px" /> 
              </SwiperSlide>
            </Swiper>
          </div>
          {discoverList.map((moviesByGenre) => (
          <div className='recommendation-movies'>
            <div className='recommendation-movies-text'>
              <h2>Filmes de {moviesByGenre.genreName}</h2>
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
                <SwiperSlide onClick={ () => gotoDetails(movie) } className="swiper-cards-slide">
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
