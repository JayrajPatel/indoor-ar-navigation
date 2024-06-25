<template>
    <div class="home">
      <h1>Indoor AR Navigation Map System</h1>
      <div id="scene-container"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    mounted() {
      this.initThreeJS();
    },
    methods: {
      initThreeJS() {
        // Basic Three.js setup
        const scene = new this.$three.Scene();
        const camera = new this.$three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new this.$three.WebGLRenderer();
  
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.sceneContainer.appendChild(renderer.domElement);
  
        // Create a basic cube
        const geometry = new this.$three.BoxGeometry();
        const material = new this.$three.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new this.$three.Mesh(geometry, material);
        scene.add(cube);
  
        camera.position.z = 5;
  
        function animate() {
          requestAnimationFrame(animate);
  
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
  
          renderer.render(scene, camera);
        }
  
        animate();
      }
    }
  }
  </script>
  
  <style scoped>
  #scene-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  </style>
  