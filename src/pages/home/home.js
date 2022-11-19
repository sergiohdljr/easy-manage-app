import Header from "../../componentes/header/header";
import "./home.scss";
import MenuBotton from "../../componentes/menuBotton/menu";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";


const Home = () => {
  return (
    <div className="home">
      <MenuBotton></MenuBotton>
      <Header />
      <Modal></Modal>
    </div>
  );
};

const supabaseUrl = 'https://edstsctbxkkfbvjuplac.supabase.co'
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkc3RzY3RieGtrZmJ2anVwbGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3NzYxNzUsImV4cCI6MTk4NDM1MjE3NX0.w5_UoGsM0qfxo75opLPEtcturyg3MNxyJMdDOlIhs44";
const supabase = createClient(supabaseUrl, supabaseKey)

const Modal = () => {
  const { register, handleSubmit } = useForm();
  const [modal, setActiveModal] = useState(false);
  const [produtos,setProdutos] = useState('');

  const onSubmit = (produtos) => {
    setProdutos(produtos)
    supabase
      .from("Produtos")
      .insert({
        produto: produtos.nome,
        quantidade: produtos.quantidade,
        tipo: produtos.tipo,
        preco:produtos.preco,
      })
      .then((oqueveio) => {
        console.log(oqueveio);
      })
      .catch((err) => {
        console.log(err);
      });

      setActiveModal(false)
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
        Adicionar
      </button>
      <h4>resumo dos gastos</h4>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <button
              onClick={() => {
                setActiveModal(false);
              }}
            >
              x
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Registre um novo produto</h3>
              <label htmlFor="nome">
                <span>Nome do produto: </span>
                <input {...register("nome")} type="text" placeholder="nome do produto" />
              </label>
              <label htmlFor="quantidade">
                <span>Quantidade: </span>
                <input
                  {...register("quantidade")}
                  type="number"
                  placeholder="quantidade em KG"
                />
              </label>
              <label htmlFor="tipo">
                <span>Tipo de produto:</span>
                <input {...register("tipo")} type="text" placeholder="tipo de produto"/>
              </label>
              <label htmlFor="preco">
                <span>Preço do produto: </span>
                <input {...register("preco")} type="number" step=".02" placeholder="Preço do produto"/>
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
