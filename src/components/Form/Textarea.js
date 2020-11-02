import React from 'react';
import styled from 'styled-components';
import ColorPalet from './../Colors/ColorPalet';


const Textarea = ({placeholder, color, bgColor, borderSize, borderRadius, borderColor}) => {
    const Textarea = styled.textarea`
    background-color: ${ColorPalet[bgColor.toLowerCase()]};
    border-radius: ${borderRadius};
    border: ${borderSize} solid ${ColorPalet[borderColor.toLowerCase()]};
    box-shadow: 2px 2px 3px grey;
    color: ${ColorPalet[color.toLowerCase()]};
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
    bgColor: "desert",
    border: "3px solid 'alamedia ochre'",
    borderRadius: "15px",
    color: "swan white",
    placeholder: "write...",
    }

export default Textarea;