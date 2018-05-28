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
    this.submitFunc=this.submitFunc.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
  }
  // this function the forms input changes
  changeHandler(event){
    const {name, value}=event.target;
    this.setState({
      [name] : value
    },()=>{console.log([name]+' :'+value)})
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
              categoryHandler={this.changeHandler}
              difficultyHandler={this.changeHandler}
              linkHandler={this.changeHandler}
              titleHandler={this.changeHandler}
              descriptionHandler={this.changeHandler}
              typeHandler={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}
