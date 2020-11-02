import React,  { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const clicMe = () => {
  alert("You clicked me!")
}
const Button = styled.button`
backdround-color: blue;
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