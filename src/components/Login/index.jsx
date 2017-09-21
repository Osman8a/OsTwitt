import React, { Component } from 'react'
import './login.css'
import PropTypes from 'prop-types';

const propTypes = {
    onAuth: PropTypes.func.isRequired
}
function Login({ onAuth }) {
    return (
        <div className='root-login'>
            <p className='text-login'>
                Necesitamos que inicies sesion con tu cuenta de GitHub
                    para que puedes leer y escribir mensajes
               </p>
            <button
                onClick={onAuth}
                className={'button-login'}
            >
                <span className='fa fa-google'> Login con Google</span>
            </button>
        </div>
    )
}

Login.propTypes = propTypes

export default Login;