import React from 'react';
import styled from 'styled-components';
import ColorPalet from './../Colors/ColorPalet';


const Input = ({placeholder, color, bgColor, borderSize, borderRadius, borderColor}) => {
    const Input = styled.input`
    background-color: ${ColorPalet[bgColor};
    border-radius: ${borderRadius};
    border: ${borderSize} solid ${borderColor};;
    box-shadow: 2px 2px 3px grey;
    color: ${color};
    font-size: 1rem;
    height: 5vw;
    margin: 1rem auto;
    outline: 0;
    padding: 20px 25px;
    width: 30vw;
    `;
    return (

        <div>
            <Input placeholder={ placeholder }/>
        </div>
     );
}
Input.defaultProps = {
    bgColor: "beige",
    border: "3px solid olive",
    borderRadius: "15px",
    color: "midnightblue",
    placeholder: "write...",
    }

export default Input;