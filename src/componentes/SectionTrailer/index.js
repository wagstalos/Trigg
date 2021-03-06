import React from 'react';
import AOS from 'aos'

import './style.css';
import 'aos/dist/aos.css';

export default function SectionTrailer() {

    AOS.init({
        duration: 1200,
    });

    return (
        <section className="trailerAbout">
            <div className="text-hello textAbout" data-aos="fade-right">
                <h1>Muito mais que <br/> <span> cartãos emitidos! </span></h1>
                <p className="subtitle">Experiências vividas, sonhos realizados e <span> muita história para contar! </span></p>
                <p className="text">Somos uma Fintech que veio para tornar seu relacionamento 
                    com o dinheiro mais fácil e acessível. Para isso, 
                    tecnologia digital aplicada de uma maneira inteligente ao 
                    mundo das finanças. Queremos mudar o mercado financeiro 
                    mundial e por isso estamos reinventando os negócios 
                    tradicionais com um cartão digital.
                </p>
            </div>

            <div className="trailer-about" data-aos="fade-left">
            <iframe 
            src="https://www.youtube.com/embed/xWC6M6KiDBI" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
            </div>
        </section>
    )
}