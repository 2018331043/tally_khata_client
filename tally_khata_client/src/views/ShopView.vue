<script setup>
import { ref } from "vue";
import DebtView from "../components/DebtView.vue";
import DebtModal from "../components/DebtModal.vue";
// import DemoModal from '../components/demoModal.vue'

const shopName = ref("");
const shopOwner = ref("");
const ShopEmail = ref("");
let shop = "Alpha Tech Private Limited";
let shopO = "Abdur Rahman";
let shopE = "introvertstr@gmail.com";
shopName.value = shop.toUpperCase();
shopOwner.value = shopO.toUpperCase();
ShopEmail.value = shopE;

const addLoanClickedFlag = ref(false);

const AddLoanClicked = () => {
  // console.log('add loan clicked')
  addLoanClickedFlag.value = true;
};

// const debtModalClose = () => {
//   addLoanClickedFlag.value = false;
//   this.getShopInfo();


// };

//demo modal functionality
// const demoModalFlag = ref(false)

// const demoModalClose = () => {
//     demoModalFlag.value=false;
// }

// const demoModalClicked = () =>{
//     demoModalFlag.value=true;
// }
</script>

<template>
  <div class="shopViewContainer">
    <DebtModal :debtFlag="addLoanClickedFlag" @responseDebt="debtModalClose" :shopNumber="shopNumber"/>
    <!-- <DemoModal :demoFlag= "demoModalFlag" @responsedemo="demoModalClose" /> -->
    <div class="shopViewHead">
      <div class="shopViewHeadLeft" v-if="shopInfo">
        <h1>{{ shopInfo.shop_name }}</h1>
        <h6>Owner: {{ shopInfo.owner_name }}</h6>
        <h7>{{ shopInfo.owner_number }}</h7>
      </div>
      <div class="shopViewHeadRight">
        <div class="shopViewSearchContainer">
          <img :style="{height:'20px',width:'20px'}" src="../icons/search.png"/>
          <input type="text"
                 placeholder="search here"
                 v-model="searchKyeWord"
                 v-on:keyup.enter="getShopInfo"
          />
        </div>
      </div>
    </div>
    <div class="shopViewBody">
      <div class="shopViewSidebar">
        <div class="shopViewSidebarItems">
          <p>Debts to Collect</p>
          <p @click="AddLoanClicked">Add Debt</p>
        </div>
      </div>
      <div class="shopViewDebtList">
        <div class="shopViewDebtListBody">


          <template v-for="debtorInfo in debtList">
            <div class="DebtViewContainer">
              <h3>{{ debtorInfo.customer_name }}</h3>
              <div class="debtViewSpan"></div>
              <div class="debtViewSpanSecond"></div>
              <p>{{ debtorInfo.description }}.</p>
              <div class="debtViewSpanSecond1"></div>
              <div class="debtViewFooter">
                <div>
                  <h6>Amount: {{ debtorInfo.amount }}</h6>
                </div>
                <div class="debtViewSpanSpecial"></div>
                <div class="debtViewFooterRight">
                  <img
                      :style="{ width: '20px', height: '20px', marginRight: '3px' }"
                      src="../icons/smartphone.png"
                      alt="phone"
                  />
                  <h6>{{ debtorInfo.customer_phone_number }}</h6>
                </div>
              </div>
            </div>
          </template>
<!--          <DebtView />-->
<!--          <DebtView />-->
<!--          <DebtView />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopService from "../../service/shop.service";
import toast from "../../service/toast.service";
export default {
  props: ["shopNumber"],
  data() {
    return {
      dataLoaded: true,
      debtList : [],
      shopInfo: null,
      searchKyeWord : null,
    };
  },
  async created() {
    this.getShopInfo();
    console.log(this.shopNumber);
  },
  methods:{
    debtModalClose() {
      this.addLoanClickedFlag = false;
      this.getShopInfo();

    },
    getShopInfo() {
      console.log('asdasd')
      shopService.getShopInfo((data)=>{
        toast.success('Loaded the shop info successfully');
        this.shopInfo = data.shopDetails;
        this.debtList = data.shopDebtresult;
      },(err)=>{
        toast.error('Error Loading the data for the shop info')
      },{
        shop_number:this.shopNumber,
        searchKeyWord: this.searchKyeWord
      })
    },
  }
};
</script>

<style>
.shopViewSearchContainer input{
  margin-left: 10px;
  width: calc(100% - 40px);
  border: none;
  background: none;
  border-radius: 10px;
  height: 40px;
  padding-left: 10px;
}
.shopViewSearchContainer img{
  margin-left: 10px;
}

.shopViewSearchContainer{
  align-items: center;
  display: flex;
  background: rgba(255, 255, 255, 0.815);
  width: 60%;
  height: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07)
  0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07)
  0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
.shopViewHeadRight {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 50px;
}
.shopViewDebtListBody {
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
  margin-top: 30px;
  /* margin-right: 20px; */
}

.shopViewSidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
.debtViewSpanSpecial {
  margin-bottom: 5px;
  width: 20px;
  height: 4px;
  border-radius: 10px;
  background: rgb(7, 7, 44);
}

.debtViewFooterRight {
  display: flex;
}
.debtViewFooter {
  width: calc(100% - 30px);
  display: flex;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
  height: 40px;
  align-items: center;
  justify-content: space-around;
}
.debtViewSpanSecond1 {
  margin-top: 10px;
  margin-left: 15px;
  width: 95%;
  height: 1px;
  background: black;
}
.DebtViewContainer p {
  margin-top: 10px;
  margin-left: 15px;
  height: 45px;
  margin-right: 5px;
}
.debtViewSpanSecond {
  margin-top: 10px;
  margin-left: 15px;
  width: 55%;
  height: 4px;
  background: black;
}
.debtViewSpan {
  margin-top: 5px;
  margin-left: 15px;
  width: 25%;
  height: 4px;
  background: rgba(253, 98, 68, 1);
}
.DebtViewContainer h3 {
  margin-top: 20px;
  margin-left: 15px;
}

.DebtViewContainer {
  align-items: flex-start;
  margin-left: 10px;
  margin-top: 10px;
  min-width: 550px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: 10px;
  border-radius: 15px;
  width: 100%;
  height: 200px;
  background: rgb(255, 255, 255);
}
</style>
