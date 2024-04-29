import React from "react";

import '../Styles/ComponentsStyles/Contact.css';
import Image from '../Image/hero_img.png'
const Contact =()=>{
    return(
        <>
        <div style={{backgroundColor:'#044944'}}>
        <h3 className="contact-title">Contact Me</h3>
            <div className="container contact">
                <div className="contact-part">
                    <div className="contact-form">
                        <form>
                            <div className="contact-form-up">
                                <div className="conatct-form-name">
                                    <input type="text" placeholder="Name*" />
                                </div>
                                <div className="contact-form-phone">
                                    <input type="number" placeholder="Phone*" />
                                </div>
                            </div>
                            <div className="contact-form-email">
                                <input type="email" placeholder="Email*" />
                            </div>
                            <div className="contact-form-subject">
                                <input type="email" placeholder="Subject*" />
                            </div>
                            <div className="contact-form-content">
                                <textarea  placeholder="Text Message*"/>
                            </div>
                            <button>SEND MESSAGE</button>
                        </form>
                    </div>
                    <div className="contact-img">
                        <img src={Image} alt="image" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;