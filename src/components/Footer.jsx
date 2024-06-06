import {} from 'react';
import '../css/estilo.scss';
import footerLogo from '../assets/evologo.png';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {

  return (
    <>
      <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link to="/#project" className="nav-link px-2">
          <p >Projeto</p>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/Pitch" className="nav-link px-2">
          <p >Pitch</p>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/Prototipo" className="nav-link px-2">
          <p >Protótipo</p>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/Contato" className="nav-link px-2">
          <p >Contato</p>
          </Link>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2024 Evo</p>
      <div className="footer-img">
      <img className="footer-logo" src={footerLogo}/>
     </div>
    </footer>
    </>
  );
}
export default Footer;
