import React, { Component } from 'react';


const mainn ={
    height: '400px',
    width: '700px',
    background: 'red',
    margin: '10px',
}



class Main extends Component{

    render(){
        return (
        < div  style={ mainn } > { this.props.children } </div> 

        );
    }

}


export default Main;
