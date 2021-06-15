import React from 'react';
import './home-style.css';
import ImgLogo from './img/logo.png';
import { Link } from "react-router-dom"

const Home = () => (

    <div className="bg-home">

        <header className="container-fluid bg-header-home">

            <Link to="/"><img src={ImgLogo} alt="Logo" />Telzir</Link>


        </header>

        <section className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="introducao text-center p-5">
                        <h1>Plano Fale Mais</h1>
                        <Link to="/gastos" className="btn-introducao btn-calcule" role="button">Calcule Aqui</Link>
                        <Link to="/help" className="btn-introducao btn-ajuda" role="button">Saiba Mais</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>

);

export default Home;