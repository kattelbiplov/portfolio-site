import React from "react";
import Image from '../Image/about-me.png';
import '../Styles/ComponentsStyles/Story.css'

const Story = () => {

    const items = [
        'Psychologist - Supervise and groom the CPSW under the project to ensure the quality project delivery.',
        'Psycho Social Counselor - PFA Orientation and Mobilize in field for PSS support in Community',
        'Psycho Social Counselor - Provide Counseling service to 75 household ( Adolescents and parents from those 75 household) in accordance to Consultancy for mental health counseling for a study on mental health of school going children in Nepal" signed with World Bank by CMC- Nepal',
        'Psychologist - Support to develop IEC material and radio PSA as per program need',
        'Psychologist - Provide referral support to women living several mental health conditions and psychosocial disability for treatment and cure.',
        'Community Mediator - Empower women children and youth to contribute socio economic development.'
    ];

    const dates = [
        '28th June 2023 to December 2023',
        '16th August 2022 to 5th December 2022',
        '5th February 2022 to 5 June 2022',
        '11th July 2021 to 31st December 2021',
        '1st September 2020 to 15th February 2021',
        '29th may 2012 to august 2015'
    ];

    return (
        <>
            <div style={{backgroundColor:'#044944'}}>
                <div className="container story">
                    <div className="story-left">
                        <p style={{color:'#FFDE00', fontSize:'28px'}}>My story</p>
                        <h3>Some History of My Life,<br /> 1980 - 2019</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi labore et dolore.</p>
                        <ul>
                            <li><img src={Image} alt="about me" /></li>
                            <li>
                                Date of Birth <br />
                                <span>29, March 2001</span>
                            </li>
                        </ul>
                    </div>
                    <div className="story-right">
                        <div>
                            {items.map((item, index) => ( // Removed the 'date' parameter from map function
                                <div key={index}>
                                    <span style={{ marginRight: '10px', color:'white', fontWeight:'bold' }}>{dates[index]}</span> <br /> {/* Displaying the date */}
                                    <span style={{color:'#AFB4B9', fontSize:'18px', padding:'0px 0px 22px 0px'}}>{item}</span> {/* Description */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Story;
