<script setup>
import {ref} from 'vue';
    import 'bootstrap';
    const amodalflag=ref(true);
    const wowClicked = () =>{
        amodalflag.value=false;
        console.log("Im add shop modal");
    }
</script>'
<template>
  <div v-if="amodalflag"  class="modalBody">
      <div class="modalCenter">
          <button @click="wowClicked"></button>
      </div>
  </div>
</template>

<style>
.modalBody{
    z-index: 100000 !important;
    width:100%;
    height:100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.8);
    position:fixed;
    display: flex;
    justify-content:center;
    align-items:center;
}

.modalCenter{
    height: 300px;
    width: 300px;
    background: white;

}
</style>
