import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <section className='principal-section'>
      <div className='home-title'>
        <h1>Bienvenidos al CMS Carpe Diem </h1>
        <h2>Aprovecha tu tiempo y crea experiencias</h2>
      </div>



      <div className='container-general'>

        <div className='Exp-container'>
          <h2>Experiencias </h2>
          <div className='button-experience'>
            <Link to="/new-experience"><button className='button-uno'>Nuevo </button></Link>
            <Link to="/experiences"><button className='button-uno'>Ver</button></Link>
          </div>
        </div>

        <div className='pdis-container'>
          <h2>PDIS </h2>
          <div className='button-pdi'>
            <Link to="/new-pdi"><button className='button-uno'>Nuevo</button></Link>
            <Link to="/pdis"><button className='button-uno'>Ver</button></Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;