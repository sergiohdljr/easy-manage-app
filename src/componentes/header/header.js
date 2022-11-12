import './header.scss'
import logoEm from '../../assets/app-logo.svg'

const Header = () => {
  const dados = localStorage.getItem("dataUser")
  const user = JSON.parse(dados);
  return (
    <div className="header">
      <img src={logoEm} alt="" className="logo" />
      <div className="user">
        <span>Bem vindo de volta!</span>
        <h2>
          <b>{user.nome}</b>
        </h2>
      </div>
    </div>
  );
};

export default Header