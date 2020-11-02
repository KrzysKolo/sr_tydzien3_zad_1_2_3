import React from 'react';
import styled from 'styled-components';
import ColorPalet from './../Colors/ColorPalet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist } from '@fortawesome/free-brands-svg-icons';

const Button = ({label, color, bgColor, icon}) => {
    const Button = styled.button`
    background-color: ${[bgColor]};
    border-radius: 10px;
    box-shadow: 0px 2px 2px lightgray;
    color: ${[color]};
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    outline: 0;
    padding: 20px 25px;
    text-transform: uppercase;
    transition: ease background-color, color 0.6s;
    &:hover {
        background-color: ${[color]};
        color: ${[bgColor]};
    }
    `;
    return (

        <div>
            <Button >
                <FontAwesomeIcon icon={icon} /> {label}
            </Button>
        </div>
     );
}
Button.defaultProps = {
    bgColor: ColorPalet[grey porcelain],
    color: "#FFC312",
    label: "Click me",
    icon: faAngellist,
}

export default Button;