import React, { Component } from 'react';
import Word from './components/Word';

class App extends Component {
  funcGetElement(isTrue) {
    if (isTrue) {
      return <p>Dung</p>;
    }
    return <p>Sai</p>;
  }
  render() {
    const element = false ? <p>Dung</p> : <p>Sai</p>;
    const getElement = (isTrue) => isTrue ? <p>Dung</p> : <p>Sai</p>;
    return (
      <div>
        {false ? <p>Dung</p> : <p>Sai</p>}
        { element }
        { getElement(true) }
        { this.funcGetElement(true) }
        <Word en="hello" vn="xin chào" />
        <Word en="good morning" vn="chào buổi sáng" />
      </div>
    );
  }
}

export default App;
