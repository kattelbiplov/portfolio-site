import React from "react";
import Navbar from "../Components/Navbar";
import Banner from '../Components/Banner'
import Services from "../Components/Services";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";
import Testimonial from "../Components/Testimonial";
import Story from "../Components/Story";
import ArticleComponent from "../Components/ArticleComponent";
import Contact from "../Components/Contact";
import Footer from '../Components/Footer'
const Home =()=>{
    return(
        <>
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Newsletter />
        <Story />
        <ArticleComponent />
        <Testimonial />
        <Contact />
        <Footer />
        </>
    );
}

export default Home;