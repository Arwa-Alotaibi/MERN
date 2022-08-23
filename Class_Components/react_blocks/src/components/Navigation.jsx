import React, { Component } from 'react';


const sidenav= {
    height: '300px',
    width: '200px',
    background: 'blue',
    margin: '10px',
}
class Navigation extends Component{

    render(){
        return (
        < div  style={ sidenav } > { this.props.children } </div> 
        );
    }

}

export default Navigation;