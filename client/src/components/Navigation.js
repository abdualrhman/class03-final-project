import React from "react";
import '../styles/index.css'


 export default class Navigation extends React.Component{

   constructor(props){
     super(props)
     const newPath = window.location.pathname.substr(1);
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
        {console.log(window.location.pathname.substr(1))}
        <div className="navbar  brand">
        <ul className='nav-list' >
        <a href='/' className={this.state.class=== '' ? 'active nav-item' : 'nav-item'} onClick={this.clickHandler} name='home'>home</a>
        <a href='/categories' className={this.state.class=== 'categories' ? 'active nav-item' : 'nav-item'}  onClick={this.clickHandler} name='categories'>categories</a>
        <a href='/add-contents' className={this.state.class=== 'add-contents' ? 'active nav-item' : 'nav-item'}  onClick={this.clickHandler} name='add-contents'>add contents</a>
        </ul>
        </div>
        </div>
    );
  }
};
