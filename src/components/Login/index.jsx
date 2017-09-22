import React, { Component } from 'react'
import './login.css'
import PropTypes from 'prop-types';

const propTypes = {
    onAuth: PropTypes.func.isRequired,
    onAuth2: PropTypes.func.isRequired,
    onAuth3: PropTypes.func.isRequired
}
function Login({ onAuth, onAuth2, onAuth3 }) {
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

            <button
                onClick={onAuth2}
                className={'button-login'}
            >
                <span className='fa fa-facebook'> Login con Facebook</span>

            </button>

            <button
                onClick={onAuth3}
                className={'button-login'}
            >
                <span className='fa fa-github'> Login con GitHub</span>

            </button>
        </div>
    )
}

Login.propTypes = propTypes

export default Login;