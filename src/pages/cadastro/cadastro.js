import { useState } from "react";
import "../../pages/cadastro/cadastro.scss";
import Formulario from "../../componentes/formulario/formulario";
import ilustration from "../../assets/ilustração.png"


const Cadastro = () => {
  const [dataUsuario, SetDataUsuario] = useState('');

  return (
    <main className="wrapper">
      <figure>
        <img src={ilustration} alt="" />
      </figure>
      <Formulario dataUsuario={dataUsuario} SetDataUsuario={SetDataUsuario} />
      {console.log(dataUsuario)}
    </main>
  );
};

export default Cadastro;
