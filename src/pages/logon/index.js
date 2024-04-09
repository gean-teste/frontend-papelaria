import React from "react";
import '../../global.css'
import Logo from '../../assets/img/fundo.jpg'
import {useNavigate} from 'react-router-dom'

export default function Logon(){
   const navigate = useNavigate();
   const logar=(e)=>{
        e.preventDefault()  //impede que a página se recarregue quando o botão for  clicado
      //   alert("deu?")     //apresenta uma mensagem de teste, pode ser removida em produção
        navigate('/dashboard')//redirecion a para a home após o login 
        
   }

 return(
    <div className="logon-container"> 
   <section className="form">
      <h1 className="ajuste-fonte">Papelaria</h1>
    <img src={Logo} width={350}/>
       <form onSubmit={logar}>
        <input 
        placeholder="E-mail"
        type="email" />
        <input 
        placeholder="Senha"
        type="password" />
        <button className="button-logon" type="submit">Entrar</button>
        <hr></hr>
       </form>
   </section>
    </div>
 )   
}