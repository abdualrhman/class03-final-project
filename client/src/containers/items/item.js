import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../styles/index.css'


export default class Item extends Component {
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
    const {id}= this.props.match.params;
    const me =this;
    fetch(`/list/${id}`, {
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
    return (
      <div className='item-container jumbotron'>
      {value&&console.log(value)}
      {
        value
        &&
        <div>
          <div>
          <h2>{value.title}</h2>
          <br/>
          <p style={{fontWeight: 'bold', fontSize : '15px'}}>category</p>
          <p style={{fontWeight: 'bold', fontSize : '25px'}}>{value.category_name}</p>
          <br/>
          <p style={{fontWeight: 'bold', fontSize : '15px'}}>Description</p>
          <h4 className='description'>
           {value.description ?
            value.description :
            <p>no description...</p>
          }</h4>
          </div>
          <div className='item-buttons-container'>
          {/*back to list button*/}
          <Link to={`/list?category_id=${value.category_id}`}>
          <button className='btn item-buttons btn-success'>back to the list</button>
          </Link>
          {/*visit the site button*/}
          <a className='btn item-buttons btn-success' target='_blank' href={value.link}>visit wedsite</a>
          </div>
        </div>
      }
    </div>
    );
  }
}
