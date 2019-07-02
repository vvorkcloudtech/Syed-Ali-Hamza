import React, { Component } from "react";
class Projects extends Component {
  render() {
    
    return (
    <div className="projects">
      <h2 className="m5-5 mb-3 text-center" >Projects</h2>
      <p className="text-center pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, id!</p>
        <div className="container pt-5">
            <div className="row">
           
      

            <img src="./images/QOL-LABS-400x284.jpg" className="col-md-6" alt=""/>
        <img src="./images/qic.png" className="col-md-6" alt=""/>
        
        </div>
        <div className="row mb-5">
        <img src="./images/estad-1.jpg" className="col-md-3" alt=""/>
        <img src="./images/ixentech-1-300x213.jpg" className="col-md-3" alt=""/>
        
        
        
        <img src="./images/ixentech-1-300x213.jpg" className="col-md-3" alt=""/>
        <img src="./images/move-1.jpg" className="col-md-3 overlay" alt=""/>
        </div>
        <button className="btn btn-primary btn-lg offset-md-5 my-5">Know More</button>
        </div>
       


    </div>
    );
  }
}
export default Projects;
