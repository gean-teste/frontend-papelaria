import { useState } from "react"
import Menu from "../componentes/menu"
import Head from  "../componentes/head"
import '../../global.css'
export default function Cadastrousuario(){
    //salvar os usuarios cadastrados
    const[nome,setNome] = useState()
    const[email,setEmail] = useState()
    const[senha,setSenha] = useState()

    return(
        <div className="dashboard-container"> 
               <div className="menu">
                <Menu/>
               </div>
               <div className="main">
                <Head/>
                <form>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                    <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="senha" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                    <button>salvar</button>
                    {nome}
                    {email}
                    {senha}
                </form>
               </div>
       
        </div>
       
           )
}