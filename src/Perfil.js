import React, {Component} from "react"
 import './Busqueda.css';
 import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faUnlock} from '@fortawesome/free-solid-svg-icons'
import { render } from "@testing-library/react";

class Perfil extends Component{
    constructor(props){
        super(props)
        this.state = {
            hecho:false,
            usuario:'',
            errorMensaje:''
        }
    }
    logIn = () => {
        this.setState({
          hecho:true,
          usuario:this.usuario.value,
          correo:this.correo.value
        })
      }
    
    logOut = () => {
        this.setState({
          hecho:false,
          usuario:''
        })
      }
      
      render(){
        if (this.state.hecho)
        return(
            <div>
                <div className="Header">
                </div>
                <div className="Container">
                </div>
                <div className="footer">
                </div>
            </div>
        )
    }
}

export default Perfil;
