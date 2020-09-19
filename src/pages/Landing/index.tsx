import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/apiOne';

import logoImg from '../.././images/logo.svg';
import landingImg from '../.././images/landing.svg';
import studyIcon from '../.././images/study.svg';
import giveClassesIcon from '../.././images/give-classes.svg';
import purpleHeartIcon from '../.././images/purple-heart.svg';
import './styles.css'

function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('https://research.jorgehabib.com/connections').then(response=>{
        const { total } = response.data;
        setTotalConnections(total);
    })},[])

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Sua plataforma de estudos online.</h2>
            </div>
            <div className="buttons-container">
                <Link to='/study' className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </Link>
                <Link to='/give-classes' className="give-classes">
                    <img src={giveClassesIcon} alt="Estudar"/>
                    Dar Aulas
                </Link>
            </div>
            <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
            <span className="total-conections">
                Total de {totalConnections} conexões realizadas
                <img src={purpleHeartIcon} alt="coração roxo"/>
            </span>
        </div>
    </div>

        )
}

export default Landing;