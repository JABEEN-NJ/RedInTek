// src/pages/Home.js
import React from 'react';
import ModelViewer from '../components/ModelViewer';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1><b>Welcome to Redintek</b></h1>
        <h2>Your Technology Partner for Business Success</h2>
        <p>
          Redintek is at the forefront of technological innovation, providing cutting-edge solutions 
          that empower businesses to thrive in a competitive landscape.
          Our expertise spans across software development, IT consulting, and digital transformation, enabling us to deliver 
          tailor-made solutions that meet the unique challenges of our clients.
        </p>
        <h3>What We Offer</h3>
        <p>
          Our comprehensive suite of services is designed to address every aspect of your business's 
          digital needs, from concept to execution. We specialize in:
        </p>
        <ul>
          <li><strong>Custom Software Development:</strong> Creating bespoke software solutions that drive efficiency and growth.</li>
          <li><strong>Cloud Solutions:</strong> Leveraging the power of cloud computing to enhance scalability and flexibility.</li>
          <li><strong>Data Analytics:</strong> Turning data into actionable insights to inform strategic decisions.</li>
          <li><strong>Cybersecurity:</strong> Protecting your digital assets with robust security measures.</li>
          <li><strong>IT Consulting:</strong> Providing expert guidance to optimize your technology investments.</li>
        </ul>
        <h3>Our Vision</h3>
        <p>
          At Redintek, our vision is to be a catalyst for business success through the strategic application 
          of technology. We believe in building long-term partnerships with our clients, helping them 
          navigate the complexities of the digital world with confidence and clarity.
        </p>
        <h3>Contact Us</h3>
        <p>
          Ready to embark on a journey of innovation? <a href="/contact">Get in touch</a> with us today and 
          let's discuss how we can help you achieve your business objectives.
        </p>
      </div>
      <div className="right-side">
        <img src="/models/Technology.png" alt="Technology" className="right-image" />
        <ModelViewer modelPath="/models/homeModel.glb" />
      </div>
    </div>
  );
};

export default Home;
