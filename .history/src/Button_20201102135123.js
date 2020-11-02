import React from 'react';

const Button = ({label, color, bgcolor}) => {

    console.log(color);
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