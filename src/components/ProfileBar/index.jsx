import React, {Component} from 'react'

class ProfileBar extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className={'root'}>
                <figure>
                    <img className={'avatar'}  src={this.props.picture}/>
                </figure> 
                <span className={'username'}>Hola @{this.props.username}</span>
                <button onClick={this.props.onOpenText} className={'button'}>
                    <span className="fa fa-lg fa-edit"></span> Tweet
                </button>
            </div>
        )
    }
}

export default ProfileBar
