import React, { Component } from 'react'
import './login.css'

class Login extends Component {
    render() {
        return (
            <div className='root-login'>
                <p className='text-login'>
                    Necesitamos que inicies sesion con tu cuenta de GitHub
                    para que puedes leer y escribir mensajes
               </p>
                <button
                    onClick={this.props.onAuth}
                    className={'button-login'}
                >
                  <span className= 'fa fa-google'> Login con Google</span>
               </button>
            </div>
        )
    }
}

export default Login;