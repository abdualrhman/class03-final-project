import React, { Component } from 'react';
import '../styles/index.css';



 export default class HomePage extends Component {
   clickHandler(e){
      window.location.href = '/categories'
   }
  render() {
    return (
      <div>
      <div className='image-container'>
        <div className='img-content'>
          <p className='img-text'>Discover the most usefull centent in the web development community</p>
          <button className='btn btn-warning' onClick={this.clickHandler}>view categories</button>
        </div>
      </div>
      <footer className='footer'>
        <div  className='footer-txt'>
        <p>Final Project for Class03 made by</p>
        </div>
        <div className='personal-img'>
        <div className='person'>
        <img src='https://media.licdn.com/dms/image/C4E03AQHKHn3QMGkbUw/profile-displayphoto-shrink_800_800/0?e=1544659200&v=beta&t=ucX_dt-C-OintZTCqqCZQ1onRqSdz5xwASO44DsDg7M' className="rounded-circle" alt=""/>
        <div className='personal-details'><div className='personal-name'>Mohamed Aldahoul</div>
        <div>
        <a href='https://www.linkedin.com/in/mohamedaldahoul/'><i className="fab fa-linkedin"></i></a>
        <a href='https://github.com/mohamedaldahoul'><i className="fab fa-github"></i></a>
        </div>
        </div>
        </div>

          <div className='person'>
          <img src='https://media.licdn.com/dms/image/C4E03AQEDG6sUrHePCg/profile-displayphoto-shrink_200_200/0?e=1544659200&v=beta&t=dmxiQaBsfiH3P8-xu2LVa_ltH1XkuV5rqEiduusz8TI' alt="" className="rounded-circle"/>
          <div className='personal-details'><div className='personal-name'>Abdulrahman Ramadan </div>
          <div>
          <a href='https://www.linkedin.com/in/ramadan46/'>
          <i className="fab fa-linkedin"></i></a>
          <a href='https://github.com/abdualrhman'><i className="fab fa-github"></i></a>
          </div>
          </div>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}
