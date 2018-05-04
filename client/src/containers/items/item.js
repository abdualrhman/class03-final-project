import React, { Component } from 'react';

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
      value && Object.keys(this.props).length >1 && this.props.match.params &&
      <div>
      {
        <div>
        <p>title</p>
        <h2>{value[this.props.match.params.id].title}</h2>
        <p>category</p>
        <h2>{value[this.props.match.params.id].type}</h2>
        <p>link</p>
        <a target='_blank' href={value[this.props.match.params.id].link}>{value[this.props.match.params.id].link}</a>

        </div>
      }
    </div>
    );
  }
}
