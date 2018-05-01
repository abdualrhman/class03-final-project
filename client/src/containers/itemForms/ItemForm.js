import React, { Component } from 'react';


 export default class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state={
      categoryValue : 'Webdesign',
      difficultyValue : 'Intermediate',
      linkValue : '',
      titleValue : '',
      textareaValue : '',
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
      textareaValue : event.target.value
    })
  }
  submitFunc(event){
    console.log('state: ', this.state)
    fetch('/form', {
      method : "POST",
      body : this.state,
      headers: new Headers({
    		'Content-Type': 'application/json'
  		})
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitFunc}>
        {/* the Category selection */}
          <label>Category<br/>
            <select
              value={this.state.value}
              onChange={this.categoryFunc}
            >
              <option value="Webdesign">Webdesign</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Database">Database</option>
              <option value="Architecture">Architecture</option>
            </select>
          </label>
          <br/>

          {/* the difficulty selection */}
          <label>difficulty<br/>
            <select
              value={this.state.value}
              onChange={this.difficultyFunc}
            >
              <option value="easy">Easy</option>
              <option value="intermediate">Intermediate</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          {/* the link input */}
          <br/>
          <label>Link: <input type='text' onChange={this.linkFunc}/></label>

          {/* the title input */}
          <br/>
          <label>title:
            <input type='text'
              onChange={this.titleFunc}/>
          </label>

          <br/>
          <label>Description:
          <textarea
            rows="4"
            cols="50"
            placeholder="Describe what you are linking to and why the link is worth visiting."
            onChange={this.textareaFunc}
          >
          </textarea>
          </label>

          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
