import React from "react";
import '../Styles/ComponentsStyles/ArticleComponent.css';
import ArticleImg1 from '../Image/article1.jpeg';
import ArticleImg2 from '../Image/article2.jpeg';
import ArticleImg3 from '../Image/article-3.jpeg';

const articles = [
    {
        image: ArticleImg1,
        title: "His word isn’t good’: Bri don’t trust senators",
        content: "Our offices are located on the traditional, unced. photo booth stumptown to banksy, elit small",
        link: "Read More"
    },
    {
        image: ArticleImg2,
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "Read More"
    },
    {
        image: ArticleImg3,
        title: "Another Article",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "Read More"
    }
];

const ArticleComponent = () => {
    return (
        <div style={{backgroundColor:'#044944', paddingTop:'6rem'}}>
            <h3 style={{textAlign:'center', color:'white', fontFamily: 'Rubik, sans-serif', fontWeight:'700', fontSize:'40px', paddingBottom:'3rem'}}>My Latest Article</h3>
        <div className="container article">
            {articles.map((item, index) => (
                <div className="article-section" key={index}>
                    <div className="article-box">
                        <div className="article-img">
                            <img src={item.image} alt="article" />
                        </div>
                        <div className="article-title">
                            <h5>{item.title}</h5>
                        </div>
                        <div className="article-content">
                            <p>{item.content}</p>
                        </div>
                        <div className="article-link">
                            <p>{item.link}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ArticleComponent;
