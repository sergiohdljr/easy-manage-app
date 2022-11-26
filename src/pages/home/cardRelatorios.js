import { useEffect } from "react";
import { useState } from "react";
import { produtosService } from "../../service/service";
import "./cardRelatorios.scss";


export const CardRelatorios = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    produtosService()
      .select("*")
      .then((dados) => setDados(dados.data));
  }, []);

  const somaDosGastos = dados
    .map((dado) => dado.preco)
    .reduce((total, preco) => {
      return (total += preco);
    }, 0);

  return (
    <div className="container-card">
      <div className="card-relatorios">
        <h3>Gastos totais :</h3>
        <h1>
          <span>R$ </span>
          {somaDosGastos}
        </h1>
      </div>
    </div>
  );
};
