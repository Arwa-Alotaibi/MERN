import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props)
    }
    render() {
        const {firstName, lastName, age, hairColor} = this.props

        return (

            <div>
                <h1>{firstName} , {lastName}</h1>
                <p>age : {age}</p>
                <p>hair Color : {hairColor}</p>
            </div>
        );
    }
}




export default PersonCard;