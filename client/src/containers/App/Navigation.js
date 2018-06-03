import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../styles/index.css';




const Navigation = () =>{
    return(
        <div>
            <span> 
                <nav className='navbar-inverse bg-inverse mb-4'> {/* navbar */}
                    <Link to='/' className="navbar-brand"> HackYourFuture</Link>
                <span>
                    <button className='btn-navBar'>< NavLink to='/' > Categories</ NavLink></button>
                    <button className='btn-navBar'>< NavLink to='/form' > Add Content</ NavLink></button>
                    <button className='btn-navBar'>< NavLink to='/' > About</ NavLink></button>
                </span>
                </nav>
            </span>
        </div>
    );
};

export default Navigation;