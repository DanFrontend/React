import React from 'react';
import { MyContext }  from '../../App';

function Button(props) {
    console.log('Button==> ', props);
    return (
        <>

            Переданный контекст==>
            <MyContext.Consumer>
                {val => <button onClick={val.editState}>{val.state.dark}</button>}
            </MyContext.Consumer>
        </>
    )
}

export default Button;