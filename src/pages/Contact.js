import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Contact.css';

function Model() {
  const { scene } = useGLTF('/models/contactModel.glb'); // Adjust path as needed
  return <primitive object={scene} scale={0.3} />;
}

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>  We’d love to hear from you! Whether you have questions about our services, need support, or want to discuss a potential project, feel free to reach out. Our team is here to help and provide the information you need.</p>
          <p>For inquiries, please email us at <a href="mailto:contact@redintek.com">contact@redintek.com</a> or call us at <a href="tel:+1234567890">+1 (234) 567-890</a>.</p>
        </div>
        <div className="contact-model">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} />
            <Model />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Redintek</h3>
            <p>Leading the way in technology solutions. Reach out to us for custom tech services that drive your business forward.</p>
          </div>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/redintek" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/redintek" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Redintek. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
