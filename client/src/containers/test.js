import React, { Component } from 'react';


export default class Test extends Component {
  constructor(props){
    super(props)
    this.state={
      value : {}
    }
    this.fetchData=this.fetchData.bind(this)
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
  }

  render() {
    const {value} = this.state;
    return (
      <div>
      <p>
        {Object.keys(value).length > 1 && console.log(value[0].name)}
      </p>
        <button onClick={this.fetchData}>click me</button>
        <p>this is a test</p>
      </div>
    );
  }
}
