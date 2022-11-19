import MenuBotton from "../../componentes/menuBotton/menu"
import './historico.scss'
import logoApp from '../../assets/app-logo.svg'
import seta from '../../assets/seta-historico.svg'
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useEffect } from "react";


// criar pagina historico

const supabaseUrl = "https://edstsctbxkkfbvjuplac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkc3RzY3RieGtrZmJ2anVwbGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3NzYxNzUsImV4cCI6MTk4NDM1MjE3NX0.w5_UoGsM0qfxo75opLPEtcturyg3MNxyJMdDOlIhs44";
const supabase = createClient(supabaseUrl, supabaseKey);

const Historico = () => {
    const [dataProdutos,setDataProdutos] = useState([])

    useEffect(()=>{
        supabase
          .from("Produtos")
          .select("*")
          .then((produto) =>setDataProdutos(produto.data));
    },[])

    
    return(
        <div className="historico">
          <EasyManageLogo titulo="Histórico"/>
          <div className="containerProdutos">
            {dataProdutos.map((produto)=>{
                return <Produto key={produto.id} produto= {produto.produto} preco = {produto.preco} />
            })}
          </div>
          <MenuBotton/>  
        </div>
    )
}

export const EasyManageLogo = ({titulo}) => {
    return(
        <div className="Logo">
            <img src={logoApp} alt="" srcSet="" />
            <h2>{titulo}</h2>
        </div>
    )
}

export const Produto = ({produto,preco})=>{
    return (
      <div className="produto">
        <figure>
          <img src={seta} alt="" srcSet="" />
        </figure>
        <div className="infos">
          <h4>{produto}</h4>
          <h4>R$ {preco}</h4>
        </div>
      </div>
    );
}

export default Historico;
