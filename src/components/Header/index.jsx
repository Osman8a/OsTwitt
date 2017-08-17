import React, {Component} from 'react';

import './header.css';

class Header extends Component{
    render(){
        return(
           <header className="root">
               <h1 className="logo">OsTwitt</h1>
           </header>
        )
    }
}

export default Header