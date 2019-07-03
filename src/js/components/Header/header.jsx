import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div>
    <div className="header">
      <div className="container">
      <div className="d-flex row">
        <div className="col-md-6">
        <div>
  <h4 className="text-primary pt-5 mt-5">HIGH-PERFORMANCE INVESTMENTS FROM UK’S TOP INVESTMENT COMPANY</h4>
      <h1 className="py-3 display-2 pb-4">Enjoy Up To 35% <br/>Yearly Returns</h1>
      </div>
       <div className="d-flex flex-column">
      <div className="d-flex mb-2">
      <i class="far fa-check-square text-success" style={{fontSize:"20px"}}></i>
      <p className="h4" style={{marginTop:"0px"}}><strong>Custom Portfolios:</strong> Flexible Investment Solutions</p>
      </div>
      <div className="d-flex mb-2">
      <i class="far fa-check-square text-success" style={{fontSize:"20px"}}></i>
      <p className="h4" style={{marginTop:"0px"}}><strong> Fully Managed::</strong> Personalized Services Available 24x7s</p>
      </div>
      <div className="d-flex mb-2">
      <i class="far fa-check-square text-success" style={{fontSize:"20px"}}></i>
      <p className="h4" style={{marginTop:"0px"}}><strong>Secure Returns:</strong>: Safe, Secure &amp; Consistent Interest Returns</p>
      </div>
      <div className="d-flex mb-2">
      <i class="far fa-check-square text-success" style={{fontSize:"20px"}}></i>
      <p className="h4" style={{marginTop:"0px"}}><strong>Fully Regulated:</strong>  FCA Regulated &amp; FSCS Covered Funds</p>
      </div>
      </div>
      </div>
      
      <div className="col-md-2">
        <img src="./images/offer-new.png" alt=""/>
      </div>
      <div className="col-md-4 row bg-white">
        <form action="" className="col-md-12">
          <h4 className="text-center pt-4">Achieve Your Financial Goals By Investing With Us Today!</h4>
          <p className="text-center pb-4 mb-4">Fill in the form to reach out to us and we will call you back in 24 hours.</p>
          <div className="d-flex">
            <div class="form-group col-md-6"> 
        <input class="form-control" type="text" placeholder="Name"/>
            </div>
            <div class="form-group">
                <input class="form-control" type="phone" placeholder="phone"/>
            </div>
            </div>
            <div class="form-group col-md-12">
                <input class="form-control" type="email" placeholder="Email Address"/>
            </div>
            
            <div class="form-group col-md-12">
            <select class="form-control" style={{ height:"30px"}}>
                <option className=""> Which relevant option are you interested in?</option>
                <option> Deposit &amp; Savings</option>
                <option> Bond Funds</option>
                <option> Equity Funds</option>
                <option> Fixed Rate Bonds</option>

                </select>
            </div>

            <div class="form-group col-md-12">
            <select class="form-control"  style={{ height:"30px"}}>
                <option className="active"> Investment Sum</option>
                <option> $5000 - 25000 </option>
                <option> $25000 - 50000</option>
                <option> 30000- 40000</option>

                </select>
            </div>
            
           
    
            <button class="btn btn-success d-block w-100 col-md-12"> Contact Us</button>
        </form>
      </div>
      </div>



      </div>
    </div>

    <div className="award row text-center mb-5 p-0 m-0">
      <div className="container">
        <div className="card-group">
        <div className="card col">
          <div className="card-body">
            <h1 className="text-primary display-1">35%</h1>
            <p className="text-muted h4">Maximum Yearly Returns</p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h1 className="text-primary display-1">35%</h1>
            <p className="text-muted h4">Capital Protections</p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h1 className="text-primary display-1">35%</h1>
            <p className="text-muted h4">Minimum Investment Capital </p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h1 className="text-primary display-1">35%</h1>
            <p className="text-muted h4">Maximum Coverage By FSCS</p>
          </div>
        </div>
        </div>

      </div>
    </div>

    </div>
    );
  }
}
export default Header;
