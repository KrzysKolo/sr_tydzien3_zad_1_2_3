import React from 'react';
import styled from 'styled-components';
const Button = ({label, color, bgColor}) => {

    console.log(color);
    const Button = styled.button`
    padding: 10px 15px;
    border-radius: 10px;
    width: 200px;
    color: ${[color]};
    background-color: ${[bgColor]},
    `;



    return (

        <div>

            <Button >{label} </Button>
        </div>
     );
}

export default Button;