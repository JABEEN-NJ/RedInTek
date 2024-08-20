// src/components/ModelViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './ModelViewer.css';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} />;
}

const ModelViewer = ({ modelPath }) => {
  return (
    <div className="model-viewer">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Model modelPath={modelPath} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
