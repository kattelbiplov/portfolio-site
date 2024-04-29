import React from "react";
import Navbar from '../Components/Navbar';
import ArticleImg from '../Image/article2.jpeg'
import '../Styles/PagesStyles/Article.css'
const Article  = () =>{
    return(
        <>
        <Navbar />
        <div className="article-part">
           <div className="article-left">
            <div className="article-left-img">
                <img src={ArticleImg} alt="article-img" />
            </div>
            <div className="article-left-title">
                <h2>How will you know success when it</h2>
            </div>
            <div className="article-left-author">
                <ul>
                    <li>04 September , 2023</li>
                    <li>Diwakar Joshi</li>
                    <li>10 Views</li>
                </ul>
            </div>
            <div className="article-left-content">
                <p>Our offices are located on the traditional, unced. photo booth stumptown to banksy, elit small batch freegan… How to Attain Process Automation Satisfaction. Naturally, the appeal of Robot for its market potential cannot fade away anytime soon, at least until another great technology can replace mobile ashadul. But surprisingly, only a handful of ashadul in every niche really become successful and only a handful of ashadul across all niches really & make it a phenomenal success. So, what about the failure of other ashadul? What are the key factors responsible for the failure of millions of ashadul? Well, apart from the ill-conceived app idea and development and design flaws many ashadul simply fail because of their pre-launch and post-launch shortcomings.</p>
            </div>
           </div>
           <div className="article-right">
            <div className="article-right-recent">
                <h3>Recent Posts</h3>
                
            </div>
           </div>
        </div>
        </>
    );
}

export default Article;