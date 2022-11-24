import MenuBotton from "../../componentes/menuBotton/menu";
import "./historico.scss";
import logoApp from "../../assets/app-logo.svg";
import seta from "../../assets/seta-historico.svg";
import { useState } from "react";
import { useEffect } from "react";
import { produtosService } from "../../service/service";

const Historico = () => {
  const [dataProdutos, setDataProdutos] = useState([]);

  useEffect(() => {
    produtosService()
      .select("*")
      .then((produto) => setDataProdutos(produto.data));
  }, []);

  return (
    <div className="historico">
      <EasyManageLogo titulo="Histórico" />
      <div className="containerProdutos">
        {dataProdutos.map((produto) => {
          return (
            <Produto
              key={produto.id}
              produto={produto.produto}
              preco={produto.preco}
              id={produto.id}
            />
          );
        })}
      </div>
      <MenuBotton />
    </div>
  );
};

export const EasyManageLogo = ({ titulo }) => {
  return (
    <div className="Logo">
      <img src={logoApp} alt="" srcSet="" />
      <h2>{titulo}</h2>
    </div>
  );
};

// filtrar produtos

export const Produto = ({ produto, preco, id }) => {

  const deleteProduto = () =>{
    produtosService()
    .delete()
    .eq('id', id)
    .then(status=>console.log(status))
}
  
  return (
    <div className="produto">
      <figure>
        <img src={seta} alt="" srcSet="" />
      </figure>
      <div className="infos">
        <h4 className="info-produto">{produto}</h4>
        <h4 className="info-preco">R${preco}</h4>
        <button onClick={deleteProduto}>
          <lord-icon
            src="https://cdn.lordicon.com/gsqxdxog.json"
            trigger="hover"
            colors="primary:#d8c200,secondary:#d8c250"
            style={{ width: "32px", height: "32px"}}
          ></lord-icon>
        </button>
        {/* <button>
          <lord-icon
            src="https://cdn.lordicon.com/puvaffet.json"
            trigger="loop-on-hover"
            delay="2000"
            colors="primary:#121331,secondary:#d8c200"
            style={{width:"32px",height:"32px"}}
          ></lord-icon>
        </button> */}
      </div>
    </div>
  );
};

export default Historico;
