import './Resultado.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import { IoIosArrowBack } from "react-icons/io"
import { MdKeyboardArrowRight } from "react-icons/Md"
import Footer from '../../components/Footer/Footer'

function Resultado() {

  return (
    <div className="resultado-body">

      <div className='resultado-movie'> 
        <div className='resultado-movie-header'>
            <IoIosArrowBack/>
            <h1>MovieFinder</h1>
            <div></div>
        </div>
        <div className='resultado-movie-details'>
          <img src="" alt="cebas" />
          <div>
            <h1>Nome do Filme</h1>
            <h2>genero</h2>
            <div>
              <p>descrição filme</p>
              <p>plataforma diponivel</p>
            </div>
            <div>
              <h1>Elenco</h1>
              <div>
                <img src="" alt="Diretor" />
                <img src="" alt="ator" />
                <img src="" alt="ator" />
                <img src="" alt="ator" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='recommendation-movies'>
        <div className='recommendation-movies-text'>
          <h2>Filmes Recomendado</h2>
          <MdKeyboardArrowRight />
        </div>
        <MovieCard/>
      </div>

      <Footer/>
    
    </div>
  )
}

export default Resultado
