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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rem ipsam, ducimus quibusdam nisi fugiat culpa ullam labore corrupti perspiciatis perferendis accusamus neque praesentium, nobis tempora sequi a libero corporis!
            Veritatis, adipisci? Dicta inventore id commodi et quaerat impedit incidunt iure cumque porro exercitationem ipsum obcaecati consequuntur doloremque molestiae atque voluptatum nisi, est voluptates voluptas doloribus nobis! Beatae, commodi autem?
            Excepturi, quaerat! Eaque, repellat aut obcaecati enim, excepturi doloremque, officia accusamus voluptate omnis sequi incidunt reprehenderit perferendis nemo totam hic rerum deleniti quas provident inventore recusandae molestias dolorum suscipit. Deleniti?
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
