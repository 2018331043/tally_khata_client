<script setup>
import "bootstrap";
import LocationComp from '../components/ShopLocationPicker.vue'
const props = defineProps({
  demoFlag: Boolean,
  saveLocation : Function
});
const changeLocation = (val)=>{
  emit('locationInfo',val)
}
const emit = defineEmits(["responseLocation",'locationInfo']);

const demoButtonClicked = () => {
  // console.log("Im add shop modal");
  emit("responseLocation", false);
};
console.log(props.shopFlag);
</script>
'
<template>
  <div v-if="props.demoFlag" class="modalBody">
    <div class="modalCenterdemo">
      <div class="row">
        <div class="allign-items">
          <button @click="demoButtonClicked" type="button" class="btn btn-primary mt-3">Save Location</button>
          <button @click="demoButtonClicked" class="closeButton ml-30">X</button>
        </div>
      </div>
      <div class="demoModalLocation">
        <LocationComp
          :saveLocation = props.saveLocation
          @locationChanged = changeLocation
        ></LocationComp>
      </div>
      </div>
    </div>
</template>

<style>
.demoModalLocation{
  margin-top: 20px;
  width: 100%;
}
.closeButton:hover{
  background: rgb(255, 0, 0);
  color: white;
  /* padding: 5px; */
}

.closeButton {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 12px;
  /* border: none; */
  font-size: 16px;
  /* background: red; */
  background: none;
  font-weight: bold;
  border-radius: 3px;
}



.modalBody {
  z-index: 100000 !important;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalCenterdemo {
  height: 60%;
  width: 40%;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ml-30{
  margin-left: 550px;
}
.allign-items{
  display:flex;
  justify-content: flex-end;
}
</style>
