import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from  "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

const App = () =>{
  return (
    <main className=" text-gray-100 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  )
}

export default App;
