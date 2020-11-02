import React from 'react';
import styled from 'styled-components';
const Button = ({label, color}) => {

    console.log(color);
    const button = styled.button`

        height: 50px;
        width: 200px;


`;
const styles= {
    color: [color]
}

    return (

        <div>

            <button  ></button>
        </div>
     );
}

export default Button;