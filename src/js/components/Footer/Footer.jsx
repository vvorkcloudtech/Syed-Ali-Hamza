import React, { Component } from "react";
class Footer extends Component {
  render() {
    
    return (
    <div>
        <div className="row bg-primary">
            <div className="container my-5">
                <div className="col-md-3">
                    <h3>CONTACT US</h3>
                    <p>1 St Giles High St<br/>
London WC2H<br/>
8AG UK</p>
<strong>Phone: +44 203 695 1157</strong>
                </div>
                <div className="col-md-9">
<h3>ABOUT</h3>
<p>Founded in 2008, Independent Investors is one of the UK’s trusted investment firms. Their financial team consists of 40 trusted associates, with a cumulative 250 years experience trading investments and managing portfolios for their vibrant clientele. Their services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.</p>
                </div>
            </div>
        </div>
        <div className="row bg-info text-white d-flex justify-content-center align-items-center p-3">
            <p className="h4">© 2019 Independent Investors. All Rights Reserved.</p>
        </div>
    </div>
    );
  }
}
export default Footer;
