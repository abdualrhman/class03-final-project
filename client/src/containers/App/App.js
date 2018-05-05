import React, { Component } from 'react';
import ItemManeger from '../items/itemManeger.js'
import ItemList from '../../components/items/itemList.js'
 import Item from '../items/item.js'
  import ItemList_ from '../items/itemList.js'

import {Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/list/:id" component={Item}/>
        <Route exact path="/list" component={ItemList_}/>
        <Route exact path="/" component={ItemManeger}/>
      </div>
    );
  }
}

export default App;

//ItemList_
