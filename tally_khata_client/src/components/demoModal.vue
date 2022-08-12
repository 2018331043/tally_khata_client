<script setup>
// import "bootstrap";
import LocationComp from '../components/ShopLocationPicker.vue'
const props = defineProps({
  demoFlag: Boolean,
  saveLocation : Function
});


const emit = defineEmits(["responseLocation"]);
// console.log('opps')
const changeLocation = (val)=>{
  emit('locationInfo',val)
}
// const emit = defineEmits(["responseLocation",'locationInfo']);


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
      <div class="demoModalButtons">
          <button @click="demoButtonClicked" class="saveLocationButton">Save Location</button>
          <button @click="demoButtonClicked" class="closeButtonDemo">X</button>
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
.saveLocationButton:hover{
  height: 40px;
  margin-left: 20px;
  margin-top: 30px;
  color: white;
  border: none;
  font-weight: 600;
  background: rgba(0, 109, 240, 1);
  border-radius: 5px;
}

.saveLocationButton{
  height: 40px;
  margin-left: 20px;
  margin-top: 30px;
  color: white;
  border: none;
  font-weight: 600;
  background: rgba(0, 109, 240, .9);
  border-radius: 5px;
}
.demoModalButtons{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 10%;
}
.demoModalLocation{
  margin-top: 20px;
  width: 100%;
  height: 90%;
}
.closeButtonDemo:hover{
  background: rgb(255, 0, 0);
  color: white;
  /* padding: 5px; */
}

.closeButtonDemo {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border: none;
  margin-right: 15px;
  /* margin-top: 12px; */
  /* border: none; */
  font-size: 16px;
  background: rgba(255, 0, 0, 0.507);
  /* background: none; */
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
  height: 80%;
  width: 80%;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
