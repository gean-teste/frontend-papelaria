import React,{useState, useEffect} from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import '../../global.css'
import Head from "../componentes/head"
import Menu from "../componentes/menu"
import { Link, useNavigate } from "react-router-dom";
import { FiEdit,FiTrash } from "react-icons/fi";

export default function Listausuarios(){
    const navigate =  useNavigate();

    const[usuario, setUsuarios] = useState([]);

    function mostrarusuarios(){
        const banco = JSON.parse(localStorage.getItem("usuarios") || "[]");
        setUsuarios (banco);
    }
    function editarusuario(id, nome){
         alert(`estou editando  o usuario id:${id} |-| do nome: ${nome}`);
         navigate(`/editarusuario/${id}`)
    }
    
       const excluirusuario = (id, nome) => {
            confirmAlert({
              title: 'excluir usuario',
              message: 'seu anta deseja realmente excluir este usuario?.',
              buttons: [
                {
                  label: 'sim, claro que sim, ue',
                  onClick: () => alert('Click Yes')
                },
                {
                  label: 'por que quer excluir então idiota!',
                  onClick: () => alert('Click No')
                }
              ]
            });
          };
        
    
    useEffect(()=>{mostrarusuarios()},[])
    return( 

        
 <div className="dashboard-container"> 
        <div className="menu">
         <Menu/>
        </div>
        <div className="main">
         <Head title="Lista de usuarios" />
         <div>
         <Link to="/cadastrousuario" className='btn-novo'>Novo</Link>
         </div>
        
         <table>
            <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th></th>
            <th></th>
            </tr>
            
                {
                    usuario.map((linha) => {

                     return(
                        <tr>
                        <td>{linha.id}</td>
                        <td>{linha.nome}</td>
                        <td>{linha.email}</td>
                        <td>
                            <FiEdit size={24} color="blue" cursor="pointer" onClick={(e)=>{editarusuario(linha.id,linha.nome)}}/>
                            </td>
                        <td>
                            <FiTrash size={24} color="red"  cursor="pointer" onClick={(e)=>{excluirusuario(linha.id,linha.nome)}}/>
                            </td>
                        </tr>
                     )
                    })
                     
                }
                
            </table>
        </div>

 </div>

    )
}