import './App.css'
import Home from './pages/Home/Home'
import Busca from './pages/Busca/Busca'
import Resultado from './pages/Resultado/Resultado'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Busca" element={<Busca/>} />
        <Route path="/Resultado" element={<Resultado/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
