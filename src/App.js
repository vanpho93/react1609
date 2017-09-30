import React, { Component } from 'react';
import Word from './components/Word';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <List />
        <Word en="hello" vn="xin chào" isMemorized={true} />
        <Word en="good morning" vn="chào buổi sáng" isMemorized={false} />
      </div>
    );
  }
}

export default App;
