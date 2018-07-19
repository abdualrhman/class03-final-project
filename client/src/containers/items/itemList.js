import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/rateButton/rating.js";
import '../../styles/loader.css';
import Loader from "../../components/loader.js"
import Pagination from '../../components/pagination.js'

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: null,
      type_id: 0,
      difficulty_id:0,
      offset: 0,
      limit : 10,
      page :1,
      loading : true,
      qurl: ``
    };
    this.fetchData = this.fetchData.bind(this);
    this.rateUpFunc = this.rateUpFunc.bind(this);
    this.rateDownFunc = this.rateDownFunc.bind(this);
    this.patchData = this.patchData.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
    this.handlePageClick=this.handlePageClick.bind(this);
  }
  //rendering the data after mounting
  componentDidMount() {
    this.fetchData()
  }
  //getting the data from the database
  fetchData() {
    const {difficulty_id, type_id} = this.state;
    const params = new URLSearchParams(this.props.location.search)
    let category = params.get('category_id');
    let qurl2 = `category_id=${category}&difficulty_id=${difficulty_id}&type_id=${type_id}&page=${this.state.page}&limit=${this.state.limit}`;
    if (this.state.difficulty_id <1){
       qurl2 = `category_id=${category}&type_id=${type_id}&page=${this.state.page}&limit=${this.state.limit}`
    }
    if (this.state.type_id <1){
       qurl2 = `category_id=${category}&difficulty_id=${difficulty_id}&page=${this.state.page}&limit=${this.state.limit}`
    }
    if (this.state.type_id <1 && this.state.difficulty_id <1){
       qurl2 = `category_id=${category}&page=${this.state.page}&limit=${this.state.limit}`
    }

    this.setState({
      qurl : qurl2
    },()=>{this.props.history.push({
        search: this.state.qurl
    })})
    const me = this;
        console.log('location: '+this.props.location.search)
        const url = `/list?${qurl2}`
       fetch(url, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        me.setState({itemList: data.items, loading : false, pageCount: Math.ceil(data.count / data.limit)});
      })
      .catch(console.log);
  }
  // the rate up function
  rateUpFunc(index) {
    const { itemList } = this.state;
    const item = itemList[index];
    const plusItem = ++item.rate_up;
    const newItem = { ...item, rate_up: plusItem};
    const newList = [...itemList];
    newList[index].rate_up = plusItem;
    this.patchData(newItem, newList);
  }
  // the rate down function
  rateDownFunc(index) {
    const { itemList } = this.state;
    const item = itemList[index];
    const plusItem = ++item.rate_down;
    const newItem = { ...item, rate_down: plusItem };
    const newList = [...itemList];
    newList[index].rate_down = plusItem;
    this.patchData(newItem, newList);
  }
  // this function updates the data in the database
  patchData(val, newList) {
    fetch("/patch", {
      method: "PATCH",
      body: JSON.stringify(val),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(() => {
        const me = this;
        me.setState({ itemList: newList });
      })
      .catch(console.log);
  }

  filterHandler(e) {
    const {name, value}=e.target;
    console.log(`${name}: ${value}`)

    this.setState({
      [name]: value
    },()=>{this.fetchData()})
  }

  handlePageClick(data){
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);
    this.setState({offset: offset, page: data.selected + 1}, () => {
      this.fetchData();
    });
  }
  render() {
    const { itemList } = this.state;
    return (
      <div className='div-container'>
        <div className='filter-container'>
          <label>
            Type<br />
            <select value={this.state.type_id} onChange={this.filterHandler} name='type_id'>
              <option value='0'>all</option>
              <option value="1">video</option>
              <option value="2">article</option>
              <option value="3">other</option>
              {console.log(`/list${this.props.location.search}&limit=${this.state.limit}&page=${this.state.page}`)}
              {console.log(this.state)}
            </select>
          </label>
          <label>
            difficulty<br />
            <select value={this.state.difficulty_id} onChange={this.filterHandler} name='difficulty_id'>
              <option value="0">all</option>
              <option value="1">Amateur</option>
              <option value="2">World Class</option>
              <option value="3">Legendary</option>
            </select>
          </label>
          <button>click me</button>
        </div>
          <div className="list-container ">
          {
            this.state.loading && <Loader/>
          }
            {//if the itemList in state is null, we don't render anything
            itemList &&
              (itemList.length) && !this.state.loading ?
              (
                <div className='content-container'>
                  {itemList.map(a => {
                    const index = itemList.indexOf(a);
                    return (
                      <div key={index}>

                        <div className="item-content">
                          <div className="bla">
                            <Link className='link' to={`/item/${a.id}`}>
                              <h3 className="link">
                                <b>{a.title}</b>
                              </h3>
                              <p className="link">{a.link}</p>
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
                    );
                  })}
                  <Pagination pageCount={this.state.pageCount} handlePageClick={this.handlePageClick}/>
                  {console.log(this.state)}
                  {console.log(this.props.location.search)}
                </div>
              )
              :
              !this.state.loading && <h1 style={{marginTop: '125px'}}>No items to show...</h1>
            }
            </div>
    </div>
    );
  }
}
