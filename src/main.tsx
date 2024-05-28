import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./pages/Home"
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import PokemonDetails from './pages/PokemonDetails'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Footer from './components/Footer';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Header />
    <NavigationBar />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails/>} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
    <Footer />

    

    
  </React.StrictMode>,
);


