import React,  { Component } from 'react';
import './App.css';

const clicMe = () => {
  alert("You clicked me!")
}
class App extends Component {
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