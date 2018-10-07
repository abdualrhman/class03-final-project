import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CategoryManeger extends Component {
  constructor(props){
    super(props)
    this.state={
      value: null
    }
    this.fetchData=this.fetchData.bind(this)
  }

  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    const me =this;
    fetch("/categories", {
    method : 'get'
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      me.setState({
        value : data
      })
    })
    .catch(console.log)
  }
  render() {
    const {value} = this.state;
    return (
      <div className='categoty-btn-container'>
        {value && value.map(a=>{
          const index = value.indexOf(a)
          return (
          <div key={index} className=''>
          <Link className='link' to={`/list?category_id=${a.id}`}>
            <button className='btn category-btn'>
            <p className='category-btn-txt'>{a.name}</p>
            {a.id===1 && <i className="fas fa-code icon"></i>}
            {a.id===2 && <i className="fab fa-node-js icon"></i>}
            {a.id===3 && <i className="fas fa-database icon"></i>}
            {a.id===4 && <i className="fas fa-code-branch icon"></i>}
            {a.id===5 && <i className="fas fa-sitemap icon"></i>}
            </button>
          </Link>
          </div>
          )
        })}
      </div>
    );
  }
}
