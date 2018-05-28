import React, { Component } from 'react';
import ItemForm from '../../components/items/itemForm.js';
import '../../styles/index.css';
import CategoryManeger from '../categories.js';

 export default class ItemManeger extends Component {
  constructor(props){
    super(props)
    this.state={
      listValue : null,
      category : 1,
      difficulty : 1,
      type : 1,
      link : '',
      title : '',
      description : '',
    }
    //binding the functions
    this.categoryFunc =this.categoryFunc.bind(this)
    this.difficultyFunc =this.difficultyFunc.bind(this)
    this.linkFunc=this.linkFunc.bind(this)
    this.submitFunc=this.submitFunc.bind(this)
    this.titleFunc=this.titleFunc.bind(this)
    this.descriptionFunc=this.descriptionFunc.bind(this)
    this.typeFunc=this.typeFunc.bind(this)
  }
  // this function changes the states categoty's value
  categoryFunc(event){
    this.setState({
      category : event.target.value
    })
    console.log('category: ',this.state.category)
  }
  // this function changes the states fifficulty's value
  difficultyFunc(event){
    this.setState({
      difficultyValue : event.target.value
    })
    console.log('difficulty: ',this.state.difficultyValue)
  }
  // this function changes the states type's value
  typeFunc(event){
    console.log(event.target.name)
    this.setState({
      type : event.target.value
    })
    console.log('difficulty: ',this.state.type)
  }
  // this function changes the states link's value

  linkFunc(event){
    this.setState({
      link : event.target.value
    })
  }
  // this function changes the states title's value

  titleFunc(event){
    this.setState({
      title : event.target.value
    })
  }
  // this function changes the states discreption's value

  descriptionFunc(event){
    console.log(event.target.name)
    this.setState({
      description : event.target.value
    })
  }
  // this function submits value in database
  submitFunc(event){
    console.log('state: ', this.state)
      return   fetch('/form', {
        method : "POST",
        body : JSON.stringify(this.state),
        headers: new Headers({
      		'Content-Type': 'application/json'
    		})
      })
      event.preventDefault();
  }
  //rendering the data after mounting
  componentDidMount(){
    this.fetchData()
  }
  //getting the data from the database
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
        listValue : data
      },()=>{console.log(me.state.listValue)})
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <div>
          <ItemForm
              submitHandler={this.submitFunc}
              categoryHandler={this.categoryFunc}
              difficultyHandler={this.difficultyFunc}
              linkHandler={this.linkFunc}
              titleHandler={this.titleFunc}
              descriptionHandler={this.descriptionFunc}
              typeHandler={this.typeFunc}
          />
        </div>
      </div>
    );
  }
}
