import React,  { Component } from 'react';
import Button from './Button';

import { faAngellist } from '@fortawesome/fontawesome-svg-core';
import './App.css';


class App extends Component {
  state = {  }

  render() {

    return (
      <div>
        <Button label="pisz" color="green" bgColor="yellow" icon={faAngellist}/>
      </div>
     );
  }
}

export default App;