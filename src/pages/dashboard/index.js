import React from "react";
import '../../global.css'
import {Link} from 'react-router-dom';
import {FiHome ,FiUser, FiTag, FiTruck, FiShoppingCart, FiGrid} from "react-icons/fi"
import { IoMdExit } from "react-icons/io";
import Head from "../componentes/head"
import Menu from "../componentes/menu"
import Principal from "../componentes/principal"

export default function Dashboard(){
    return(
  
 <div className="ajuste">
  <Principal/>
       <div className="dashboard-container"> 
   

   <div className="menu">
    <Menu/>
   </div>
   <div className="main">
    <Head title="Home" />
    
   </div>
 
</div>
 </div>

    )
}