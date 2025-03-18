
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    mountRef.current.appendChild(renderer.domElement);
    
    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Create multiple spheres with gradient materials
    const createSphere = (radius: number, position: THREE.Vector3, color: number) => {
      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.copy(position);
      return sphere;
    };
    
    // Add spheres to the group with teal-based colors
    const sphere1 = createSphere(1.5, new THREE.Vector3(-2, 2, -5), 0x085550);
    const sphere2 = createSphere(1, new THREE.Vector3(2, -1, -3), 0x0ea5e9);
    const sphere3 = createSphere(0.7, new THREE.Vector3(0, 3, -4), 0x10b981);
    
    group.add(sphere1, sphere2, sphere3);
    
    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x085550,
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 5;
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    let frame = 0;
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      frame += 0.01;
      
      // Rotate the group slowly
      group.rotation.y = frame * 0.1;
      group.rotation.x = frame * 0.05;
      
      // Move spheres slightly to create floating effect
      sphere1.position.y = Math.sin(frame) * 0.2 + 2;
      sphere2.position.x = Math.cos(frame) * 0.2 + 2;
      sphere3.position.z = Math.sin(frame * 0.5) * 0.2 - 4;
      
      // Rotate particles
      particlesMesh.rotation.y = frame * 0.02;
      
      renderer.render(scene, camera);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={mountRef} className="canvas-container" />;
};

export default ThreeScene;
