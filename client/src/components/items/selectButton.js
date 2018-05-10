import React from 'react';

export default class Selectbutton extends React.Component{
  render(){
    const {name, changeHandler, value}= this.props;
    return(
      <div className='form-item'>
          <label>{name}:<br/>
            <select
              onChange={changeHandler}
            >
              {
                value.map(a=>{
                  const index = value.indexOf(a)
                  return <option value={a} key={index}>{a}</option>
                })
              }
            </select>
          </label>
      </div>
    )
  }
}
// <option value="Webdesign">Webdesign</option>
// <option value="NodeJS">NodeJS</option>
// <option value="Database">Database</option>
// <option value="Architecture">Architecture</option>
