import React,  { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const clicMe = () => {
  alert("You clicked me!")
}
const theme = {
  button: {
    default:  '#B33771',
    hover: '#77234b',
  }
}
const Button = styled.button`
background-color: ${props => theme[props.theme].default};
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: easy .5s;
&:hover {
  background-color: ${props => theme[props.theme].hover};
}
`;
Button.defaultProps = {
  theme: 'button'
}
class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Button onClick={clicMe}>
          Button
        </Button>
      </div>
     );
  }
}

export default App;