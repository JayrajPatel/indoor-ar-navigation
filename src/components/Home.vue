<template>
  <div class="indoor-home">
    <h1>Indoor AR Navigation Map System</h1>
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
      <a-marker preset="hiro">
        <a-box position='0 0.5 0' material='color: yellow;'></a-box>
      </a-marker>
      <!-- Washroom button -->
      <a-entity
        id="washroomButton"
        geometry="primitive: box; width: 0.2; height: 0.05; depth: 0.1"
        material="color: blue"
        position="0 0.3 0"
        text="value: Washroom; align: center"
        @click="washroomClicked"
      ></a-entity>
      <!-- Exit button -->
      <a-entity
        id="exitButton"
        geometry="primitive: box; width: 0.2; height: 0.05; depth: 0.1"
        material="color: red"
        position="0 0.25 -0.5"
        text="value: Exit; align: center"
        @click="exitClicked"
      ></a-entity>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'IndoorNavigationHome',
  mounted() {
  console.log('Mounted. Buttons:', this.$refs);
  },
  methods: {
    washroomClicked: function() {
      console.log('Navigating to washroom...');
      // Add logic to navigate to the washroom POI
    },
    exitClicked: function() {
      console.log('Navigating to exit...');
      // Add logic to navigate to the exit POI
    }
  }
}
</script>
