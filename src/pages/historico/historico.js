import MenuBotton from "../../componentes/menuBotton/menu";
import "./historico.scss";
import logoApp from "../../assets/app-logo.svg";
import seta from "../../assets/seta-historico.svg";
import nodata from "../../assets/no-data.svg"
import { useState } from "react";
import { useEffect } from "react";
import { produtosService } from "../../service/service";
import { useForm } from "react-hook-form";

const Historico = () => {
  const [dataProdutos, setDataProdutos] = useState([]);
  const[busca,setBusca] = useState("")

  useEffect(() => {
    produtosService()
      .select("*")
      .then((produto) => setDataProdutos(produto.data));
  }, []);

     return (
      <div className="historico">
        <EasyManageLogo titulo="Histórico" />
        <div className="search-bar">
          <input type="text" 
                 name="searchValue"
                 placeholder="Procure o produto desejado"
                 onChange={(e)=>{setBusca(e.target.value)}} value={busca}
                  />
                 <button>🔎</button>
        </div>
        <div className="containerProdutos">
          {dataProdutos.length === 0 && <NoData></NoData>}
          {dataProdutos
          .filter((produto)=>{
            const tituloNormalized = produto.produto.toLowerCase()
            const buscaNormalized = busca.toLocaleLowerCase()
           return tituloNormalized.includes(buscaNormalized)})
          .map((produto) => {
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

export const NoData = ()=>{
  return(
    <div className="noData">
      <figure>
        <img src={nodata} alt="" />
      </figure>
    </div>
  )
}
    

export const EasyManageLogo = ({ titulo }) => {
  return (
    <div className="Logo">
      <img src={logoApp} alt="" srcSet="" />
      <h2>{titulo}</h2>
    </div>
  );
};

// filtrar produtos

export const Produto = ({ produto, preco,id }) => {

  const deleteProduto = () =>{
     produtosService()
     .delete()
     .eq('id', id)
     .then(status=>console.log(status))

     setTimeout(() => {
       window.location.reload(false);
     }, 500);
 }

 const [editarModal, setEditarModal] = useState(false);

 const EditModal = () => {
  const { register, handleSubmit, reset } = useForm();

  const editarProduto = (produtos) => {
    produtosService()
      .update({
        produto: produtos.nome,
        quantidade: produtos.quantidade,
        preco: produtos.preco,
      })
      .eq('id', id )
      .then((status) => {
        console.log(status);
      })
      .catch((err) => {
        console.log(err);
      });

    reset();
    setEditarModal(false)

    setTimeout(() => {
      window.location.reload(false);
    }, 500);

  }

  return (
    <div className="modal-edit">
      <div className="modal-edit-content">
        <button
          onClick={() => {
            setTimeout(() => {
              setEditarModal(false);
            }, 400);
          }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/nhfyhmlt.json"
            trigger="hover"
            colors="primary:#000000"
            style={{ width: "32px", height: "32px" }}
          ></lord-icon>
        </button>
        <form onSubmit={handleSubmit(editarProduto)}>
          <h3>Registre um novo produto</h3>
          <label htmlFor="nome">
            <span>Nome do produto: </span>
            <input
              {...register("nome")}
              type="text"
              placeholder="nome do produto"
            />
          </label>
          <label htmlFor="quantidade">
            <span>Quantidade: </span>
            <input
              {...register("quantidade")}
              type="number"
              placeholder="quantidade em KG"
            />
          </label>
          <label htmlFor="preco">
            <span>Preço do produto: </span>
            <input
              {...register("preco")}
              type="number"
              step=".02"
              placeholder="Preço do produto"
            />
          </label>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
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
            style={{ width: "32px", height: "32px" }}
          ></lord-icon>
        </button>
        <button onClick={(()=>{setEditarModal(true)})}>
          <lord-icon
            src="https://cdn.lordicon.com/puvaffet.json"
            trigger="loop-on-hover"
            delay="2000"
            colors="primary:#d8c200,secondary:#d8c200"
            style={{ width: "32px", height: "32px" }}
          ></lord-icon>
        </button>
        {editarModal && <EditModal></EditModal>}
      </div>
    </div>
  );
};

export default Historico;
