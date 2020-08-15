import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
 
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const NavBar = () =>{   
    return(
        <>

        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg-white mb-5">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">KumarTechnical</NavLink>
 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link active" to="/" aria-current="page" >Home</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link active" to="/about" aria-current="page" >About</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link active" to="/services" aria-current="page" >Services</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link active" to="/Aboutme" aria-current="page" >About Me</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link active" to="/contact" aria-current="page" >Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>




                </div>   
            </div>
        </div>

        </>
    )
}


export default NavBar;