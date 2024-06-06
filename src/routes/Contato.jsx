import {} from "react";
import "../css/estilo.scss";

import { useRef } from "react";



function Contato() {
  const email = useRef();
  const msg = useRef();

  const getEmail = sessionStorage.getItem("email");
  const getMsg = sessionStorage.getItem("msg");

  const handleSubmit = () => {
    let token =
      Math.random().toString(16).substring(2) +
      Math.random().toString(16).substring(2);

    if (email.current.value && msg.current.value) {
      sessionStorage.setItem("email", email.current.value);
      sessionStorage.setItem("msg", msg.current.value);
      sessionStorage.setItem("msgId", token);
      alert("Mensagem enviada com sucesso!");
    } else {
      alert("Complete os campos para enviar uma mensagem");
    }
  };

  return (
    <>
      <section class="base-sec nth-sec">
        <div class="testimonial">
          <h3>
            Perguntamos a alguns pacientes: "Como você avalia a qualidade da
            rede wifi e da disponibilidade de tomadas para carregadores no
            hospital? Você enfrenta algum problema tecnológico nesse sentido?"
          </h3>
        </div>
        <div class="car">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                
              </div>
              <div class="carousel-item">
              
              </div>
              <div class="carousel-item">
                
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="response">
            <p class="resposta_bernado">
              A familai do Bernardo respondeu: "Sim, não há muitas tomadas
              disponíveis, quanto ao wi-fi a forma de logar e o sinal pra mim
              são ruins, nunca consegui logar."
            </p>
          </div>
        </div>

        <div class="car car-alice">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide alice-carousel"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
               
              </div>
              <div class="carousel-item">
                
              </div>
            </div>
          </div>
          <div class="response">
            <p class="resposta_alice">
              A familia da Alice respondeu: "De fato, nós enfrentamos muitos
              obstáculos. Permanecemos 52 dias no hospital, em diversos dias, a
              televisão do hospital não estava em funcionamento, os canais
              estavam inacessíveis. O wifi também não tinha sinal e as tomadas
              estavam todas defeituosas. Existia uma tomada que funcionava, mas
              era do padrão antigo e necessitávamos de um adaptador para poder
              conectar o carregador ou o notebook. Portanto, não utilizamos o
              wifi, pois efetivamente não funcionava.""
            </p>
          </div>
        </div>
      </section>

      <section class="base-sec tth-sec">
        <h3>Quer Apoiar o Projeto?</h3>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Seu Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={email}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputtext" class="form-label">
              Deixe uma mensagem
            </label>
            <input type="text" class="form-control" id="exampleInputtext" />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              ref={msg}
            />
            <label class="form-check-label" for="exampleCheck1">
              Deseja receber atualizações
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}
export default Contato;