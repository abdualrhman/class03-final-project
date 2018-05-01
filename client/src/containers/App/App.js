import React, { Component } from 'react';

import Test from '../test.js'
import ItemForm from '../itemForms/ItemForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test/>
        <ItemForm/>
      </div>
    );
  }
}

export default App;
