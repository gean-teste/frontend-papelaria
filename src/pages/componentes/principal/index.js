import React from "react";
import '/projeto/frontend/src/global.css'
import {Link} from 'react-router-dom';
import {FiHome ,FiUser, FiTag, FiTruck, FiShoppingCart, FiGrid} from "react-icons/fi"
import { IoMdExit } from "react-icons/io";
import Logo from '/projeto/frontend/src/assets/img/papelaria.png'
export default function Principal(){
    return(
  
 <div className="ajuste">
    <div className="ajuste-container">
    <img src={Logo}  width={50} height={50}/>
                    <div className="content">
                        <h1>Papelaria do futuro</h1>
                        <Link to="/listadashboard"   className='link-right'><IoMdExit className='' size={44} />Saida</Link>
                    </div>
    </div>
       <div className="dashboard-container"> 
   
 
</div>
 </div>

    )
}