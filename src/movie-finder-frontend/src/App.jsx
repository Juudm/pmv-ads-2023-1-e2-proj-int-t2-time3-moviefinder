import './App.css'
import Home from './pages/Home/Home'
import Busca from './pages/Busca/Busca'
import Resultado from './pages/Resultado/Resultado'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Busca" element={<ProSidebarProvider><Busca/></ProSidebarProvider>} />
        <Route path="/Resultado" element={<Resultado/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
