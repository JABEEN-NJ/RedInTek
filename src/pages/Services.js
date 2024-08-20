import React from 'react';
import ModelViewer from '../components/ModelViewer';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-content">
        <h2>Our Services</h2>
        <p>Discover how we can drive your business forward with our innovative solutions. Our services are designed to meet your needs and help you achieve your goals.</p>
        <ul>
          <li><strong>Service 1:</strong> Comprehensive strategy development and implementation.</li>
          <li><strong>Service 2:</strong> Advanced technology solutions tailored to your needs.</li>
          <li><strong>Service 3:</strong> Expert consulting and support to guide your growth.</li>
          <li><strong>Service 4:</strong> Customized solutions to optimize your business operations.</li>
        </ul>
      </div>
      <div className="model-container">
        <ModelViewer modelPath="/models/serviceModel.glb" />
      </div>
    </div>
  );
};

export default Services;
