import React, { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duración de la animación en milisegundos
      once: false,     // Asegura que la animación ocurra cada vez que el elemento esté en la vista
      mirror: true,    // Permite animación cuando vuelves a desplazarte hacia arriba
    });
  }, []);

  useEffect(() => {
    AOS.refresh();    // Refresca las animaciones para asegurar que siempre se recalculen
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the Game Page</h1>
      <Navbar />
      <div data-aos="fade-down-right" className="game-item">
      </div>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="game-item"
      > 
      </div>

      <div data-aos="fade-down-left" className="game-item">
      </div>

      <div data-aos="flip-up" className="news-grid">
      </div>

      <div data-aos="zoom-out-up"></div>

      <div data-aos="fade-up"
     data-aos-anchor-placement="top-center">
      </div>

      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
     </div>

     <div data-aos="zoom-in-left"></div>

     <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">
     </div>

    </div>
  );
};

export default App;


