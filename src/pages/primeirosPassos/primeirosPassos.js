import "./primeirosPassos.scss";
import BtnPrimeirosPassos from "../../componentes/btnPrimeirosPassos/btnPrimeirosPassos";
import figure from "../../assets/ilustração.png";
import { Link } from "react-router-dom";

const PrimeirosPassos = () => {
  return (
    <section className="primeirosPassos">
      <main>
        <div className="figure-img-wrapper">
          <figure>
            <img src={figure} alt="" />
          </figure>
          <h1>Primeiros Passos</h1>
        </div>
        <div className="btnWrapper">
          <Link to= '/cadastro'>
            <BtnPrimeirosPassos texto={"Cadastre-se com E-mail"} />
          </Link>
          <BtnPrimeirosPassos texto={"Cadastre-se com Telefone"} />
        </div>
      </main>
    </section>
  );
};

export default PrimeirosPassos; 
