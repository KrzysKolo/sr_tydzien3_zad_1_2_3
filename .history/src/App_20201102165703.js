import React,  { Component } from 'react';
import Button from './components/Form/Button';
import Textarea from './components/Form/Textarea';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './App.css';

class App extends Component {
  state = {  }

  render() {

    return (
      <div className="app">
        <Textarea bgColor="azure" color="navy" borderSize="3px" borderRadius="10px" borderColor="red" value="write about you..." />
        <Button  bgColor="navy" color="bisque" label="Zadanie nr 1" icon={faThumbsUp}/>
      </div>
     );
  }
}

export default App;