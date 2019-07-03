import React, { Component } from "react";
import Nav from "../Nav/nav";
import Header from "../Header/header";
import About from "../About/about";
import Investment from "../Investment/Investmment";
import Services from "../Services/Services";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
class Home extends Component {
  render() {
    return (
    <div>
        <Nav />
         <Header />
        <About />
        <Services />
        <Investment />
        <Clients />
        <Contact />
        <Footer />
    </div>
    );
  }
}
export default Home;
