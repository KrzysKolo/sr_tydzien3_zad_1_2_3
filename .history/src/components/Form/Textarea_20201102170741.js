import React from 'react';
import styled from 'styled-components';


const Textarea = ({placeholder, color, bgColor, borderSize, borderRadius, borderColor}) => {
    const Textarea = styled.textarea`
    background-color: ${bgColor};
    border-radius: ${borderRadius};
    border: ${borderSize} solid ${borderColor};;
    box-shadow: 2px 2px 3px grey;
    color: ${color};
    font-weight: bold;
    font-size: 1.2rem;
    height: 20vw;
    margin: 1rem auto;
    outline: 0;
    padding: 20px 25px;
    width: 30vw;
    `;
    return (

        <div>
            <Textarea placeholder={ placeholder }/>
        </div>
     );
}
Textarea.defaultProps = {
    bgColor: "beige",
    border: "3px solid olive",
    borderRadius: "15px",
    color: "midnightblue",
    placeholder: "write...",
    }

export default Textarea;