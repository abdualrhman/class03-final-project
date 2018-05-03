import React, { Component } from 'react';



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
                  {a.title}
                  <br/>
                  {a.link}
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