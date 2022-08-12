<script setup>
const props = defineProps({
  shopName: String,
  shopOwner: String,
  shopDescription: String,
});
console.log(props);
console.log("wow");
</script>

<template props>
  <div class="card shopCard" style="width: 20%">
    <div class="card-body">
      <h5 class="card-title">{{props.shopName}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Owner : {{props.shopOwner}}</h6>
      <div class="shopCardLine"></div>
      <p :style="{ fontSize: '12px' }" class="card-text shopCardDescription">
        {{props.shopDescription}}
      </p>
      <div class="shopCardButtonContainer">
        <div class="shopCardButton">
          <img
            alt="location"
            src="@/icons/placeholder.png"
            width="20px"
            height="20px"
          />
          <a href="#" class="card-link">Location</a>
        </div>
        <div class="shopCardButton">
          <img
            alt="location"
            src="@/icons/received.png"
            width="15px"
            height="15px"
          />
          <a href="#" class="card-link">Place an Order</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.shopCardButton {
  display: flex;
  align-items: center;
}

.shopCardButtonContainer {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shopCardButton img {
  margin-right: 8px;
}
.shopCardDescription {
  height: 90px;
  overflow: auto;
  padding: 10px;
  /* color: white; */
  /* font-weight: bold ; */
  background: rgba(0, 0, 255, 0.063);
  margin-bottom: 15px;
}
.shopCardLine {
  margin-top: 15px;
  margin-bottom: 15px;
  height: 3px;
  width: 75%;
  background: rgba(0, 0, 0, 0.575);
}
.shopCard {
  min-width: 300px !important;
  margin: 0.8%;
  height: 250px;
  border-radius: 10px !important;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 
    0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
}
</style>
