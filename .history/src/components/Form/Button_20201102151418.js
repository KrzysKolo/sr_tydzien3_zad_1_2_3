import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist } from '@fortawesome/free-brands-svg-icons';

const Button = ({label, color, bgColor, icon}) => {

    console.log(color);
    const button = styled.button`
    padding: 10px 15px;
    border-radius: 10px;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color, color 0.6s;
    font-weight: bold;
    color: ${[color]};
    background-color: ${[bgColor]};
    &:hover {
        background-color: ${[color]};
        color: ${[bgColor]};
    }
    `;

    const styles = {
        paddingRight: 15,
    }


    return (

        <div>
            <button >
                <FontAwesomeIcon style={styles} icon={icon} />{label}
            </button>
        </div>
     );
}
Button.defaultProps = {
    bgColor: "#1B1464",
    color: "#FFC312",
    label: "Click me",
    icon: faAngellist,
}

export default Button;