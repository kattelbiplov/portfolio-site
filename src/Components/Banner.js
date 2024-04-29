import React from "react";
import '../Styles/ComponentsStyles/Banner.css'
import Image from '../Image/hero_img.png'
export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Diwakar</span>{" "}
              <br />
              Joshi
            </h1>
            <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </div>
          <button className="btn">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src={Image} alt="Hero Section" />
        </div>
      </section>
    );
  }
  