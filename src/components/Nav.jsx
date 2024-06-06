import {} from "react";
import { Link } from "react-router-dom";
import "../css/estilo.scss";
import headerLogo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 w-100">
        {" "}
        <Link className="d-flex align-items-center p-2 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" to="/">
          <img src={headerLogo} alt="logo_ICR" id="header-logo" />
        </Link>{" "}
        <ul className="nav nav-pills">
          <li className="nav-item">
            {" "}
            <HashLink className="nav-link" to="/#project">
              Projeto
            </HashLink>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-link" to="/Pitch">
              Pitch
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-link" to="/Prototipo">
              Protótipo
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-link" to="/Contato">
              Contato
            </Link>{" "}
          </li>
        </ul>
      </header>
    </>
  );
}
export default Nav;
