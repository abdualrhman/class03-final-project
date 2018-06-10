import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import ItemManeger from '../items/itemManeger.js'
import Item from '../items/item.js';
import ItemList from '../items/itemList.js'
import CategoryManeger from '../categories.js';
import HomePage from '../../components/homePage.js'
import About from '../../components/about.js'

// About

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={HomePage}/>
          <Route exact path="/item/:id" component={Item}/>
          <Route exact path="/categories" component={CategoryManeger}/>
          <Route exact path="/add-contents" component={ItemManeger}/>
          <Route exact path="/list" component={ItemList}/>

        </Switch>
      </div>
    );
  }
}
export default App;
//          <Route exact path="/about" component={About}/>
