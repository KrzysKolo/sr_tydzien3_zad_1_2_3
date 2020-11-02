import React from 'react';
import styled from 'styled-components';


const Input = ({value, color, bgColor, borderSize, borderRadius, borderColor}) => {
    const Input = styled.input`
    background-color: ${bgColor};
    border-radius: ${borderRadius};
    border: ${borderSize} solid ${borderColor};;
    box-shadow: 2px 2px 3px grey;
    color: ${color};
    font-weight: bold;
    font-size: 1.2rem;
    height: 5vw;
    margin: 1rem auto;
    outline: 0;
    padding: 20px 25px;
    width: 30vw;
    `;
    return (

        <div>
            <Input value={ value }/>
        </div>
     );
}
Input.defaultProps = {
    bgColor: "beige",
    border: "3px solid olive",
    borderRadius: "15px",
    color: "midnightblue",
    value: "write...",
    }

export default Input;