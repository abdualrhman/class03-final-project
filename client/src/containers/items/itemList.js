import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class ItemList_ extends Component {
  constructor(props){
    super(props)
    this.state={
      value:null,
    }
    this.fetchData=this.fetchData.bind(this)
  }

  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    const me =this;
    fetch("/list", {
    method : 'get'
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      me.setState({
        value : data
      },()=>{console.log(me.state.value)})
    })
    .catch(console.log)
  }
  render() {
    const {value} = this.state;
    //const bla =this.props.match.params.id
    return (
      <div>
      <Link to='/'>
      <input type='button' value='add content'/>
      </Link>
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
