import React from 'react';
import styled from 'styled-components';
const Button = ({label, color, bgcolor}) => {

    console.log(color);
    const button = styled.button`
    padding: 10px 15px;
    border-radius: 10px;
    outline: 0;
    width: 200px;
    `;
 const styles ={
     color: [color],
     backgroundColor: [bgcolor],
 }


    return (

        <div>

            <button style={styles} >{label} </button>
        </div>
     );
}

export default Button;