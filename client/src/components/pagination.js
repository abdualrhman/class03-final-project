import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default class Pagination extends Component {
  render() {
    return (
      <div>
      <ReactPaginate previousLabel={"previous"}
                     nextLabel={"next"}
                     breakLabel={<a href="">...</a>}
                     breakClassName={"break-me"}
                     pageCount={this.props.pageCount}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={this.props.handlePageClick}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"} />
      </div>
    );
  }
}
