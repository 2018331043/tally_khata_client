<script setup>
import { ref } from "vue";
import DebtView from "../components/DebtView.vue";

const shopName = ref("");
const shopOwner = ref("");
const ShopEmail = ref("");
let shop = "Alpha Tech Private Limited";
let shopO = "Abdur Rahman";
let shopE = "introvertstr@gmail.com";
shopName.value = shop.toUpperCase();
shopOwner.value = shopO.toUpperCase();
ShopEmail.value = shopE;
</script>

<template>
  <div class="shopViewContainer">
    <div class="shopViewHead">
      <div class="shopViewHeadLeft">
        <h1>{{ shopName }}</h1>
        <h6>Owner: {{ shopOwner }}</h6>
        <h7>{{ ShopEmail }}</h7>
      </div>
      <div class="shopViewHeadRight"></div>
    </div>
    <div class="shopViewBody">
      <div class="shopViewSidebar">
        <div class="shopViewSidebarItems">
          <p>Active Loans</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      </div>
      <div class="shopViewDebtList">
            <div class="shopViewDebtListBody">
                <DebtView/>
                <DebtView/>
                <DebtView/>
            </div>
      </div>
    </div>
  </div>
</template>


<script>
 export default{
     props:[
         'title',
     ],
     async created(){
         console.log(this.title);
         
     }
 }
</script>

<style>

.shopViewDebtListBody{
    width: 50%;
    height: 100px;
}
.shopViewDebtList {
    overflow: auto;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  width: 84%;
  height: 100%;
  /* background: red; */
}
.shopViewSidebarItems p:hover {
  color: rgb(255, 255, 255, 1);
  font-size: 16px;
  /* z-index: 1000; */
  /* font-weight: bold; */
  /* margin-left:10px; */
  font-weight: bold;
  cursor: pointer;
}

.shopViewSidebarItems p {
  color: rgb(255, 255, 255, 1);
  font-size: 16px;
  /* z-index: 1000; */
  /* font-weight: bold; */
  cursor: pointer;
}
.shopViewSidebarItems {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.shopViewSidebar {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
     rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2)
      0px -3px 0px inset;
  margin: 10px;
  height: calc(100% - 20px);
  width: 16%;
  min-width: 150px;
  /* background: rgba(0, 0, 0, 0.171); */
  /* background: blue; */
  /* backdrop-filter: blur(10px); */
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.747);
  /* background: black; */
}
.shopViewBody {
  /* background: blue; */
  display: flex;
  height: 65%;
  width: 100vw;
  /* background: blue; */
}
.shopViewHeadLeft h7 {
  /* font-size: 2.5rem; */
  /* margin-top:5%; */
  margin-left: 3%;
  color: rgba(255, 255, 255, 0.7);
}
.shopViewHeadLeft h6 {
  /* font-size: 2.5rem; */
  /* margin-top:5%; */
  margin-left: 3%;
  color: rgba(255, 255, 255, 0.8);
}
.shopViewHeadLeft h1 {
  font-size: 2.5rem;
  /* margin-top:5%; */
  margin-left: 3%;
  color: rgba(255, 255, 255, 1);
}

.shopViewHeadLeft {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.shopViewHeadRight {
}
.shopViewHead {
  display: flex;
  width: 100%;
  height: 35%;
  background: rgba(0, 109, 240, 1);
}

.shopViewContainer {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.148);
}
</style>
