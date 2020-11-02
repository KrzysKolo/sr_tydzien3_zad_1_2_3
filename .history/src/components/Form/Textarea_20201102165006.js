import React from 'react';
import styled from 'styled-components';


const Textarea = ({value, color, bgColor, borderSize, borderRadius, borderColor}) => {
    const Textarea = styled.textarea`
    background-color: ${bgColor};
    border-radius: ${borderRadius};
    border: ${borderSize} solid ${borderColor};;
    box-shadow: 0px 2px 2px lightgray;
    color: ${color};
    font-weight: bold;
    font-size: 1.2rem;
    height: 20vw;
    margin: 3rem auto;
    outline: 0;
    padding: 20px 25px;
    width: 30vw;
    `;
    return (

        <div>
            <Textarea value={ value }/>
        </div>
     );
}
Textarea.defaultProps = {
    bgColor: "#1B1464",
    border: "3px red solid",
    borderRadius: "15px",
    color: "#FFC312",
    value: "write...",
    }

export default Textarea;