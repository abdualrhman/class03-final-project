import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/index.css';



 export default class HomePage extends Component {
   clickHandler(e){
      window.location.href = '/categories'
   }
  render() {
    return (
      <div>
      <div className='image-container'>
        <div className='img-content'>
          <p className='img-text'>Discover the most usefull centent in the web development community</p>
          <button className='btn btn-warning' onClick={this.clickHandler}>view contents</button>
        </div>
      </div>
      </div>
    );
  }
}

// <img className='image' src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-0.3.5&s=98f0701e92fcb50e8f53e6bb5b4c112e&auto=format&fit=crop&w=1500&q=80"
// />
