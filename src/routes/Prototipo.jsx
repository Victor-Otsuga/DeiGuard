import {} from 'react';
import '../css/estilo.scss';
import hidro from '../assets/hidro.png';
import esp32 from '../assets/esp32.png';
import map from '../assets/map.png';


function Produtos() {

  return (
    <>
      <section className="base-sec compo-sec frt-sec">
      <div className="component">
      <h2 className="component-title">Captura de Som</h2>
          <img src={hidro} alt="" className="rasp"/>
      </div>
      <div className="component-desc">
        <p>Nome: Hidrofone HBK TIPO 8105</p>
        <p>Função: capturar o som ritmado de motores de barcos</p>
      </div>
    </section>

    <section className="base-sec compo-sec fvt-sec">
      <div className="component">
      <h2 className="component-title">Comunicador</h2>
      <img src={esp32} alt="" className="rasp"/>
      </div>
      <div className="component-desc">
        <p>Nome: ESP32</p>
        <p>Função: Informar nossa base de dados que existe um barco nas proximidades</p>
      </div>
    </section>

    <section className="base-sec compo-sec sth-sec">
      <div className="component">
      <h2 className="component-title">Mapeamento</h2>
      <img src={map} alt="" className="rasp"/>
      </div>
      <div className="component-desc">
        <p>Nome: Mapa D´eiGuard</p>
        <p>Função: Selecionar e exibir as localizações em que há movimento de barcos sem aviso prévio</p>
      </div>
    </section>

  
    </>
  );
}
export default Produtos;