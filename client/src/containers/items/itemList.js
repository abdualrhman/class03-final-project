import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class ItemList_ extends Component {
  constructor(props){
    super(props)
    this.state={
      initValue:null,
      newValue:null
    }
    this.fetchData=this.fetchData.bind(this)
    this.typeFilter=this.typeFilter.bind(this)
    this.categoryFilter=this.categoryFilter.bind(this)
    this.difficultyFilter=this.difficultyFilter.bind(this)
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
        initValue : data,
        newValue:data
      },()=>{console.log(me.state.initValue)})
    })
    .catch(console.log)
  }


  typeFilter(event){
    const {newValue, initValue}=this.state;
    const filtering = initValue.filter(a=>{ return a.type === event.target.value})
    console.log(event.target.value)

    event.target.value==="all types"? this.setState({newValue : this.state.initValue}) :

    this.setState({newValue : filtering})
  }

  categoryFilter(event){
    const {newValue, initValue}=this.state;
    const filtering = initValue.filter(a=>{ return a.category === event.target.value})
    console.log(event.target.value)

    event.target.value==="all categories"? this.setState({newValue : this.state.initValue}) :

    this.setState({newValue : filtering})
  }

  difficultyFilter(event){
    const {newValue, initValue}=this.state;
    const filtering = initValue.filter(a=>{ return a.difficulty === event.target.value})
    console.log(event.target.value)

    event.target.value==="all levels"? this.setState({newValue : this.state.initValue}) :

    this.setState({newValue : filtering})
  }



  render() {
    const {newValue, initValue} = this.state;
    //const bla =this.props.match.params.id
    return (
      <div>
      <Link to='/'>
      <input type='button' value='add content'/>
      </Link>

      <select
        onChange={this.typeFilter}
      >
        <option value="all types">All types</option>
        <option value="article">Article</option>
        <option value="video">Video</option>
      </select>
      <select
        onChange={this.categoryFilter}
      >
        <option value="all categories">All categories</option>
        <option value="Webdesign">Webdesign</option>
        <option value="NodeJS">NodeJS</option>
        <option value="Database">Database</option>
        <option value="Architecture">Architecture</option>
      </select>

      <select
        onChange={this.difficultyFilter}
      >
        <option value="all levels">All levels</option>
        <option value="easy">Easy</option>
        <option value="intermediate">Intermediate</option>
        <option value="hard">Hard</option>
      </select>


      {
        initValue &&
        <div className='list'>
              {
                newValue.map(a=>{
                  const index = newValue.indexOf(a)
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
