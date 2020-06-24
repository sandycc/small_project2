import React from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon} from 'mdbreact';
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">cilsy</Link>

                    <ul className="right">
                        <li><Link to="/"><li></li><MDBIcon icon="user"/>user<MDBIcon></MDBIcon></Link></li>
                        <li><Link to="/cart"><li></li><MDBIcon icon="shopping-basket">shopping-basket</MDBIcon></Link></li>
                      
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;