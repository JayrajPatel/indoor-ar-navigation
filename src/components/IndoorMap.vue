<template>
  <div class="indoor-map" ref="mapContainer"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'IndoorMap',
  data() {
    return {
      pois: [
        { name: 'Entrance', position: [0, 0.1, 0] },
        { name: 'Restroom', position: [2, 0.1, -3] }
      ]
    };
  },
  mounted() {
    this.initThreeJS();
  },
  methods: {
    initThreeJS() {
      // Basic Three.js setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.mapContainer.appendChild(renderer.domElement);

      // Create a basic floor
      const floorGeometry = new THREE.PlaneGeometry(10, 10);
      const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
      scene.add(floor);

      // Create a basic navigation path
      const pathGeometry = new THREE.BoxGeometry(0.1, 0.1, 10);
      const pathMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const path = new THREE.Mesh(pathGeometry, pathMaterial);
      path.position.set(0, 0.05, 0);
      scene.add(path);

      // Create POIs
      this.pois.forEach(poi => {
        const poiGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const poiMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        const poiMesh = new THREE.Mesh(poiGeometry, poiMaterial);
        poiMesh.position.set(...poi.position);
        scene.add(poiMesh);
      });

      camera.position.set(0, 5, 5);
      camera.lookAt(floor.position);

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }

      animate();
    }
  }
};
</script>

<style scoped>
.indoor-map {
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>
