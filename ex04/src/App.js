import React, { Component } from 'react';

class App extends Component {

  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };

  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem("Arena");
    console.log(myLocalStorageData);
    return myLocalStorageData;
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Set Local Storage</button>
        <button onClick={this.getLocalStorage}>Get Local Storage</button>
      </div>
    );
  }
}

export default App;