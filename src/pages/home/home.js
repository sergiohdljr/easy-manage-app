import Header from "../../componentes/header/header";
import "./home.scss";
import MenuBotton from "../../componentes/menuBotton/menu";
import { useState } from "react";


const Home = () => {
  return (
    <div className="home">
      <MenuBotton></MenuBotton>
      <Header />
      <Modal></Modal>
    </div>
  );
};

const Modal = () => {
  const [modal, setActiveModal] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btnCadastro"
        onClick={() => {setActiveModal(true)}}> Adicionar </button>
      <h4>resumo dos gastos</h4>
      {modal && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={() => {setActiveModal(false)}}> x </button>
            </div>
          </div>)}
    </>
  );
};

export default Home;
