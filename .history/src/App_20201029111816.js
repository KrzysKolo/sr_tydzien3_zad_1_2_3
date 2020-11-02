import React,  { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const clicMe = () => {
  alert("You clicked me!")
}
const Button = styled.button`
background-color: #B33771;
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: .5s;
&:hover {
  background-color: #77234b;
}
`;
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