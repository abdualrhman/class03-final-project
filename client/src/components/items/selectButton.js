import React from 'react';

export default class Selectbutton extends React.Component{
  render(){
    const {name, changeHandler, value}= this.props;
    return(
      <div className='form-item'>
          <label>{name}:<br/>
            <select name={name}
              onChange={changeHandler}
            >
              {
                value.map(a=>{
                  const index = value.indexOf(a) + 1
                  return <option value={index} key={index}>{a}</option>
                })
              }
            </select>
          </label>
      </div>
    )
  }
}
