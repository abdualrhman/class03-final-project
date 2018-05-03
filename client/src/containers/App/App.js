import React, { Component } from 'react';

import Test from '../test.js'
import ItemManeger from '../items/itemManeger.js'
import ItemList from '../../components/items/itemList.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Test/>
        <ItemManeger/>
        <ItemList/>
      </div>
    );
  }
}

export default App;
