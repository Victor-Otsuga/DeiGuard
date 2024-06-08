import React, { useEffect, useState } from "react";
import "../css/estilo.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://cav-91.vercel.app/iframe',
    })
      .then(function (response) {
        setIframeSrc(response.data);
      })
      .catch(function (error) {
        console.error("There was an error fetching the iframe:", error);
      });
  }, []);

  return (
    <>
      <section className="base-sec fst-sec">
        <span className="spacebro"></span>
        <div className="intro">
          <h1>Conheça o D'eiGuard</h1>
          <p>A ferramenta perfeita para o combate a pescal ilegal!</p>
        </div>
        <div className="godown icon-container">
        <IoIosArrowDown  size={35} className="moving-icon"  />
        </div>
        
      </section>

      <section className="base-sec scn-sec" id="project">
        <div className="base-info sec-title">
          <h3>Sobre o Projeto</h3>
        </div>
        <div className="base-info">
          <p>
          O sistema D’eiGuard é uma inovação tecnológica que se alinha com os princípios 
          da Economia Azul, visando a sustentabilidade das atividades humanas nos mares. 
          Ele é projetado para melhorar a supervisão oceânica e proteger os ecossistemas 
          aquáticos em risco, pelo monitoramento em tempo real.
          </p>
          
        </div>
        <div className="mapping"> 
          <div className="mapping2" dangerouslySetInnerHTML={{ __html: iframeSrc }} />
        </div>
        
        <div className="base-info">
          <p>
          Através da implementação do D’eiGuard, almeja-se: Otimizar a detecção de embarcações ilegais, Utilizando algoritmos, modelos 
          matemáticos, e a captação acústica das ondas sonoras subaquáticas emitidas pelas embarcações. O sistema visa identificar padrões de movimento suspeitos que 
          possam indicar atividades de pesca ilegal ou outras infrações marítimas.
          </p>
          
        </div>
        <Link id="verPitch" className="btn btn-primary rounded-pill px-3" to="/Pitch">
          Ver Pitch
        </Link>
        
      </section>
    </>
  );
}

export default Home;
