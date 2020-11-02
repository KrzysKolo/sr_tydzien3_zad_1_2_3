import React from 'react';
import styled from 'styled-components';
const Button = ({label, color, bgcolor}) => {

    console.log(color);
    const Button = styled.button`
    padding: 10px 15px;
    border-radius: 10px;
    width: 200px;
    color: ${[color]};
    background-color: ${[bgcolor]},
    `;



    return (

        <div>

            <Button style={styles} >{label} </Button>
        </div>
     );
}

export default Button;