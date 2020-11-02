import React,  { Component } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './App.css';


class App extends Component {
  state = {  }

  render() {

    return (
      <div>
        <Button label="kliknij mnie" color="red" bgColor="blue" icon={faThumbsUp}/>
      </div>
     );
  }
}

export default App;