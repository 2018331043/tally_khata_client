<script setup>
import "bootstrap";
const props = defineProps({
  shopFlag: Boolean,
});

const emit = defineEmits(["response"]);

const shopAddButtonClicked = () => {
  // console.log("Im add shop modal");
  emit("response", false);
};
console.log(props.shopFlag);
</script>
'
<template>
  <div v-if="props.shopFlag" class="modalBody">
    <div class="modalCenter">
      <button @click="shopAddButtonClicked" class="closeButton">X</button>
      <h2>Add Your Shop</h2>
      <div class="inputBox1">
        <label for="inp" class="inp">Shop Name</label>
        <input v-model="shopName" type="text" id="inp" placeholder="" />
      </div>
      <div class="inputBox1">
        <label for="inp" class="inp">Phone Number</label>
        <input v-model="shopNumber" type="text" id="inp" placeholder="" />
      </div>
      <div class="inputBox1">
        <label for="inp" class="inp">Short Description</label>
        <textarea v-model="shopDescription" :style="{ resize: 'none' }"> </textarea>
      </div>
      <div class="AddShopModalContainer">
        <div class="shopCardButton">
          <img
            alt="location"
            class="imgFind"
            src="@/icons/placeholder.png"
            width="20px"
            height="20px"
          />
          <a href="#" class="card-link">Location</a>
        </div>
        <div class="shopCardButton">
          <img
          :style="{marginLeft:'20px'}"
          class="imgFind"
            alt="location"
            src="@/icons/shops.png"
            width="15px"
            height="15px"
          />
          <a href="#" @click="shopAddButtonClicked" class="card-link"
            >Add a Shop</a
          >
        </div>
      </div>
    </div>
    <!-- <button @click="wowClicked"></button> -->
  </div>
</template>
<script>
import toast from "../../service/toast.service";
import shopService from "../../service/shop.service";

export default {
  name: "AddShopModa",
  data() {
    return {
      shopName: null,
      shopNumber: null,
      shopDescription: null,
    };
  },
  mounted() {},
  methods: {
    addShopForOwner() {
      var data={
        shop_number:this.shopNumber,
        description:this.shopDescription,
        name:this.shopName
      }
      shopService.addShopForOwner(
          (data) => {
            shopAddButtonClicked();
          },
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
.imgFind{
  height: 20px;
  width:20px;
}

.shopCardButton {
  display: flex;
  align-items: center;
}

.AddShopModalContainer{
  margin: 10px;
  display: flex;
  /* flex-direction: column; */
}

.shopCardButton img {
  margin-right: 8px;
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

textarea {
  width: 100%;
  height: 120px;
  padding: 8px 8px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
.inputBox1 {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.inputBox1 input {
  height: 2rem;
}

.inputBox1 label {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px;
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

.modalCenter {
  height: 500px;
  width: 400px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
