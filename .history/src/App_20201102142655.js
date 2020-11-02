import React,  { Component } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-brands-svg-icons';
import './App.css';


class App extends Component {
  state = {  }

  render() {

    return (
      <div>
        <Button label="pisz" color="green" bgColor="yellow" icon={faCheck}/>
      </div>
     );
  }
}

export default App;