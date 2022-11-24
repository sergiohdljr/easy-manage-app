import './config.scss'
import MenuBotton from "../../componentes/menuBotton/menu"
import { EasyManageLogo } from '../historico/historico';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://edstsctbxkkfbvjuplac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkc3RzY3RieGtrZmJ2anVwbGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3NzYxNzUsImV4cCI6MTk4NDM1MjE3NX0.w5_UoGsM0qfxo75opLPEtcturyg3MNxyJMdDOlIhs44";
const supabase = createClient(supabaseUrl, supabaseKey);

const Configuracao = () =>{

  const deleteDados = async ()=>{
    const { error } = await supabase
    .delete()
    .neq("id", 0);

    if(error){
      console.log(error)
    }
  }

    return (
      <div className="config">
        <EasyManageLogo titulo="Configurações"></EasyManageLogo>
        <div className="container">
          <ConfigCard titulo="Administração" tituloBotao="Conta" btnTitulo="Compartilhar dados"></ConfigCard>
          <ConfigCard titulo="Gastos" tituloBotao="Editar Histórico" btnTitulo="Apagar Histórico" handleClick2={deleteDados} ></ConfigCard>
        </div>

        <MenuBotton></MenuBotton>
      </div>
    );
}

const ConfigCard = ({titulo,tituloBotao,btnTitulo,handleClick,handleClick2})=>{
    return (
      <div className="config-card">
        <h4>{titulo}</h4>
        <div className="card">
          <button onClick={handleClick}>{tituloBotao}</button>
          <hr />
          <button onClick={handleClick2}>{btnTitulo}</button>
        </div>
      </div>
    );
}


export default Configuracao