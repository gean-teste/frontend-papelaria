
import {Link} from 'react-router-dom';
import {FiHome ,FiUser, FiTag, FiTruck, FiShoppingCart, FiGrid} from "react-icons/fi"
export default function Menu(){
    return(
        <div>
             <nav>
               <h1>Menu</h1>
               <Link to="/listadashboard" className='link'><FiHome className='icons-menu' size={24}/>Home</Link>
               <Link to="/listausuari" className='link'><FiUser className='icons-menu' size={24}/>Usuário</Link>
               <Link to="/listaproduto" className='link'><FiShoppingCart className='icons-menu' size={24}/>Produto</Link>
               <Link to="/listaentrada" className='link'><FiTag className='icons-menu' size={24}/>Entrada</Link>
               <Link to="/listaestoque" className='link'><FiTruck className='icons-menu' size={24}/>Estoque</Link>
               <Link to="/listasaida" className  ='link'><FiGrid className='icons-menu' size={24}/>Saida</Link>
              
             </nav>
        </div>
    )
}