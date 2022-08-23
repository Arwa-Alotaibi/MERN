import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state ={
                age:this.props.age
        };
    }
    increment=()=>{
        this.setState({age:this.state.age+1 })
    }
    render() {
        const {firstName, lastName,  hairColor} = this.props
        return (
            <div>
                <h1>{firstName} , {lastName}</h1>
                <p>age : {this.state.age}</p>
                <p>hair Color : {hairColor}</p>
                <button onClick={this.increment}>Birthday button for {firstName} , {lastName} </button>
                
            </div>
        );
    }
}




export default PersonCard;

