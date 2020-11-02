import React from 'react';
import styled from 'styled-components';
const Button = ({label, color}) => {

    console.log(color);
    const button = styled.button`
        color: ${props => props.color};
        height: 50px;
        width: 200px;

`;

    return (

        <div>

            <button  >{label}</button>
        </div>
     );
}

export default Button;