import React, { useReducer } from 'react';

const initialState = {
    FirstName:{
        value:'',
        error:null
    },
    LastName:{
        value:'',
        error:null
    },


    email:{
        value:'',
        error:null
    }
};



function reducer(state, action) {
    return {
        ...state,
        [action.type]: {
            value:action.payload,
            error:action.error
        },
    };
}


export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(event) {
        const { name, value } = event.target;
        let error = null
        if(name=="FirstName"){
            if(value.length<3){
                error="First Name must be at least 3"
            }
        }
        if(name=="LastName"){
            if(value.length<3){
                error="Last Name must be at least 3"
            }
        }

        if(name=="email"){
            if(value.length<5){
                error="Email must be at least 5"
            }
        }
        dispatch({
            type: name,
            payload: value,
            error: error
        });
    }


    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="FirstName"
                        value={state.FirstName.value}
                        onChange={handleChange}
                    />
                    {state.FirstName.error !==null &&(
                        <p>{state.FirstName.error}</p>
                    )}
                </label>
            </div>

            <div>
                <label>
                    <span>last Name:</span>{' '}
                    <input
                        name="LastName"
                        value={state.LastName.value}
                        onChange={handleChange}
                    />
                    {state.LastName.error !==null &&(
                        <p>{state.LastName.error}</p>
                    )}
                </label>
            </div>


            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                    {state.email.error !==null &&(
                        <p>{state.email.error}</p>
                    )}
                </label>
            </div>
        </div>
    );
}