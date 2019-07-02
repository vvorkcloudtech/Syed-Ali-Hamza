import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
    <div className="header">

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active hImg">
      <img className="d-block w-100" src="./images/1.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item hImg">
      <img className="d-block w-100" src="./images/2.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item hImg">
      <img className="d-block w-100" src="./images/4.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        
      
    </div>
    );
  }
}
export default Header;
