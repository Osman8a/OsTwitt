import React, { Component } from 'react'
import './input-text.css'

class InputText extends Component {
    render() {
        return (
            <form className={'form'} onSubmit={this.props.onSendText}>
                <textarea className='text' name="text" ></textarea>
                <div className={'buttons'}>
                    <button className={'close'} onClick={this.props.onCloseText}>Cerrar</button>
                    <button className={'send'} type='submit'>Enviar</button>
                </div>
            </form>
        )
    }
}

export default InputText