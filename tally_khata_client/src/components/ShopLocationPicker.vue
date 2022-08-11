<template>
  <GoogleMap
      api-key="AIzaSyDsy2m2yJs1ufBp6nBRgPOafTgPrmWvgvg"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
  >
    <Marker :options="{ position: center , draggable: true }" @drag="updateLocation"/>
  </GoogleMap>
</template>
<!--<script>-->
<!--// import toast from "../service/toast.service";-->
<!--// import localStorageService from "../service/localStorage.service";-->
<!--// import shopService from "../service/shop.service";-->

<!--export default {-->
<!--  name: "ShopLocationPicker",-->
<!--  data() {-->
<!--    return {-->
<!--      center: { lat: 40.689247, lng: -74.044502 },-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 }

    const updateLocation = (val)=>{
      console.log(val.latLng.lat());
    }

    return { center, updateLocation }
  },
})
</script>
