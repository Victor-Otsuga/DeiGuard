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