<template>
  <GoogleMap
      api-key="AIzaSyDsy2m2yJs1ufBp6nBRgPOafTgPrmWvgvg"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
  >
    <CustomControl position="BOTTOM_CENTER">
      <button class="custom-btn" @click="saveLocation">Save Location</button>
    </CustomControl>
    <Marker :options="{ position: center , draggable: true }" @drag="updateLocation"/>
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, CustomControl } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker , CustomControl},
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 }

    const updateLocation = (val)=>{
      console.log(val.latLng.lat());
    }

    const saveLocation = ()=>{
      console.log('Clicked');
    }

    return { center, updateLocation, saveLocation }
  },
})
</script>
<style scoped>
.custom-btn {
  box-sizing: border-box;
  background: white;
  height: 40px;
  width: 200px;
  border-radius: 2px;
  border: 0px;
  margin: 10px;
  padding: 0px;
  font-size: 1.25rem;
  text-transform: none;
  appearance: none;
  cursor: pointer;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  overflow: hidden;
}
</style>