import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='header' >
            <a href="" className="logo">GamerZone</a>

            <nav className="nav">
                <a href="#popular-games" className="">Juegos Top</a>
                <a href="#news" className="">Noticias</a>
                <a href="#reviews" className="">Reseñas</a>
                <a href="#products" className="">Productos</a>
                <a href="#anime-shirts" className="">Camisas</a>
                <a href="#anime-figures" className="">Merchandising</a>
            </nav>

        </header>
    ) 
} 

export default Navbar