import React, { Component } from 'react';


const subcontent= {
    height: '200px',
    width: '210px',
    background: 'yellow',
    margin: '10px',

}
class SubContents extends Component{
    render(){
        return (
        < div  style={ subcontent } > { this.props.children } </div> 
        );
    }

}

export default SubContents;
