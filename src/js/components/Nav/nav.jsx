import React, { Component } from "react";
class Nav extends Component {
  render() {
    return (
    <div>

        <div className="col-md-12 d-flex bg-primary align-items-center pt-3">
         <p className="offset-md-1">  ++1 (888) 394-0048 (USA)</p> <p className="">++1 (888) 394-0048 (USA)</p><p className="pl-3">++1 (888) 394-0048 (USA)</p><p  className="pl-3">info@carmatec.com</p><p className="offset-md-4">Blog</p>
        </div>


        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top py-3 pt-5">
          
            <a href="#" className="offset-md-1"> 
            <img className="logo" src="./images/logo.png" alt=""/>
            </a>
            <button className="navbar-toggler" data-target="#mainNav" data-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse-md navbar-collapse" id="mainNav">
                <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </a>
        <div className="dropdown-menu py-3 pr-5 pl-2" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Company</a>
          <a className="dropdown-item" href="#">Mission, Vission &amp; Values </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Clients</a>
          <a className="dropdown-item" href="#">Our Team</a>
          <a className="dropdown-item" href="#">Career</a>
        </div>
      </li>
      

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Smart Web
        </a>
        <div className="dropdown-menu py-3 pr-5 pl-2" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Company</a>
          <a className="dropdown-item" href="#">Mission, Vission &amp; Values </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Clients</a>
          <a className="dropdown-item" href="#">Our Team</a>
          <a className="dropdown-item" href="#">Career</a>
        </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Web &amp; Mobile
        </a>
        <div className="dropdown-menu py-3 pr-5 pl-2" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Company</a>
          <a className="dropdown-item" href="#">Mission, Vission &amp; Values </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Clients</a>
          <a className="dropdown-item" href="#">Our Team</a>
          <a className="dropdown-item" href="#">Career</a>
        </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cloud IT
        </a>
        <div className="dropdown-menu py-3 pr-5 pl-2" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Company</a>
          <a className="dropdown-item" href="#">Mission, Vission &amp; Values </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Clients</a>
          <a className="dropdown-item" href="#">Our Team</a>
          <a className="dropdown-item" href="#">Career</a>
        </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Bizz Solutions    
        </a>
        <div className="dropdown-menu py-3 pr-5 pl-2" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Company</a>
          <a className="dropdown-item" href="#">Mission, Vission &amp; Values </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Clients</a>
          <a className="dropdown-item" href="#">Our Team</a>
          <a className="dropdown-item" href="#">Career</a>
        </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Work
        </a>
        <div className="dropdown-menu py-3 pr-5 pl-2" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Company</a>
          <a className="dropdown-item" href="#">Mission, Vission &amp; Values </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Clients</a>
          <a className="dropdown-item" href="#">Our Team</a>
          <a className="dropdown-item" href="#">Career</a>
          {/* jsdjsajkd */}
        </div>
      </li>
      <li>
      <button className="btn btn-primary btn-sm ml-5 mt-2"> Contact Us</button>
      </li>
                </ul>
            </div>

        </nav>
        
      
    </div>
    );
  }
}
export default Nav;
