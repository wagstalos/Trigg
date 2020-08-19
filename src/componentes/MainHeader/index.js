import React from 'react';
import { Link } from 'react-router-dom';

import mobile from '../assets/images/mobile.svg';
import manage from '../assets/images/gerencie.svg';
import giveBack from '../assets/images/devolvemos.svg';
import card from '../assets/images/cartao.svg';
import shield from '../assets/images/shield.svg';
import logoApple from '../assets/images/logo-apple-white.svg';
import logoGoogle from '../assets/images/logo-googleplay-white.svg';

import './style.css';

export default function MainHeader() {
    return (
        <div className="container">
            <div className="text">
                <p className="first-paragraph"> Não é só mais um cartão. </p>

                <h1>É O CARTÃO!</h1>

                <img id="appMobile" className="mobileApp" src={mobile} alt="mobile"/>

                <div className="informations">
                    <div className="manage">
                        <img src={manage} alt="Gerencie"/>
                        <p>Gerencie seu limite direto no app</p>
                    </div>

                    <div className="we-give-back">
                        <img src={giveBack} alt="Devolvemos"/>
                        <p>Devolvemos até 1.3% dos seus gastos</p>
                    </div>

                    <div className="card">
                        <img src={card} alt="Cartão"/>
                        <p>Escolha o cartão que combina com você</p>
                    </div>

                    <div className="shield">
                        <img src={shield} alt="Bloqueie"/>    
                        <p>Bloqueie e desbloqueie com um clique</p>
                    </div>
                </div>

                <div className="online-store">
                    <div className="apple-store">
                        <Link to="/">
                            <img src={logoApple} alt="Logo Apple"/>
                            <p>Download via
                                <br/>
                                <span>App Store</span>
                            </p>
                        </Link>
                    </div>

                    <div className="google-play">
                        <Link to="/">
                            <img src={logoGoogle} alt="Logo Google"/>
                            <p>Download via
                                <br/> 
                                <span>Google Play</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="appTrigg">
                <img id="appMobile" src={mobile} alt="mobile"/>
            </div>
        </div>
    )
}