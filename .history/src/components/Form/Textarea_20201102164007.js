import React from 'react';
import styled from 'styled-components';


const Textarea = ({value, color, bgColor, borderSize, borderRadius, borderColor}) => {
    const Textarea = styled.textarea`
    background-color: ${bgColor};
    border-color: ${borderColor};
    border-radius: ${borderRadius};
    border-size: ${borderSize};
    box-shadow: 0px 2px 2px lightgray;
    color: ${color};
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    height: 200px;
    outline: 0;
    padding: 20px 25px;
    width: 300px;

    `;
    return (

        <div>
            <Textarea value={ value }/>
        </div>
     );
}
Textarea.defaultProps = {
    bgColor: "#1B1464",
    borderColor: "#7a7a7a",
    borderRadius: 5,
    borderSize: 2,
    color: "#FFC312",
    value: "write...",
    }

export default Textarea;