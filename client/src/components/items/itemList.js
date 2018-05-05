import React, { Component } from 'react';
import {Link} from 'react-router-dom';



export default class ItemList extends Component {
  render() {
const {value} = this.props;
    return (
      <div>
      {
        value &&
        <div className='list'>
              {
                value.map(a=>{
                  const index = value.indexOf(a)
                  return (
                  <div key={index} className='listItems'>
                    <Link to={`/list/${index}`}>
                      <h3 className='link'><b>{a.title}</b></h3>
                      <p className='link'>{a.link}</p>
                    </Link>
                  </div>
                 )
                })
              }
        </div>
      }
      </div>
    );
  }
}
