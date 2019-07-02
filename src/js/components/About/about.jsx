import React, { Component } from "react";
class About extends Component {
  render() {
    $(document).ready(function(){
      $(".nav-tabs a").click(function(){
        $(this).tab('show');
      });
    });
    return (
    <div className="about mb-5">
      <div className="col-md-12">
        <h3 className="text-center pt-5 pb-3">Get Your Organization 'Digital Ready'</h3>
        <p className="text-center offset-md-1 col-md-10 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis, nisi illo aliquid numquam architecto neque impedit optio deleniti quis soluta, at, totam praesentium! Hic at voluptas commodi, eius praesentium dicta corrupti ratione. Suscipit velit laudantium unde officiis quidem, deleniti incidunt? Nihil molestias rem voluptate eius libero! Itaque, aliquam atque!</p>
        </div>
        <h3 className="text-center">What We Do</h3>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, at Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div className="container mt-5 mb-5">
  
  {/* <!-- Nav tabs --> */}
  <ul className="nav nav-tabs text-center">
    <li className="nav-item col">
      <a className="nav-link bg-primary p-5 active" href="#home"><i className="fas fa-bullhorn" style={{fontSize:"30px"}}></i><p>Web Presence Solution</p></a>
    </li>
    <li className="nav-item col">
      <a className="nav-link bg-primary p-5" href="#menu1"><i className="fas fa-laptop" style={{fontSize:"30px"}}></i><p>Web &amp; Mobile App Development</p></a>
    </li>
    <li className="nav-item col">
      <a className="nav-link bg-primary p-5" href="#menu2"><i className="fas fa-rocket" style={{fontSize:"30px"}}></i><p> Managed IT Solutions</p></a>
    </li>
  </ul>

  {/* <!-- Tab panes --> */}
  <div className="tab-content mb-5">
    <div id="home" className="text-center container tab-pane active"><br/>
      <h3>Web Presence Solutions</h3>
      <p className="px-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima esse itaque alias possimus veniam. Velit dolore dolorum, repudiandae culpa est, minus enim praesentium illo provident quia dolorem veritatis commodi illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab non vel reprehenderit sequi ullam nemo blanditiis veniam mollitia cum?</p>
      <div className="d-flex">
      <div className="icon col">
      <i className="fas fa-rss text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Website Design</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">SEO</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Internet Marketing</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Marketing Automation</p>
      </div>
      </div>
    </div>
    <div id="menu1" className="container tab-pane fade text-center"><br/>
    <h3>Web &amp; Mobile App Development</h3>
      <p className="px-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima esse itaque alias possimus veniam. Velit dolore dolorum, repudiandae culpa est, minus enim praesentium illo provident quia dolorem veritatis commodi illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab non vel reprehenderit sequi ullam nemo blanditiis veniam mollitia cum?</p>
      <div className="d-flex">
      <div className="icon col">
      <i className="fas fa-rss text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Website Design</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">SEO</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Internet Marketing</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Marketing Automation</p>
      </div>
      </div>
    </div>
    <div id="menu2" className="container tab-pane fade text-center"><br/>
    <h3>Managed IT Solutions</h3>
      <p className="px-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima esse itaque alias possimus veniam. Velit dolore dolorum, repudiandae culpa est, minus enim praesentium illo provident quia dolorem veritatis commodi illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab non vel reprehenderit sequi ullam nemo blanditiis veniam mollitia cum?</p>
      <div className="d-flex">
      <div className="icon col">
      <i className="fas fa-rss text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Website Design</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">SEO</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Internet Marketing</p>
      </div>
      <div className="icon col">
      <i className="fas fa-bullhorn text-primary my-5" style={{fontSize:"30px"}}></i>
      <p className="h4">Marketing Automation</p>
      </div>
      </div>
    </div>
  </div>
</div>








    </div>
    );
  }
}
export default About;
