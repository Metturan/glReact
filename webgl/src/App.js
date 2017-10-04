import React, { Component } from 'react';
import './App.css';
import * as THREE from 'three';
import frag from './shader.frag';
import vert from './shader.vert';
const OrbitControls = require('three-orbit-controls')(THREE);

// import createLoop from 'raf-loop';

const root = document.getElementById('root')

class App extends Component {
  componentDidMount() {
    const dpr = window.devicePixelRatio;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffeeee);
    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );

    const geometry = new THREE.CircleGeometry(25, 32);
    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag
    })
    const material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.6});
    const sphere = new THREE.Mesh(geometry, shaderMaterial);

    this.scene.add(sphere);
    const controls = new OrbitControls(this.camera)

    this.camera.position.z = 50;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(dpr);

    root.appendChild(this.renderer.domElement);



    const animate = () => {
      requestAnimationFrame(animate);
      // sphere.rotation.x += 0.01;
      // sphere.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    }

    animate();

  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
