import React, { useEffect } from "react";
import "../css/estilo.scss";
import data from "../../backend/dados.json";
import { AiFillLike, AiFillEye } from "react-icons/ai";

const videoId = "UStqK3y7GHM";


async function getLikes() {
  const url = `https://youtube-video-info2.p.rapidapi.com/votes?videoId=${videoId}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-RapidAPI-Key": "42549a053bmsh5baaad1b4f3beb1p1d1281jsn1d0618a3a7ef",
      "X-RapidAPI-Host": "youtube-video-info2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    // Verificando se likes e views não são undefined
    if (result.likes !== undefined && result.viewCount !== undefined) {
      const dataToSend = {
        likes: result.likes,
        views: result.viewCount,
      };
      console.log(dataToSend);
      // Enviando os dados para o backend
      await fetch("https://localhost:5173/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
    } else {
      console.log(
        "Likes ou views são undefined. Os dados não serão enviados para o post."
      );
    }
  } catch (error) {
    console.error(error);
  }
}

function Sobre() {
  useEffect(() => {
    getLikes();
  }, []);


  
  return (
    <>
      <section className="base-sec trd-sec">
        <div className="pitch-video">
          <h2>Nosso Pitch</h2>
          <iframe
            width="100%"
            height="250rem"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Challenge - HC - ICR"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="likesInfo">
            <span>
              <AiFillLike /> {data.likes}
            </span>

            <span>
              <AiFillEye /> {data.views}
            </span>
          </div>
        </div>
        <div className="pitch-info">
          <h2>Sobre o projeto</h2>
          <div className="pitch-img">
            
          </div>
          <p>
                  A fundamentação teórica para a constituição endossada do D’eiGuard pode ser 
        estabelecida na intersecção de várias disciplinas, incluindo a matemática, física,
        desenvolvimento tecnológico de rastreabilidade, cinemática e a ciência da 
        computação</p>
        </div>
      </section>
    </>
  );
}
export default Sobre;
