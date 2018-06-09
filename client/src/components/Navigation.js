import React from "react";
import { Link } from "react-router-dom";
import '../styles/index.css'


 export default class Navigation extends React.Component{

   constructor(props){
     const newPath = window.location.pathname.substr(1);
     super(props)
     this.state={
       class: newPath,
     }
     this.clickHandler=this.clickHandler.bind(this)
   }
   clickHandler(e){
     console.log(e.target.name)
     this.setState({
       class : e.target.name
     })
   }
  render(){
    return(
        <div>
        <div className="navbar  brand">
        <ul className='nav-list' >
        <Link to='/'><a className={this.state.class=== 'home' ? 'active nav-item' : 'nav-item'} onClick={this.clickHandler} name='home'>home</a></Link>
        <Link to='/categories'><a className={this.state.class=== 'categories' ? 'active nav-item' : 'nav-item'}  onClick={this.clickHandler} name='categories'>categories</a></Link>
        <Link to='/add-contents'><a className={this.state.class=== 'add-contents' ? 'active nav-item' : 'nav-item'}  onClick={this.clickHandler} name='add-contents'>add contents</a></Link>
        <Link to='/about'><a className={this.state.class=== 'about' ? 'active  nav-item' : 'nav-item'}  onClick={this.clickHandler} name='about'>about</a></Link>
        </ul>
        </div>
        </div>
    );
  }
};
