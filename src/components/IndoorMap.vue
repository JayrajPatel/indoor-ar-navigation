<template>
    <div class="indoor-map" ref="mapContainer"></div>
  </template>
  
  <script>
  export default {
    name: 'IndoorMap',
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
        this.$refs.mapContainer.appendChild(renderer.domElement);
  
        // Create a basic floor
        const geometry = new this.$three.PlaneGeometry(10, 10);
        const material = new this.$three.MeshBasicMaterial({ color: 0xcccccc });
        const floor = new this.$three.Mesh(geometry, material);
        floor.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
        scene.add(floor);
  
        camera.position.set(0, 5, 5);
        camera.lookAt(floor.position);
  
        function animate() {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }
  
        animate();
      }
    }
  }
  </script>
  
  <style scoped>
  .indoor-map {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  </style>
  