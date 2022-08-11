<script>
import { ref } from "vue";

</script>

<template>
  <div class="DebtViewContainer">
    <h3>ABDUR RAHMAN</h3>
    <div class="debtViewSpan"></div>
    <div class="debtViewSpanSecond"></div>
    <p>He bought a laptop, a speaker and some other stuffs.</p>
    <div class="debtViewSpanSecond1"></div>
    <div class="debtViewFooter">
      <div>
        <h6>Amount: 5000</h6>
      </div>
      <div class="debtViewSpanSpecial"></div>
      <div class="debtViewFooterRight">
        <img
          :style="{ width: '20px', height: '20px', marginRight: '3px' }"
          src="../icons/smartphone.png"
          alt="phone"
        />
        <h6>01623423423</h6>
      </div>
    </div>
  </div>
</template>

<style>
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
