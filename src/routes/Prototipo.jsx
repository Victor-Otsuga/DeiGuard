import {} from 'react';
import '../css/estilo.scss';



function Produtos() {

  return (
    <>
      <section className="base-sec compo-sec frt-sec">
      <div className="component">
      <h2 className="component-title">Processador</h2>
 
      </div>
      <div className="component-desc">
        <p>Nome: Raspberry Pi Zero W</p>
        <p>Função: Processar os jogos e softwares do minigame</p>
      </div>
    </section>

    <section className="base-sec compo-sec fvt-sec">
      <div className="component">
      <h2 className="component-title">Controle</h2>
        
      </div>
      <div className="component-desc">
        <p>Nome: Arduino Esplora</p>
        <p>Função: Informar os inputs do usuário para o processador</p>
      </div>
    </section>

    <section className="base-sec compo-sec sth-sec">
      <div className="component">
      <h2 className="component-title">Tela</h2>
          
      </div>
      <div className="component-desc">
        <p>Nome: Display RPI</p>
        <p>Função: Exibir para o usuário as imagens do sistema e jogo</p>
      </div>
    </section>

    <section className="base-sec compo-sec svth-sec">
      <div className="component">
      <h2 className="component-title">Controle + Tela</h2>
        
      </div>
      <div className="component-desc">
        <p>Integrando desta maneira o Display RPI ao RaspberryPi podemos exibir para usuário diretamente do controle.</p>
      </div>
    </section>

    <section className="base-sec compo-sec egth-sec">
      <div className="component">
      <h2 className="component-title">Case</h2>
          
      </div>
      <div className="component-desc">
        <p>Para um visual mais agradável e seguro todo o hardware é protegido por uma case de plástico.</p>
      </div>
    </section>
    </>
  );
}
export default Produtos;