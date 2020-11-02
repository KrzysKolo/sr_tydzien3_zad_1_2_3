import React from 'react';
import styled from 'styled-components';
const Button = ({label, color}) => {

    console.log(color);
    const buttonA = styled.button`
        color: green;
        background-color: red;
        height: 50px;
        width: 200px;


`;


    return (

        <div>

            <buttonA > {label}</buttonA>
        </div>
     );
}

export default Button;