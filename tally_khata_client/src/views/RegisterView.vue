<template>

    <div class="signupWrapper">
   <div class="signupwrap">
       <div class="Signuptitle">
            Sign Up
       </div>
       <div class="signupshade">

       </div>
       <div class="SignupBody">
           <div class="inputBox">
                <label for="inp" class="inp">Full Name</label>
                <input type="text" id="inp" placeholder="John Doe" v-model="user_name">
           </div>
           <div class="inputBox">
                <label for="inp" class="inp">Email</label>
                <input type="text" id="inp" placeholder="example@gmail.com" v-model="email">
           </div>
            <div class="inputBox">
                <label for="inp" class="inp">Password</label>
                <input type="password" id="inp" placeholder="password" v-model="password_hash">
            </div>
            <div class="inputBox">
                <label for="inp" class="inp">Phone Number</label>
                <input type="text" id="inp" placeholder="01**********" v-model="phone_number">
           </div>
       </div>
       <div class="signupfooter">
            <button type="button" class="button-9" role="button" @click="signUp()">Create an account</button>
       </div>
   </div>
   </div>
</template>
<script>
import authService from "../../service/auth.service";
import toast from "../../service/toast.service";
export default {
  name: "RegisterView",
  data() {
    return {
      phone_number:null,
      user_name:null,
      email:null,
      password_hash:null
    };
  },
  async created() {
    this.getBlogDetails();
  },
  components: {

  },
  methods: {
    signUp() {
      var data={
        phone_number:this.phone_number,
        user_name:this.user_name,
        email:this.email,
        password_hash:this.password_hash
      }
      authService.signUp((data) => {
        toast.success('Account Created');
        console.log('Hello world')
      }, (err) => {
        toast.error(err);
      },data)
    },
  },
  mounted() {

  },
};
</script>
<style>
.signupWrapper{
    position: relative;
    background: rgba(255,152,17, .5);
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 100px;
}
.signupshade{
    margin-top: 10px;
    margin-bottom: 15px;
    width: 100px;
    height:5px;
    background: black;
}

.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}
    .signupBody{

    }
    .inputBox{
        width:300px;
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    .inputBox input{
        height:2rem;
    }

    .inputBox label{
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .signupwrap{
        position: relative;
        z-index: 100;
        align-self: center;
        height:550px;
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 65%;
        min-width: 340px;
        /* background: rgba(255, 255, 255, 0.185); */
        background: rgb(255, 255, 255);
        border-radius: 10px;
        /* box-shadow: rgba(0,109,240, 0.1) 0px 4px 12px; */
        box-shadow: rgba(0, 0, 0, 0.2) 0px 54px 55px, rgba(0, 0, 0, 0.12)
        0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .Signuptitle{
        margin-top: 25px;
        font-family: sans-serif;
        font-weight: bolder;
        font-size: 2.5em;
    }


</style>