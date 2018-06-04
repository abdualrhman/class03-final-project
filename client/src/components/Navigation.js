import React from "react";
import { Link } from "react-router-dom";

export default const Navigation = () =>{
    return(
        <div>
        <nav className='navbar navbar-inverse bg-inverse mb-4'>
            <Link to='/' className="navbar-brand"> HackYourFuture </Link>
        </nav>
        </div>
    );
};
