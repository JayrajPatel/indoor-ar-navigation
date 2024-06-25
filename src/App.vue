<template>
  <div id="app">
    <!-- AR scene -->
    <a-scene embedded arjs>
      <!-- Define your markers and POIs here -->
      <!-- For example: -->
      <a-marker preset="hiro" id="washroom-marker">
        <!-- Define a washroom marker -->
        <a-box position="0 0.5 0" material="color: blue"></a-box>
      </a-marker>
      <a-marker preset="kanji" id="exit-marker">
        <!-- Define an exit marker -->
        <a-box position="0 0.5 -1" material="color: green"></a-box>
      </a-marker>
      <!-- Camera entity -->
      <a-entity camera></a-entity>
    </a-scene>

    <!-- UI buttons for POIs -->
    <div id="poi-buttons">
      <button id="washroom-button" @click="navigateToWashroom">Washroom</button>
      <button id="exit-button" @click="navigateToExit">Exit</button>
      <!-- Add more buttons for other POIs -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToWashroom() {
      // Add code to handle navigating to the washroom POI
      console.log('Navigating to washroom...');
    },
    navigateToExit() {
      // Add code to handle navigating to the exit POI
      console.log('Navigating to exit...');
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
#poi-buttons {
  position: absolute;
  top: 10px; /* Adjust this value to position the buttons vertically */
  left: 10px; /* Adjust this value to position the buttons horizontally */
  z-index: 9999; /* Ensure the buttons are displayed above other elements */
}
</style>
