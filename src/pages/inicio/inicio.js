import { useNavigate } from 'react-router-dom';
import '../../componentes/botaoInicio/botaoInicio.scss';
import './inicio.scss'

const Inicio = ()=>{
  const dados = localStorage.getItem("dataUser");
  const user = JSON.parse(dados);
  const navigate = useNavigate();
    return (
      <main className="inicio">
        <figure className="logo animate__fadeInDown">
          <img src="./logo.png" alt="logo" />
          <h2>
            Easy
            <br/>
            Manage
          </h2>
        </figure>
        <section className="bem-vindo">
          <h1>Bem vindo!👋</h1>
            <button className='btnInicial' onClick={()=>{
              if(user == null){
                navigate('/cadastro')
              }else{
                navigate('/home')
              }
            }}>iniciar</button>
        </section>
      </main>
    );
}

export default Inicio;

