import React,  { Component } from 'react';
import Button from './Button';

import './App.css';


class App extends Component {
  state = {  }

  render() {

    return (
      <div>
        <Button label="pisz" color="green" bgColor="yellow"/>
      </div>
     );
  }
}

export default App;