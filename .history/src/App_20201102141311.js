import React,  { Component } from 'react';
import Button from './Button';
import { angellist } from '@fortawesome/fontawesome-svg-core';
import './App.css';


class App extends Component {
  state = {  }

  render() {

    return (
      <div>
        <Button label="pisz" color="green" bgColor="yellow" icon={angellist}/>
      </div>
     );
  }
}

export default App;