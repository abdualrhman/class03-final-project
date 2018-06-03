import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import ItemManeger from '../items/itemManeger.js'
import Item from '../items/item.js';
import ItemList from '../items/itemList.js'
import CategoryManeger from '../categories.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/item/:id" component={Item}/>
          <Route exact path="/categories" component={CategoryManeger}/>
          <Route exact path="/list" component={ItemList}/>
          <Route exact path="/" component={ItemManeger}/>
        </Switch>
      </div>
    );
  }
}

export default App;
