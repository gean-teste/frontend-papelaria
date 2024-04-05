import React from "react";
import '../../global.css'
import Logo from '../../assets/img/fundo.jpg'
export default function Logon(){
 return(
    <div className="logon-container"> 
   <section className="form">
      <h1 className="ajuste-fonte">Papelaria</h1>
    <img src={Logo} width={350}/>
       <form>
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