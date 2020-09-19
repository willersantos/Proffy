import React from'react';
import {Link} from 'react-router-dom';

import logoImage from '../.././images/logo.svg';
import backIcon from '../.././images/back.svg';

import "./styles.css";

interface pageHeaderProps{
    title:string;
    descripition?:string;
}

const PageHeader:React.FunctionComponent<pageHeaderProps>=(props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImage} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.descripition && <p>{props.descripition}</p>}
                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;