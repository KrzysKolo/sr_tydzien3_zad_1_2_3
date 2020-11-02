import React from 'react';
import styled from 'styled-components';
const Button = ({label}) => {
    const button = styled.button`
        color: "#7a7a7a";
`;

    return (
        <div>
            <button label={"jakies tam to"} />
        </div>
     );
}

export default Button;