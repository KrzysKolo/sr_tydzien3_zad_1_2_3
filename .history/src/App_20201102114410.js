import React,  { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import styled from 'styled-components';
import './App.css';

const clicMe = () => {
  alert("You clicked me!")
}
const theme = {
  fuchsia: {
    default:  '#B33771',
    hover: '#77234b',
  },
  georgiaPeach: {
    default: '#FD7272',
    hover: '#b55353',
  }
}
 Button ({label}){
const buttonStyles = styled.button`
background-color: ${props => theme[props.theme].default};
color: "white";
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
`};
Button.defaultProps = {
  label: "cudo",
};
class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Button style={buttonStyles}>
          {label}
        </Button>
        <Button theme="georgiaPeach">
          Button
        </Button>
        <ButtonComponent/>
      </div>
     );
  }
}

export default App;