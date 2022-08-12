<template>
  <GoogleMap
    api-key="AIzaSyDsy2m2yJs1ufBp6nBRgPOafTgPrmWvgvg"
    style="width: 100%; height: 100%"
    :center="center"
    :zoom="15"
  >
    <CustomControl position="BOTTOM_CENTER">
      <button class="custom-btn" @click="sayHi">👋</button>
    </CustomControl>
    <Marker
      :options="{ position: center, draggable: true }"
      @drag="updateLocation"
    />
  </GoogleMap>
</template>

<script setup>
import { defineComponent, defineProps, defineEmits, ref } from "vue";
import { GoogleMap, Marker, CustomControl } from "vue3-google-map";
const props = defineProps({
  saveLocation: Function,
  lattitude:Number,
  longitude:Number,
});
const emit = defineEmits(["locationChanged"]);
const center = ref({ lat: 24.907177, lng: 91.835413 });
getLocation();
function getLocation() {
  if(props.lattitude==null){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    }
  }else{
    console.log(props.lattitude);
    center.value.lat = props.lattitude;
    center.value.lng = props.longitude;
  }
  
}
function setPosition(position) {
  center.value.lat = position.coords.latitude;
  center.value.lng = position.coords.longitude;
}

const updateLocation = (val) => {
  emit("locationChanged", val);
  // props.saveLocation(val)
};

const saveLocation = () => {
  console.log("Clicked");
};
// export default defineComponent({
//   components: { GoogleMap, Marker , CustomControl},
//   setup() {
//
//
//     return { center, updateLocation, saveLocation }
//   },
// })
</script>
<style scoped>
.custom-btn {
  box-sizing: border-box;
  background: white;
  height: 40px;
  width: 40px;
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
