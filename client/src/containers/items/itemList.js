import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Rating from '../../components/rateButton/rating.js';
import Selectbutton from '../../components/items/selectButton.js';

export default class ItemList extends Component {
  constructor(props){
    super(props)
    this.state={
      value:null,
      url :`/list?${this.props.location.search}`,
    }
    //binding the functions
    this.fetchData=this.fetchData.bind(this)
    this.rateUpFunc=this.rateUpFunc.bind(this)
    this.rateDownFunc=this.rateDownFunc.bind(this)
    this.patchData=this.patchData.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
  }
  //rendering the data after mounting
  componentDidMount(){
   this.fetchData()
  }
  //getting the data from the database
  fetchData(){
    const me =this;
    fetch(this.state.url, {
    method : 'get'
    })
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      me.setState({
        value : data
      },()=>{console.log(me.state.value)})
    })
    .catch(console.log)
  }
  // the rate up function
  rateUpFunc(index){
     const {value} = this.state;
     const item = value[index]
     const plusItem= ++item.rate_up
     const newItem={...item, rate_up: plusItem};
     const newList =[...value]
     newList[index].rate_up=plusItem
     console.log(newList)
     this.patchData(newItem, newList)
  }
  // the rate down function
  rateDownFunc(index){
    const {value} = this.state;
    const item = value[index]
    const plusItem= ++item.rate_down
    const newItem={...item, rate_down: plusItem};
    const newList =[...value]
    newList[index].rate_down=plusItem
     this.patchData(newItem, newList)
  }
  // this function updates the data in the database
  patchData(val, newList){
    fetch('/patch', {
      method : 'PATCH',
      body : JSON.stringify(val),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(()=>{
      const me =this;
      me.setState({value:newList},()=>console.log(this.state.value))
    })
    .catch(console.log)
  }
  changeHandler(e){
    if(this.state.value){
      const params=new URLSearchParams(this.props.location.search)
      params.set('type', e.target.value)
      console.log(params.toString())
      this.setState({
        url :params.toString()
      })

    }
    //return window.location.reload()
  }
  render() {
    const { value} = this.state;
    return (
      <div className='list-container '>
      {console.log(this.props.location.search)}
      {console.log(value)}
      {console.log(this.state.url)}
      {
     //if the value in state is null, we don't render anything
      value && value.length &&
      <div>
      <div>
      <label>Type<br/>
        <select
          onChange={this.changeHandler}
        >
           <option value='1'>article</option>
           <option value='2'>video</option>
           <option value='3'>other</option>
        </select>
      </label>
      </div>
            {
              value.map(a=>{
                const index = value.indexOf(a) ;
                const indexPlusOne = value.indexOf(a)+1;
                return (
                <div
                 key={index} className='listItems'>
                    <div className='item-content'>
                      <div className='bla'>
                      <Link to={`/item/${a.id}`}>
                        <h3 className='link'><b>{a.title}</b></h3>
                        <p className='link'>{a.link}</p>
                      </Link>
                      </div>
                      {/*the rate component*/}
                        <Rating
                         rate_up={a.rate_up}
                         rate_down={a.rate_down}
                         rateUpHandler={this.rateUpFunc}
                         rateDownHandler={this.rateDownFunc}
                         index={index}
                        />
                    </div>
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


//<button onClick={this.buttonFunc}>click me</button>
