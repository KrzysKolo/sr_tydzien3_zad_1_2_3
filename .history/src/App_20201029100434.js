import React,  { Component } from 'react';
import './App.css';


class App extends Component {
  clicMe = () => {
    alert("You clicked me!")
  }
  state = {  }
  render() {
    return (
      <div>
        <button onClick={clicMe}>
          Button
        </button>
      </div>
     );
  }
}

export default App;