import React from 'react';
import styled from 'styled-components';
const Button = ({label, color}) => {
    const colors = {
        kolo1: "#16a085",
        kolo2: "#d35400"
    }
    const buttonA = styled.button`
        color: colors[kolo1];
        height: 50px;
        width: 200px;

`;

    return (

        <div>
            <buttonA >{label}</buttonA>
        </div>
     );
}

export default Button;