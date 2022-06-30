<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import ShopModal from './components/AddShopModal.vue';
import ShopCard from "./components/ShopCard.vue";
var asd = ref("wow");
const createAShopFlag = ref(false);

var curShops = ref([
  { shopName: "GrameenPhone", shopOwner: "Abdur Rahman" },
  { shopName: "Airtel", shopOwner: "Abdur Rahim" },
  { shopName: "Robi", shopOwner: "Abdur Gafur" },
  { shopName: "BanglaLink", shopOwner: "Abdullah Ahmed" },
  { shopName: "Teletalk", shopOwner: "hmed Rakib" },
]);
const signOutStart = ()=>{
  localStorage.clear();
  window.location.replace("/");
};

const createAShopClicked = ()=>{
  createAShopFlag.value = true;
  console.log("ahm ahm");
};

const modalResponse= () =>{
  createAShopFlag.value=false;
  // console.log("response come!");
}

</script>

<template>
  <div>
    <ShopModal v-if="createAShopFlag" :shopFlag="createAShopFlag" @response="modalResponse"/>
    <div class="homeViewNav">
      <div class="homeViewNavFirst">
        <h4>TallyKhata</h4>
      </div>
      <div class="homeViewNavSecond">
        <div
          :style="{
            background: 'rgba(255,255,255,0.7)',
            width: '70%',
            display: 'flex',
          }"
        >
          <div class="HomeViewSearchImg">
            <img alt="searchImg" src="@/icons/search.png" />
          </div>
          <input class="homeViewActive" type="text" placeholder="search" v-model="searchKyeWord" v-on:keyup.enter="getShopsOfUser"/>
        </div>
      </div>
      <div class="homeViewNavThird">
        <div class="homeViewNavThirdNearbyShops">
          <img
            :style="{ marginTop: '1px' }"
            alt="nearby shops"
            src="@/icons/shop.png"
            height="12px"
            width="12px"
          />
          <button class="homeViewNavThirdLink1">Nearby Shops</button>
        </div>
        <div class="homeViewNextOptions">
          <img
            class="extra2"
            src="@/icons/downdoublearrow.png"
            alt="basic options"
            width="15px" height="15px"
          />
          <div class="homeViewOptionsDropdown">
            <a href="#">My Shops</a>
            <a class="extra1" @click="createAShopClicked">Create a Shop</a>
            <a href="#">Suppliers</a>
            <a class="extra1" @click="signOutStart">Sign Out</a>
          </div>
        </div>
      </div>
      <div class="homeViewNavFourth">
        <div class="homeViewNavFourthUser"> {{ userInfo ? userInfo.user_name : "Loading.." }}</div>
        <div class="homeViewDropdownContainer">
          <img
            class="homeViewOptions"
            alt="options"
            src="@/icons/man.png"
            height="35px"
            width="35px"
          />
        </div>
      </div>
    </div>

    <div class="homeViewBody">
      <div class="homeViewBodyNavMargin"></div>
      <div class="homeViewBodyMain">
        <ShopCard v-for="items in curShops" :shopName="items.shopName" :shopOwner="items.shopOwner"/>
      </div>
    </div>
  </div>
</template>
<script>
import toast from "../service/toast.service";
import localStorageService from "../service/localStorage.service";
import shopService from "../service/shop.service";

export default {
  name: "HomeView",
  data() {
    return {
      searchKyeWord: null,
      userInfo: null,
    };
  },
  async created() {
    var vm = this;
    this.getShopsOfUser();
    this.userInfo = localStorageService.getUserInfo();
    toast.success("Logged In Successfully");
  },
  mounted() {},
  methods: {
    getShopsOfUser() {
      var vm = this;
      shopService.getAllShopsOfOwner(
        (data) => {

        },
        (err) => {
          toast.error(err);
        },
        { searchKyeWord: vm.searchKyeWord }
      );
    },
    addShopForOwner() {
      var vm = this;
      var data
      shopService.addShopForOwner(
          (data) => {},
          (err) => {
            toast.error(err);
          },
          data
      );
    },
  },
};
</script>
<style>
.extra2:hover{
  height: 18px;
  width: 18px;
  cursor: pointer;
}

.extra2{
  height: 15px;
  width: 15px;
  cursor: pointer;
}
.homeViewOptions{
  width: 35px;
  height: 35px;
  cursor: pointer;
}


.extra1:hover{
  font-size: 13px;
  display: block;
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgb(0, 0, 0);
  text-align: left;
  margin-left: 10px;
  width: 120px;
  /* padding: 11px; */
  border-radius: 5px;
  text-align: center;
  margin-left: 6px;
  cursor: pointer;
}
.homeViewBodyMain {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
}

.homeViewBody {
  width: 100%;
  height: 100vh;
  overflow: auto;
  /* background: black; */
  /* background: rgba(0, 109, 240, 0.05); */
  background: rgba(0, 0, 0, 0.148);
  overflow-x: hidden;
}

.homeViewBodyNavMargin {
  width: 100%;
  height: 65px;
}
.homeViewOptionsDropdown a:hover {
  font-size: 13px;
  display: block;
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgb(0, 0, 0);
  text-align: left;
  /* margin-left: 10px; */
  width: 120px;
  /* padding: 11px; */
  border-radius: 5px;
  text-align: center;
  margin-left: 6px;
}

.homeViewDropdownContainer img:hover {
  height: 38px;
  width: 38px;
}

.homeViewDropdownContainer img {
  margin-right: 40px;
  border-radius: 50%;
  border: white;
  border-width: 2px;
  outline: white;
  outline-width: 2px;
  border-style: solid;
}
.homeViewSeperator {
  margin-left: 37px;
  width: 18px;
  height: 2px;
  background: black;
}
.homeViewNextOptions {
  display: inline;
  position: relative;
}

.homeViewNextOptions img {
  margin-left: 47px;
}

.homeViewNextOptions:hover .homeViewOptionsDropdown {
  display: block;
}

.homeViewNextOptions {
  position: relative;
  display: inline;
}
.homeViewOptionsDropdown a {
  font-size: 13px;
  display: block;
  color: rgb(0, 0, 0);
  background: white;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: black;
  text-align: left;
  margin-left: 10px;
  width: 120px;
  padding: 6px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}

.homeViewOptionsDropdown {
  position: absolute;
  display: none;
}

.homeViewNavFourthUser {
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-right: 20px;
}

.homeViewNavFourth {
  margin-left: 10px;
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: flex-end;
}

.homeViewNavThirdNearbyShops:hover {
  font-size: 13px;
  padding: 13px;
}
.homeViewNavThirdNearbyShops {
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 10px;
  padding: 10px;
  border: none;
}
.homeViewNavThirdNearbyShops:active {
  background: rgba(0, 0, 0, 0.7);
  padding-bottom: 10px;
  padding-top: 10px;
}
/* .homeViewNavThirdLink1:hover{
  font-weight: bold;
  font-size: 13px;
}  */

.homeViewNavThirdLink1 {
  font-weight: bold;
  /* color: rgb(255, 255, 255); */
  font-size: 11px;
  font-weight: bold;
  color: white;
  background: none;
  border: none;
}

.homeViewNavThird {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.HomeViewSearchImg img {
  width: 15px;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.HomeViewSearchImg {
  width: 10%;
}

.homeViewNavSecond input:focus {
  border-radius: 10px;
  width: 100%;
  outline: 0px solid transparent;
}

.homeViewNavSecond input {
  display: flex;
  width: 100%;
  border-radius: 10px;
  border-width: 0px;
  padding-left: 10px;
  height: 35px;
  justify-self: flex-end;
}

.homeViewNavSecond {
  display: flex;
  width: 40%;
  align-items: center;
}

.homeViewNavFirst h4 {
  color: white;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.homeViewNavFirst {
  display: flex;
  align-items: center;
  width: 20%;
  margin-left: 24px;
}

.homeViewNav {
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 65px;
  /* background: rgb(255, 152, 17, 0.8); */
  background: rgba(0, 109, 240, 1);
  align-items: center;
}
</style>
