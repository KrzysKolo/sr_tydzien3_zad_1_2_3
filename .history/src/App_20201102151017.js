import React,  { Component } from 'react';
import Button from './components/Form/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './App.css';


class App extends Component {
  state = {  }

  render() {

    return (
      <div className="app">
        <Button  bgColor="navy" color="bisque" label="Zadanie nr 1" icon={faThumbsUp} />

      </div>
     );
  }
}

export default App;