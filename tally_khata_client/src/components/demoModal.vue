<script setup>
import "bootstrap";
const props = defineProps({
  demoFlag: Boolean,
});

const emit = defineEmits(["responsedemo"]);

const demoButtonClicked = () => {
  // console.log("Im add shop modal");
  emit("responsedemo", false);
};
console.log(props.shopFlag);
</script>
'
<template>
  <div v-if="props.demoFlag" class="modalBody">
    <div class="modalCenterdemo">
      <button @click="demoButtonClicked" class="closeButton">X</button>
      
      </div>
    </div>
</template>

<style>

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
  height: 600px;
  width: 600px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
