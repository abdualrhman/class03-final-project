import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/index.css';



 export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='bla'><img src='https://media.licdn.com/dms/image/C4E03AQHKHn3QMGkbUw/profile-displayphoto-shrink_800_800/0?e=1534377600&v=beta&t=lC1kZnIbDiyP9Nq7JhIic-9Y0dq64TBea2yNAE53SpM' className="rounded-circle"/>
        <br/>
         <p>Mohamed Aldahoul</p>
        <a href='https://www.linkedin.com/in/mohamedaldahoul/'><i class="fab fa-linkedin"></i></a>
        <a href='https://github.com/mohamedaldahoul'><i class="fab fa-github"></i></a>


        </div>
        <div className='bla'><img src='https://media.licdn.com/dms/image/C4E03AQEDG6sUrHePCg/profile-displayphoto-shrink_100_100/0?e=1534377600&v=beta&t=invu6PTBfvBJfsSIHxaL8Y7jurNiJRZp86aNB8RzNgc' className="rounded-circle"/>
        <br/>
        <p>Abdulrahman Ramadan</p>
        <a href='https://www.linkedin.com/in/ramadan46/'><i class="fab fa-linkedin"></i></a>
        <a href='https://github.com/abdualrhman'><i class="fab fa-github"></i></a>
        </div>

      </div>
    );
  }
}
