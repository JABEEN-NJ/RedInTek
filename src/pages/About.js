import React from 'react';
import './About.css';
import aboutImage from './About.png'; // Adjust the path if necessary
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, '/models/aboutmodel.glb'); // Load the model using useLoader

  return <primitive object={gltf.scene} scale={1.5} />; // Return the loaded model as a primitive
};

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Welcome to the Best Website Development Company in Kochi & Kollam</h1>
        <p>
          Redintek is a global software solution provider that delivers a variety of services ranging from mobile app development to digital marketing, all under one roof. Being the top software company in Kerala, we know what the customer cares about in the online world. First of all, we implement effective software solutions that suit every type of business, from individuals to large businesses. In order to provide the best services, we constantly research the internet world so that we are updated with the most recent information as it pops up online. We are highly trained and skilled professionals capable of helping you achieve your goals.
        </p>
        <img src={aboutImage} alt="Our Team" className="about-image" />
      </div>
      <div className="about-model">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} />
          <OrbitControls />
          <Suspense fallback={null}>
            <ModelViewer />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default About;
