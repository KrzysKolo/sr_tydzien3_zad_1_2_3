import React,  { Component } from 'react';
import { Button, Input, Textarea } from './components/Form'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './App.css';

class App extends Component {
  state = {  }

  render() {

    return (
      <div className="app">
        <Input bgColor="azure" color="navy" borderSize="3px" borderRadius="10px" borderColor="navy" placeholder="Your name" />
        <Textarea bgColor="azure" color="navy" borderSize="3px" borderRadius="10px" borderColor="navy" placeholder="write about you..." />
        <Button  bgColor="navy" color="bisque" label="Zadanie nr 1" icon={faThumbsUp}/>
      </div>
     );
  }
}

export default App;