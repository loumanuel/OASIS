import React from "react"
import './Principal.css';
import Vocacionales from "./Vocacionales";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faUnlock} from '@fortawesome/free-solid-svg-icons'
import { render } from "@testing-library/react";
import { Button } from "bootstrap";

class Principal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            login:false,
            usuario:'',
            errorMensaje:''
        }
    }
    logIn = () => {
        this.setState({
          login:true,
          usuario:this.usuario.value,
          correo:this.correo.value
        })
      }
    
    logOut = () => {
        this.setState({
          login:false,
          usuario:''
        })
      }

      render(){
        let perfil, historia, vocacionales, destacados
        if (this.state.name){
            datos = <perfil name={this.state.name} address={this.state.address} />
        }
        if (this.state.photos){
            galeria = <Imagenes photos={this.state.photos} />
        }
        if (this.state.hours){
            horario = <Horario hours={this.state.hours} />
        }
        if(this.state.rating){
            rating = <Rating rating={this.state.rating} />
        }
        if(this.state.reviews){
            comentarios = <Comentarios reviews={this.state.reviews} />
        }
        if(this.state.location){
            destino = <Destino calcularDestino={this.calcDestino}/>
        }
        return (
            <div className="container">
                <div className="input-group">
                   <input type="text" id = 'ciudad' className="form-control" placeholder="Bucar en Google Place"
                    onChange={event => {this.setState({query: event.target.value})}}
                    onKeyPress={event => {
                                if (event.key === 'Enter') {
                                  this.buscar(document.getElementById('ciudad').value)
                                }
                              }}
                   />
                      <div className="input-group-append">
                          <button className="btn btn-dark" onClick={(e) => this.buscar(document.getElementById('ciudad').value, e)} type="button">
                              <i className="fa fa-search"/>
                          </button>
                      </div>
               </div>                 
                {datos}
                {galeria}
                {horario}
                {rating}
                {comentarios}
                <Lugares 
                    mostrar={this.state.viewPlaces} 
                    lugares={this.state.places} 
                    buscar={this.buscar} 
                    buscarLugaresCercanos ={this.buscarLugaresCercanos}
                />
                {destino}                
                <div id="map" className='mt-2'></div>
            </div>
        );
    }
}

export default Principal;