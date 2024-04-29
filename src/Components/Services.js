import React from 'react';
import '../Styles/ComponentsStyles/Services.css'; // Create a CSS file for styling
import Skills1 from '../Image/skills2.png';
import Skills3 from '../Image/skills3.png';
import Skills4 from '../Image/skills4.png';
import Skills5 from '../Image/skills5.png';
const serviceData = [
  {
    title: 'Counseling Expertise',
    image: Skills1,
    description: 'Skilled in providing psychosocial counseling for mental health challenges.'
  },
  {
    title: 'Training and Development',
    image: Skills3,
    description: 'Designs and delivers mental health training for professionals and stakeholders.'
  },
  {
    title: 'Project Management',
    image: Skills4,
    description: 'Proficient in managing mental health projects with effective stakeholder collaboration.'
  },
  {
    title: 'Crisis Intervention',
    image: Skills5,
    description: 'Provides psychological first aid and support during emergencies.'
  },
  
 
];

const ServicesPart = ({ services }) => {
  return (
    <div className='services'>
      <h3>Available Services</h3>
      <div className='container services-part'>
        {services.map((service, index) => (
          <div className='services-box' key={index}>
            <div className='services-box-inner'>
              <div className='services-img'>
                <img src={service.image} alt={service.title} />
              </div>
              <div className='services-title'>
                <h3>{service.title}</h3>
              </div>
              <div className='services-content'>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <ServicesPart services={serviceData} />
    </div>
  );
};

export default Services;

