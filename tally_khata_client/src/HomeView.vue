<script setup>
import ShopView from "./views/ShopView.vue";
import { ref } from "vue";
// import toast from "../../service/toast.service";
import { RouterLink } from "vue-router";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import ShopModal from "./components/AddShopModal.vue";
import ShopCard from "./components/ShopCard.vue";
import { onMounted , onUpdated } from "vue";
import DemoModal from './components/demoModal.vue';

const createAShopFlag = ref(false);
const lat = ref(25.66)
const lng = ref(25.66)
getLocation()
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  }
}
function setPosition(position) {
  lat.value = position.coords.latitude
  lng.value = position.coords.longitude
}

var curShops = ref([
  {
    lattitude: 25.66,
    longitude: 24.33,
    owner_name: "Abdur Rahman",
    owner_number: "01234566754",
    shop_name: "GrameenPhone",
  },
  {
    lattitude: 25.66,
    longitude: 24.33,
    owner_name: "Abdur Rahman",
    owner_number: "01234566754",
    shop_name: "GrameenPhone",
  },
  {
    lattitude: 25.66,
    longitude: 24.33,
    owner_name: "Abdur Rahman",
    owner_number: "01234566754",
    shop_name: "GrameenPhone",
  },
  {
    lattitude: 25.66,
    longitude: 24.33,
    owner_name: "Abdur Rahman",
    owner_number: "01234566754",
    shop_name: "GrameenPhone",
  },
  {
    lattitude: 25.66,
    longitude: 24.33,
    owner_name: "Abdur Rahman",
    owner_number: "01234566754",
    shop_name: "GrameenPhone",
  },
]);

const signOutStart = () => {
  localStorage.clear();
  window.location.replace("/");
};

const createAShopClicked = () => {
  createAShopFlag.value = true;
  console.log("ahm ahm");
  // this.getShopsOfUser();
};

const modalResponse = () => {
  createAShopFlag.value = false;
  toast.success("Add shop for owner successfully");
  this.getShopsOfUser();
  // console.log("response come!");
};
const myShopShowFlag = ref(false);
const MyShopsShow = () => {
  myShopShowFlag.value = true;
  pageTitleContainer.value = "My Shops";
};

const pageTitleContainer = ref("Nearby Shops");

const shopOpenFlag = ref(false);

const shopOpenView = (items) => {
  console.log(items);
  shopOpenFlag.value = true;
  router.push({ name: "shop", params: { shopNumber: items.shop_number } });
};

//demoModalImplementation
const locationAddFlag = ref(false);

const locationAddButtonClicked = () => {
  locationAddFlag.value=true;
}

const locationModalClose = () => {
  locationAddFlag.value=false;
}

const updateLocation = (val) => {
  lat.value = val.latLng.lat();
  lng.value = val.latLng.lng();
}

const openLocationModal = (val) => {
  console.log('Hello World')
  locationAddFlag.value=true;
  lat.value=val.lattitude;
  lng.value = val.longitude;
}
</script>
<template>
  <div>
    <ShopModal
      v-if="createAShopFlag"
      :shopFlag="createAShopFlag"
      :lat = "lat"
      :lng = "lng"
      @response="modalResponse"
      @locationResponse="locationAddButtonClicked"
    />
    <DemoModal v-if = "locationAddFlag"  :demoFlag= "locationAddFlag" :lattitude="lat.value"  :longitude="lng.value" @responseLocation="locationModalClose" @locationInfo="updateLocation"/>
    <!-- <ShopLocationPicker
    ></ShopLocationPicker> -->
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
          <input
            class="homeViewActive"
            type="text"
            placeholder="search"
            v-model="searchKyeWord"
            v-on:keyup.enter="getShopsOfUser"
          />
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
          <button
            class="homeViewNavThirdLink1"
            v-if="showNearby"
            @click="toggleNerby"
          >
            Nearby Shops
          </button>
          <button class="homeViewNavThirdLink1" v-else @click="toggleNerby">
            My Shops
          </button>
        </div>
        <div class="homeViewNextOptions">
          <img
            class="extra2"
            src="@/icons/downdoublearrow.png"
            alt="basic options"
            width="15px"
            height="15px"
          />
          <div class="homeViewOptionsDropdown">
            <a class="extra1" @click="MyShopsShow" href="#">My Shops</a>
            <a class="extra1" @click="createAShopClicked">Create a Shop</a>
            <a href="#">Suppliers</a>
            <a class="extra1" @click="signOutStart">Sign Out</a>
          </div>
        </div>
      </div>
      <div class="homeViewNavFourth">
        <div class="homeViewNavFourthUser">
          {{ userInfo ? userInfo.user_name : "Loading.." }}
        </div>
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
        <!-- <ShopView v-if="shopOpenFla/> -->
        <ShopCard
          @responseMaximize="shopOpenView(items)"
          @locationViewed="openLocationModal"
          v-for="items in shops"
          :lattitude="items.lattitude"
          :longitude="items.longitude"
          :shopName="items.shop_name"
          :shopOwner="items.owner_name"
          :shopDescription="items.description"
          :shopEmail = "items.email"
        />
      </div>
    </div>
  </div>
</template>
<script>
import toast from "../service/toast.service";
import localStorageService from "../service/localStorage.service";
import shopService from "../service/shop.service";
import ShopLocationPicker from "./components/ShopLocationPicker.vue";
export default {
  name: "HomeView",
  components:{
    ShopLocationPicker
  },
  data() {
    return {
      searchKyeWord: null,
      userInfo: null,
      showNearby: false,
      shops: null,
    };
  },
  async created() {
    var vm = this;
    this.getShopsOfUser();
    this.userInfo = localStorageService.getUserInfo();
    // toast.success("Logged In Successfully");
  },
  mounted() {},
  methods: {
    modalResponse(){
      this.createAShopFlag = false;
      // toast.success("Add shop for owner successfully");
      this.getShopsOfUser();
    },
    toggleNerby() {
      this.showNearby = !this.showNearby;
      this.getShopsOfUser();
    },
    getShopsOfUser() {
      var vm = this;
      shopService.getAllShopsOfOwner(
        (data) => {
          console.log("data->");
          // dataRef=data;
          if (vm.showNearby) {
            vm.shops = [
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Abdur Rahman",
                owner_number: "01234566754",
                shop_name: "GrameenPhone",
                email: "gpakhaliabd@gmail.com" ,
                description: "Grameenphone, widely abbreviated as GP, is the leading telecommunications service provider in Bangladesh, with 83.02 million subscribers. It is a joint venture between Telenor and Grameen Telecom Corporation.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Kim Ki-Nam",
                owner_number: "013423243443",
                shop_name: "Samsung",
                email: "samsungakhaliabd@gmail.com" ,
                description: "Samsung helps you discover a wide range of home electronics with cutting-edge technology including smartphones, tablets, TVs, home appliances and more.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Manish Grover",
                owner_number: "01834545454",
                shop_name: "Tasty Treat",
                email: "tastytreatbd@gmail.com" ,
                description: "Delicious meals delivered fresh to your doorstep. Browse our menu and order online! What are you hungry for today",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Erik Aas",
                owner_number: "01234566754",
                shop_name: "Banglalink",
                email: "blinkakhaliabd@gmail.com" ,
                description: "Banglalink Digital Communications Ltd. is a telecommunication service provider in Bangladesh. It's the third-largest cellular service provider in Bangladesh.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Paul Seed",
                owner_number: "01634566754",
                shop_name: "StarTech",
                email: "starTechbd@gmail.com" ,
                description: "StarTech.com is an technology manufacturer, specializing in hard-to-find connectivity parts, primarily used in the information technology and professional A/V industries. StarTech.com services a worldwide market with operations throughout the United States, Canada, Europe, Latin America and Taiwan.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Kim Ki-Nam",
                owner_number: "013423243443",
                shop_name: "Samsung",
                email: "samsungakhaliabd@gmail.com" ,
                description: "Samsung helps you discover a wide range of home electronics with cutting-edge technology including smartphones, tablets, TVs, home appliances and more.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Manish Grover",
                owner_number: "01834545454",
                shop_name: "Tasty Treat",
                email: "lasttasteakhaliabd@gmail.com" ,
                description: "Delicious meals delivered fresh to your doorstep. Browse our menu and order online! What are you hungry for today",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Erik Aas",
                owner_number: "01234566754",
                shop_name: "Banglalink",
                email: "akhaliablinkbd@gmail.com" ,
                description: "Banglalink Digital Communications Ltd. is a telecommunication service provider in Bangladesh. It's the third-largest cellular service provider in Bangladesh.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Paul Seed",
                owner_number: "01634566754",
                shop_name: "StarTech",
                email: "sTakhaliabd@gmail.com" ,
                description: "StarTech.com is an technology manufacturer, specializing in hard-to-find connectivity parts, primarily used in the information technology and professional A/V industries. StarTech.com services a worldwide market with operations throughout the United States, Canada, Europe, Latin America and Taiwan.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Kim Ki-Nam",
                owner_number: "013423243443",
                shop_name: "Samsung",
                email: "akhaliasambd@gmail.com" ,
                description: "Samsung helps you discover a wide range of home electronics with cutting-edge technology including smartphones, tablets, TVs, home appliances and more.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Manish Grover",
                owner_number: "01834545454",
                shop_name: "Tasty Treat",
                email: "ttsylhetbd@gmail.com" ,
                description: "Delicious meals delivered fresh to your doorstep. Browse our menu and order online! What are you hungry for today",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Erik Aas",
                owner_number: "01234566754",
                shop_name: "Banglalink",
                email: "blinkbd@gmail.com" ,
                description: "Banglalink Digital Communications Ltd. is a telecommunication service provider in Bangladesh. It's the third-largest cellular service provider in Bangladesh.",
              },
              {
                lattitude: 25.66,
                longitude: 24.33,
                owner_name: "Paul Seed",
                owner_number: "01634566754",
                shop_name: "StarTech",
                email: "stechbd@gmail.com" ,
                description: "StarTech.com is an technology manufacturer, specializing in hard-to-find connectivity parts, primarily used in the information technology and professional A/V industries. StarTech.com services a worldwide market with operations throughout the United States, Canada, Europe, Latin America and Taiwan.",
              },
            ];
          } else {
            vm.shops = data;
          }
          console.log(data);
          // dataRef={...data};
          // console.log(dataRef);
        },
        (err) => {
          toast.error(err);
        },
        { searchKyeWord: vm.searchKyeWord }
      );
    },
  },
};
</script>
<style>
.extra2:hover {
  height: 18px;
  width: 18px;
  cursor: pointer;
}

.extra2 {
  height: 15px;
  width: 15px;
  cursor: pointer;
}
.homeViewOptions {
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.extra1:hover {
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
