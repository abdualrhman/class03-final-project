import React, { Component } from 'react';
import ItemForm from '../../components/items/itemForm.js'
import ItemList from '../../components/items/itemList.js'

import '../../styles/index.css'


 export default class ItemManeger extends Component {
  constructor(props){
    super(props)
    this.state={
      listValue : null,
      categoryValue : 'Webdesign',
      difficultyValue : 'Intermediate',
      linkValue : '',
      titleValue : '',
      descriptionValue : '',
    }
    this.categoryFunc =this.categoryFunc.bind(this)
    this.difficultyFunc =this.difficultyFunc.bind(this)
    this.linkFunc=this.linkFunc.bind(this)
    this.submitFunc=this.submitFunc.bind(this)
    this.titleFunc=this.titleFunc.bind(this)
    this.textareaFunc=this.textareaFunc.bind(this)

  }

  categoryFunc(event){
    this.setState({
      categoryValue : event.target.value
    })
    console.log('category: ',this.state.categoryValue)
  }
  difficultyFunc(event){
    this.setState({
      difficultyValue : event.target.value
    })
    console.log('difficulty: ',this.state.difficultyValue)
  }
  linkFunc(event){
    this.setState({
      linkValue : event.target.value
    })
  }
  titleFunc(event){
    this.setState({
      titleValue : event.target.value
    })
  }
  textareaFunc(event){
    this.setState({
      descriptionValue : event.target.value
    }, ()=>{console.log(this.state.descriptionValue)})
  }
  submitFunc(event){
    console.log('state: ', this.state)
    fetch('/form', {
      method : "POST",
      body : JSON.stringify(this.state),
      headers: new Headers({
    		'Content-Type': 'application/json'
  		})
    })
    event.preventDefault();
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
        listValue : data
      },()=>{console.log(me.state.listValue)})
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <div className="Form">
          <ItemForm
              submitHandler={this.submitFunc}
              categoryHandler={this.categoryFunc}
              difficultyHandler={this.difficultyFunc}
              linkHandler={this.linkFunc}
              titleHandler={this.titleFunc}
              descriptionHandler={this.textareaFunc}
          />
        </div>
        <ItemList value={this.state.listValue}/>
      </div>
    );
  }
}
// this.state.value && this.state.value[0].name
