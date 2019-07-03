import React, { Component } from "react";
class Nav extends Component {
  render() {
    return (

       <div className="row container-fluid pt-5 mt5">
           <nav className="navbar navbar-expand-md navbar-light bg-light col-12 sticky-top">
            <a href="#" class="navbar-brand col-3 offset-md-1"> 
                <img src="./images/independent-investors-logo.png" alt=""/>
            </a>
            <button class="navbar-toggler" data-target="#mainNav" data-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse col-8" id="mainNav">
                <ul class="navbar-nav h4">
                    <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Testimonials</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">What We Offer</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
                    <li class="nav-item ml-5 pl-5"><button className="btn btn-primary px-5"><i class="fas fa-phone-alt text-white"></i>
                      +92383848</button></li>
                </ul>
            </div>

        </nav>

       </div>
    );
  }
}
export default Nav;
