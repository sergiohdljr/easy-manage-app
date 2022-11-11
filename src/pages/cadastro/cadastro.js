// import { useState } from "react";
import "../../pages/cadastro/cadastro.scss";
import Formulario from "../../componentes/formulario/formulario";
import ilustration from "../../assets/ilustração.png"


const Cadastro = () => {
  return (
    <main className="wrapper">
      <figure>
        <img src={ilustration} alt="" />
      </figure>
      <Formulario/>
    </main>
  );
};

export default Cadastro;
