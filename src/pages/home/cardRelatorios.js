import { useEffect } from "react";
import { useState } from "react";
import { produtosService } from "../../service/service";
import "./cardRelatorios.scss";

function getYearlyWeekNumber(date) {
  let splitedDate = date.split("-");
  let dateObj = new Date(
    +splitedDate[0],
    +splitedDate[1] - 1,
    +splitedDate[2],
    0,
    0,
    0,
    0
  );
  let firstDayYear = new Date(+splitedDate[0], 0, 1, 0, 0, 0, 0);
  let yearDay = (dateObj - firstDayYear) / 86400000 + 1;
  let weekInYear = +String((yearDay + firstDayYear.getDay() + 1) / 7).split(
    "."
  )[0];
  return { date, yearDay, weekInYear };
}

export const ContainerRelatorios = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    produtosService()
      .select("*")
      .then((dados) => setDados(dados.data));
  }, []);

  const data = new Date();
  const mes = data.getMonth() + 1;

  const dadosMensais = dados
    .filter((produto) => {
      const mesProduto = parseInt(produto.created_at.slice(5, -7));
      return mesProduto === mes;
    })
    .reduce((total, dado) => {
      return (total += dado.preco);
    }, 0);

  const dadosSemanais = dados
    .filter((produto) => {
      const dataProduto = produto.created_at.slice(0, 10);
      const semanaDoAno = getYearlyWeekNumber(dataProduto).weekInYear;
      const dataAtual = `${data.getFullYear()}-${
        data.getMonth() + 1
      }-${data.getDate()}`;
      const semanaDoAnoAtual = getYearlyWeekNumber(dataAtual).weekInYear;
      return semanaDoAno === semanaDoAnoAtual;
    })
    .reduce((total, dado) => {
      return (total += dado.preco);
    }, 0);

  const somaDosGastos = dados
    .map((dado) => dado.preco)
    .reduce((total, preco) => {
      return (total += preco);
    }, 0);

  return (
    <div className="container-card">
      <CardRelatorio valor={somaDosGastos}></CardRelatorio>
      <CardRelatorio titulo={"mensal"} valor={dadosMensais}></CardRelatorio>
      <CardRelatorio titulo={"semanal"} valor={dadosSemanais}></CardRelatorio>
    </div>
  );
};

const CardRelatorio = ({ titulo, valor }) => {
  return (
    <div className="card-relatorios">
      <h3>Gasto total {titulo} : </h3>
      <h1>
        <span>R$</span>
        {valor}
      </h1>
    </div>
  );
};
