import React, { Component } from 'react';


const advertisementt= {
    height: '120px',
    width: '660px',
    background: 'purple',
    margin:'10px' ,
}
class Advertisement extends Component{

    render(){
        return (
        < div  style={ advertisementt } > { this.props.children } </div> 
        );
    }

}

export default Advertisement;