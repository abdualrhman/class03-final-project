import React from "react";
import { Link,NavLink } from "react-router-dom";
import '../../styles/index.css';

const Navigation = () =>{
    return(
        <div>
            <span >
                <nav className='navbar-inverse bg-inverse mb-4'> {/* navbar */}
                    <Link to='/' className="navbar-brand"> HackYourFuture</Link>
                <span style={{marginLeft : '50%'}}>
                    <button style={{backgroundColor: 'rgba(225,225,225,0.1)', margin:'10px'}} className='btn btn-navBar'>< NavLink to='/categories' > Categories</ NavLink></button>
                    <button style={{backgroundColor: 'rgba(225,225,225,0.1)'}} className='btn btn-navBar'>< NavLink to='/' > Add Content</ NavLink></button>

                </span>
                </nav>
            </span>
        </div>
    );
};

export default Navigation;
