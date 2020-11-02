import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({label, color, bgColor, icon}) => {

    console.log(color);
    const Button = styled.button`
    padding: 10px 15px;
    border-radius: 10px;
    width: 200px;
    color: ${[color]};
    background-color: ${[bgColor]};
    `;



    return (

        <div>
            <Button ><FontAwesomeIcon icon={icon}></FontAwesomeIcon>{label} </Button>
        </div>
     );
}

export default Button;