import React from 'react';
import styled from 'styled-components';
const Button = ({label, color}) => {
    const colors = {
        kolo1: "#16a085",
        kolo2: "#d35400",

    }
    console.log(color);
    const button = styled.button`
        color: ${color};
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