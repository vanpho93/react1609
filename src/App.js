import React, { Component } from 'react';
import Word from './components/Word';

class App extends Component {
  render() {
    return (
      <div>
        <Word en="hello" vn="xin chào" isMemorized={true} />
        <Word en="good morning" vn="chào buổi sáng" isMemorized={false} />
      </div>
    );
  }
}

export default App;
