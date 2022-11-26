import './header.scss'
import avatar from '../../assets/avatar.svg'
import menu from '../../assets/menu.svg'
import { useState } from 'react';
import logo from "../../assets/app-logo.svg";

 
const Header = () => {
  const [HandleMenu, setMenu] = useState(false);
  
  const dados = localStorage.getItem("dataUser")
  const user = JSON.parse(dados);
  
  return (
    <>
      {HandleMenu && (
        <div className="sideMenu">
          <button onClick={() =>{ 
            setTimeout(()=>{
              setMenu(false);
            },500)}}>
            <lord-icon
              src="https://cdn.lordicon.com/nhfyhmlt.json"
              trigger="hover"
              colors="primary:#000000"
              style={{ width: "32px", height: "32px" }}
            ></lord-icon>
          </button>
          <div className="avatar">
            <figure>
              <img src={avatar} alt="" />
            </figure>
            <article>
              <h2>{user.nome}</h2>
              <h3>{user.restaurante}</h3>
            </article>
            <hr />
          </div>
        </div>
      )}
      <div className="header">
        <img src={logo} alt="" />
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