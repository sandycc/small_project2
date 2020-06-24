import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">cilsy</Link>
                    
                    <ul className="right">
                        <li><Link to="/cart"><i className="material-icons">user</i></Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping basket</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;