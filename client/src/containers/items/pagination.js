import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default class PaginationComp extends Component {
  constructor(props){
    super(props)
    this.state={
      value: null,
      limit: null,
      offset:null,
      count: null,
      activePage: 1,
      pageCount : 1,
      url:this.props.url,
      done: false,
    }
    this.fetchData=this.fetchData.bind(this)
    this.handlePageClick=this.handlePageClick.bind(this)
  }

  componentDidMount(){
   this.fetchData()
  }
  fetchData(){
    const me =this;
    fetch(this.props.url, {
    method : 'GET'
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      me.setState({
        limit: data.limit,
        offset: data.offset,
        count: data.count,
        activePage: data.page,
        pageCount : data.count / data.limit,
        done: true
      },()=>{console.log(me.state.value)})
    })
    .catch(console.log)
  }
  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({offset: offset}, () => {
      this.fetchData();
    });
  };

  render() {
    const {value} = this.state;
    return (
      <div>
        {console.log(this.state)}
        <ReactPaginate
           previousLabel={"previous"}
           nextLabel={"next"}
           pageCount={this.state.pageCount}
           marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={this.handlePageClick}
           containerClassName={"pagination"}
           subContainerClassName={"pages pagination"}
           activeClassName={"active"}
        />
      </div>
    );
  }
}

// <ReactPaginate
//    previousLabel={"previous"}
//    nextLabel={"next"}
//    breakLabel={<a href="">...</a>}
//    breakClassName={"break-me"}
//    pageCount={this.state.pageCount}
//    marginPagesDisplayed={2}
//    pageRangeDisplayed={5}
//    onPageChange={this.handlePageClick}
//    containerClassName={"pagination"}
//    subContainerClassName={"pages pagination"}
//    activeClassName={"active"}
// />
