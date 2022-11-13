import './header.scss'
import logoEm from '../../assets/app-logo.svg'
import avatar from '../../assets/avatar.svg'
import menu from '../../assets/menu.svg'
import { useState } from 'react';
import logo from "../../assets/app-logo.svg";

// fazer menu hamburguer header 


const Header = () => {
  const [HandleMenu, setMenu] = useState(false);
  
  const dados = localStorage.getItem("dataUser")
  const user = JSON.parse(dados);
  
  return (
    <>
      {HandleMenu && (
        <div className="sideMenu">
          <button onClick={() => setMenu(false)}> X </button>
        </div>
      )}
      <div className="header">
        <img src={logo} alt=""/>
        <div className="user">
          <figure>
            <img src={avatar} alt="" />
          </figure>
          <article>
            <span>Bem vindo de volta!</span>
            <h2> {user.nome} </h2>
          </article>
          <button className="menu" onClick={() => setMenu(true)}>
            <img src={menu} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Header