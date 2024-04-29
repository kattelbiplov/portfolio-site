import React from "react";
import '../Styles/ComponentsStyles/About.css'
import Image from '../Image/about-me.png'
import { TiTick } from "react-icons/ti";
import { MdMarkEmailUnread,MdLocalPhone,MdLocationPin,MdLaptop,MdFacebook } from "react-icons/md";
import { FaSquareInstagram,FaSquareTwitter, FaLinkedin } from "react-icons/fa6";

const About = () => {
    return (
        <>
        
        <div style={{backgroundColor:'#05433E', paddingBottom:'6rem'}}>
            <div className="container about">
                <div className="about-left">
                    <img src={Image} />
                </div>
                <div className="about-right">
                    <h2>About Me!</h2>
                    <h3>My Real Life is Up to You? I am a <span>Mental Health Counsellor</span></h3>
                    <p>Experienced psychologist and psycho-social counselor adept at providing counseling and support services to diverse populations. Skilled in project management, community engagement, and capacity building. </p>
                    <div className="about-right-list">
                        <ul>
                            <li><TiTick />Psychosocial Counseling and Therapy</li>
                            <li><TiTick />Capacity Building and Training</li>
                            <li><TiTick />Community Engagement and Advocacy</li>
                            <li><TiTick />Crisis Intervention and Disaster Response</li>
                           
                        </ul>
                    </div>
                    <button>Download CV</button>
                </div>
            </div>
            <div className="container about-down">
                <div className="about-down-inner">
                    <div className="about-down-inner-list">
                        <h2>CONTACT NOW</h2>
                        <p><MdMarkEmailUnread style={{color:'#FFDE00', fontSize:'20px'}}/> example@example.com</p>
                        <p><MdLocalPhone style={{color:'#FFDE00', fontSize:'20px'}}/> +012 345 678 910</p>
                    </div>
                    <div className="about-down-inner-list">
                        <h2>ADDRESS</h2>
                        <p><MdLocationPin style={{color:'#FFDE00', fontSize:'20px'}}/>Bharatpur, Chitwan Nepal</p>
                    </div>
                    <div className="about-down-inner-list">
                        <h2>SOCIAL MEDIA</h2>
                        <p><MdLaptop style={{color:'#FFDE00', fontSize:'20px'}}/> Also find us social media below</p>
                        <ul>
                            <li><MdFacebook /></li>
                            <li><FaSquareInstagram /></li>
                            <li><FaSquareTwitter /></li>
                            <li><FaLinkedin /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default About