import React, { Component } from 'react';


const topnav = {
    height: '150px',
    background: 'green',
    margin:'10px', 
};


class Header extends Component{
    render(){
        return (
        < div  style={ topnav } > { this.props.children } </div> 
        );
    }

}

export default Header;

