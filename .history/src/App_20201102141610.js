import React,  { Component } from 'react';
import Button from './Button';

import { faAndroid } from '@fortawesome/fontawesome-svg-core';
import './App.css';


class App extends Component {
  state = {  }

  render() {

    return (
      <div>
        <Button label="pisz" color="green" bgColor="yellow" icon={faAndroid}/>
      </div>
     );
  }
}

export default App;