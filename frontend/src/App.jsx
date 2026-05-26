import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Principal from './pages/principal'
import Cardapio from './pages/cardapio'
import Delivery from './pages/delivery'
import Reservas from './pages/reservas'
import Cadastro from './pages/cadastro'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Principal</Link>
        <Link to="/cardapio">Cardápio</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/reservas">Reservas</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App