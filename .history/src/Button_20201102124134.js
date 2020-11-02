import React from 'react';
import styled from 'styled-components';
const Button = ({label}) => {
    const buttonA = styled.button`
        color: #7a7a7a;
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