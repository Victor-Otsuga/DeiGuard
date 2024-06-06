import {} from "react";
import { Link } from "react-router-dom";
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Error() {
  return (
  <>
  <Nav/>

  <h2 className='PageTitle'>Erro 404 - Página não encontrada.</h2>
  <section className="errorSec">
    <p>Desculpe, a página que você está procurando não existe.</p>
    <Link to="/" className="nostyle tlink">Voltar para a página inicial</Link>
  </section>
  <Footer/>
  </>
  )
}
export default Error