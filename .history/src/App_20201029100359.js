import React,  { Component } from 'react';
import './App.css';

clicMe = () => {
  alert("You clicked me!")
}
class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <button>
          Button
        </button>
      </div>
     );
  }
}

export default App;