import React from "react";
import '../Styles/ComponentsStyles/Newsletter.css'
const Newsletter = () => {
    return (
        <>
            <div style={{ backgroundColor: '#05433E' }}>
                <div className="container">
                    <div className="newsletter">
                        <div className="newsletter-inner">
                            <div className="newsletter-text">
                                <h3>Newsletter</h3>
                            </div>
                            <div className="newsletter-input">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div className="newsletter-button">
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Newsletter