import React, { Component } from 'react';
import ItemManeger from '../items/itemManeger.js'
import ItemList from '../../components/items/itemList.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemManeger/>
        <ItemList/>
      </div>
    );
  }
}

export default App;
