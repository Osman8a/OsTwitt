import React, { Component } from 'react'
import './input-text.css'
import PropTypes from 'prop-types'

const propTypes = {
    onSendText: PropTypes.func.isRequired,
    userNameToReply: PropTypes.string.isRequired,
    onCloseText: PropTypes.func.isRequired
}

function InputText({ onSendText, userNameToReply, onCloseText }) {
    return (
        <form className={'form'} onSubmit={onSendText}>
            <textarea className='text' name="text" >
                {(userNameToReply) ? `@${userNameToReply}` : ''}
            </textarea>
            <div className={'buttons'}>
                <button className={'close'} onClick={onCloseText}>Cerrar</button>
                <button className={'send'} type='submit'>Enviar</button>
            </div>
        </form>
    )
}

InputText.propTypes = propTypes

export default InputText