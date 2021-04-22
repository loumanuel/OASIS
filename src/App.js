import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faUnlock, faTimesCircle, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {Label, groupInput, Input, LeyendaError} from "./Formulario";
import usac from './usac.png';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hecho:false,
      usuario:'',
      errorMensaje:'',
      pestanas:''
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

  render() {
    let perfil, historia, vocacionales, destacados
    if (this.state.hecho)
      return(
        <div class="login container border rounded p-3 mt-4">
          <div class="row">
            <div class="col-sm">
                <i><img src={usac} /></i>
            </div>
            <div class="col-sm">
              <h2>
                OASIS
              </h2>
            </div>
        <div class="col-sm">
        <div className='btn-group pb-3'>
            <a className="btn btn-outline-dark btn-sm" onClick={this.logOut}>
              Mi perfil</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm border rounded p-3 mt-4">
          <div className="btn-group pb-3 pestanaaa">
          <a className="btn btn-outline-dark"  onClick={this.unu}>
          <i></i>Iniciar sesión</a>
        </div>
        <div className='btn-group pb-3 pestanaaa'>
          <a className="btn btn-outline-warning" onClick={this.unu}>
          <i></i>Crear una nueva cuenta</a>
        </div>
        <div className="btn-group pb-3 pestanaaa">
          <a className="btn btn-outline-dark"  onClick={this.unu}>
          <i></i>Iniciar sesión</a>
        </div>
        <div className='btn-group pb-3 pestanaaa'>
          <a className="btn btn-outline-warning" onClick={this.unu}>
          <i></i>Crear una nueva cuenta</a>
        </div>
        </div>
        <div class="col-sm border rounded p-3 mt-4">
          <h3>
            feed all content
          </h3>
        </div>
        <div class="col-sm border rounded p-3 mt-4">
          <h3>
            Usuarios activos
          </h3>
        </div>
      </div>

      <div class="row">
        <div class="col-6 border rounded p-6 mt-4">Contacto Ingenieria usac</div>
        <div class="col-6 border rounded p-6 mt-4">
          <div className='btn-group pb-3'>
            <a className="btn btn-outline-dark btn-sm" onClick={this.logOut}>
              Cerrar sesión</a>
          </div>
        </div>
      </div>
    </div>
      );
    return (
      <div className='registro container border rounded p-3 mt-4'>
      <h2>REGISTRO</h2>
      <form>
      <LeyendaError className="textoleyenda">
          nombre de usuario invalido
        </LeyendaError>
        <div className="input-group pb-3">
          <div className="input-group-prepend icon">
            <span className="input-group-text">
            <i  className= "fa-fw"><FontAwesomeIcon icon={faUser}/></i></span>
          </div>
          <Input id='usuario' className="form-control" 
          type="text" placeholder="Usuario"
          ref={input => this.usuario = input}/>
        </div>
        <div className="input-group pb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <i className= "fa-fw"><FontAwesomeIcon icon={faEnvelope}/></i></span>
          </div>
          <Input id='correo' className="form-control" 
          type="text" placeholder="Correo Electrónico Institucional"
          ref={input => this.correo = input}/>
        </div>
        <div className="input-group pb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <i className="fa-fw"><FontAwesomeIcon icon={faUnlock}/></i></span>
          </div>
          <Input id='clave'className="form-control" 
          type="password" placeholder="Contraseña"
          ref={input => this.clave = input}/>
        </div>
        <div className="btn-group pb-3 registroinicio">
          <a className="btn btn-outline-dark"  onClick={this.logIn}>
          <i></i>Iniciar sesión</a>
        </div>
        <div className='btn-group pb-3 registroinicio'>
          <a className="btn btn-outline-warning" onClick={this.logOut}>
          <i></i>Crear una nueva cuenta</a>
        </div>
        <div className="border rounded p-6 mt-8">
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error:</b> Por favor rellena el formulario correctamente
          </p>
        </div>
        <div className="border rounded p-6 mt-8">
          <p>
            Formulario enviado exitosamente!
          </p>
        </div>
      </form>
      </div>
    );
  }
}

export default App;
