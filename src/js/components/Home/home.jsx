import React, { Component } from "react";
import Nav from "../Nav/nav";
import Header from "../Header/header";
import About from "../About/about";
import Projects from "../Projects/project";
import Services from "../Services/Services";
import BlogPost from "../BlogPost/BlogPost";
import Awards from "../Awards//Awards";
class Home extends Component {
  render() {
    return (
    <div>
        <Nav />
        <Header />
        <About />
        <Projects />
        <Services />
        <BlogPost />
        <Awards />
    </div>
    );
  }
}
export default Home;
