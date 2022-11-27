import Header from "../../componentes/header/header";
import "./home.scss";
import MenuBotton from "../../componentes/menuBotton/menu";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { produtosService } from "../../service/service";
import { CardRelatorios } from "./cardRelatorios";



const Home = () => {
  return (
    <div className="home">
      <MenuBotton></MenuBotton>
      <Header />
      <Modal></Modal>
      <CardRelatorios></CardRelatorios>
    </div>
  );
};


const Modal = () => {
  const { register, handleSubmit,reset } = useForm();
  const [modal, setActiveModal] = useState(false);
  const [produtos,setProdutos] = useState('');
  

  const onSubmit = (produtos) => {
    setProdutos(produtos)
    produtosService()
      .insert({
        produto: produtos.nome,
        quantidade: produtos.quantidade,
        tipo: produtos.tipo,
        preco:produtos.preco,
      })
      .then((status) => {
        console.log(status);
      })
      .catch((err) => {
        console.log(err);
      });
      
      reset()
      setActiveModal(false)

      setTimeout(() => {
        window.location.reload(false);
      }, 500);
      
  }

  return (
    <>
      <button
        type="button"
        className="btnCadastro"
        onClick={() => {
          setActiveModal(true);
        }}
      >
        Adicionar produto
      </button>
      <h4>resumo dos gastos</h4>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <button
              onClick={() => {
                setTimeout(()=>{
                  setActiveModal(false);
                },400)
              }}
            >
              <lord-icon
                src="https://cdn.lordicon.com/nhfyhmlt.json"
                trigger="hover"
                colors="primary:#000000"
                style={{width:"32px",height:"32px"}}
              ></lord-icon>
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Preço do produto"
                />
              </label>
              <button type="submit">Registrar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
