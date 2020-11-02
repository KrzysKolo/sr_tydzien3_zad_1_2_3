import React from 'react';
import styled from 'styled-components';
const Button = ({label, color, bgcolor}) => {

    console.log(color);
    const button
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