import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faUnlock} from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hecho:false,
      usuario:'',
      errorMensaje:''
    }
  }

  registro = () => {
    this.setState({
      hecho:true,
      usuario:this.usuario.value,
      correo:this.correo.value
    })
  }

  nuevoRegistro = () => {
    this.setState({
      hecho:false,
      usuario:''
    })
  }

  render() {
    if (this.state.hecho)
      return(
          <div className="border rounded login m-5 container login">
          <h3 className="row-4 text-center">REGISTRO SATISFACTORIO</h3>
          <p>Tu nombre de usuario es: <b>{this.state.usuario}</b></p>
          <p>Tu correo electrónico es: <b>{this.state.correo}</b></p>
          <div className='btn-group pb-3'>
          <a className="btn btn-lg row-4 btn-outline-warning" onClick={this.nuevoRegistro}>
          <i><FontAwesomeIcon className="fa-fw" icon={faUser}/></i>Nuevo Registro</a>
        </div>
        </div>
      );
    return (
        <div className='border rounded login m-5 container login'>
      <h2>REGISTRO</h2>
      <form>
        <div className="input-group pb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <i  className= "fa-fw"><FontAwesomeIcon icon={faUser}/></i></span>
          </div>
          <input id='usuario' className="form-control" 
          type="text" placeholder="Usuario"
          ref={input => this.usuario = input}/>
        </div>
        <div className="input-group pb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <i className= "fa-fw"><FontAwesomeIcon icon={faEnvelope}/></i></span>
          </div>
          <input id='correo' className="form-control" 
          type="text" placeholder="Correo Electrónico Institucional"
          ref={input => this.correo = input}/>
        </div>
        <div className="input-group pb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <i className="fa-fw"><FontAwesomeIcon icon={faUnlock}/></i></span>
          </div>
          <input id='clave'className="form-control" 
          type="password" placeholder="Contraseña"
          ref={input => this.clave = input}/>
        </div>
        <div className='btn-group pb-3'>
          <a className="btn btn-lg row-4 btn-outline-warning" onClick={this.registro}>
          <i><FontAwesomeIcon className="fa-fw" icon={faUser}/></i>Registrar</a>
        </div>
      </form>
      </div>
    );
  }
}

export default App;
