<template>
  <div>
    <div class="time-wrapper">

        <div class="input-wrapper">
          <button class="add-hour" @click="changeNumber">+</button>
          <input type="number" name="hour" id="hour" min="00" max="23" value="21">
          <button class="minus-hour" @click="changeNumber">-</button>
        </div>

        <div class="input-wrapper">
          <button class="add-minute" @click="changeNumber">+</button>
            <input type="number" name="minutes" id="minutes" min="00" max="60" value="00">
          <button class="minus-minute" @click="changeNumber">-</button>
        </div>

    </div>  
    <router-link to="/payment" @click="saveData"><Button msg="Betaalmethode"/></router-link>    
  </div>
</template>

<script>

import Button from '@/components/Button.vue'

console.log(localStorage)

export default {
 name: 'Clock',
 components: {
   Button
 },
methods: {
    changeNumber: function(event){

      const hour = document.querySelector('#hour');
      const minute = document.querySelector('#minutes');

      if(event.target.className == "add-minute"){
        if(minute.value < 59){
          minute.value++;
        }
      }else if(event.target.className == "minus-minute"){
        if(minute.value > 0){
          minute.value--;
        }
      }else if(event.target.className == "add-hour"){
        if(hour.value < 23){
          hour.value++;
        }
      }else if(event.target.className == "minus-hour"){
        if(hour.value > 0){
          hour.value--;
        }
      }
    },
  saveData(event){
    event.preventDefault();
    const hour = document.querySelector('#hour').value;
    const minute = document.querySelector('#minutes').value;
    const time = hour + ":" + minute;
    localStorage.setItem('availability', time);
    this.$router.push('/payment');
  }      
  }
}
</script>

<style scoped>
input{
  width: 15vw;
  height: 15vh;
  box-shadow: 0px 0px 10px #000 inset;
  font-size: 3em;
  text-align: center;
  margin: 0px;
  border: none;
  border-radius: 0px;
  background: #141423;
  color: #fff;
  position: relative;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-wrapper:after{
    content: '';
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    top: 25%;
    z-index: 999;
}

.input-wrapper{
    max-width: 20vw;
    margin: 50px auto;  
    position: relative;
}

.input-wrapper button {
    background: #141423;
    margin: 0px auto;
    color: #fff;
    border-radius: 0px;
    width: 81%;
    max-width: initial;
    box-shadow: none;
    padding: 10px;
    border: none;
}

.time-wrapper {
    display: flex;
    width: 40vw;
    margin: 0 auto;
}
</style>