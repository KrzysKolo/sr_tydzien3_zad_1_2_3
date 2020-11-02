import React from 'react';
import styled from 'styled-components';
const Button = ({label, color, bgcolor}) => {

    console.log(color);
    const ButtonA = styled.button`
    padding: 10px 15px;
    border-radius: 10px;
    width: 200px;
    `;
 const styles ={
     color: [color],
     backgroundColor: [bgcolor],
 }


    return (

        <div>

            <ButtonA style={styles} >{label} </ButtonA>
        </div>
     );
}

export default Button;