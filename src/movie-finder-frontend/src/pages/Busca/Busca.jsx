import './Busca.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import { IoIosArrowBack } from "react-icons/io"

function Busca() {

  return (
    <div className="busca-body">

      <div className="sidebar-busca">
        <div className='sidebar-busca-top'>
          <div className='sidebar-busca-arrow'>
            <IoIosArrowBack /> 
          </div>
            <h1>Movie Finder</h1>
        </div>
          <input type="text" />
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
        <MovieCard/>
      </div>

    </div>
  )
}

export default Busca
