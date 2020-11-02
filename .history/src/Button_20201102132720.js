import React from 'react';
import styled from 'styled-components';
const Button = ({label, color}) => {

    console.log(color);
    const button = styled.button`
        color: ${color};
        height: 50px;
        width: 200px;
        label: ${label}

`;

    return (

        <div>

            <button  ></button>
        </div>
     );
}

export default Button;