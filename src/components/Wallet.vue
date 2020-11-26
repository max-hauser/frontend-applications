<template>
<div>
  <SvgHandler name="wallet" @mouseover="showMethod" />
  <router-link to="/garages" @click="saveData"><Button msg="Bekijk garages"/></router-link>
</div>
</template>

<script>

import Button from '@/components/Button.vue'

import SvgHandler from './SvgHandler.vue'

export default {
  name: 'Wallet',
  components: {
    Button,    
    SvgHandler
  },
  methods: {
    saveData(event){
      event.preventDefault();
      console.log(localStorage)
      const payment = document.querySelector('p').innerHTML;
      const possiblePayments = ['cash', 'visa', 'pin', 'creditcard'];
      if(possiblePayments.includes(payment)){
        localStorage.setItem('payment', payment);
        this.$router.push('/garages');        
      }else{
        document.querySelector('p').style.color = "red";
        document.querySelector('p').innerHTML = "Selecteer een geldige betaalmethode";
      }
    },
    showMethod(event){
      if(event.target.closest('g') != null && event.target.closest('g').id != "wallet"){
        document.querySelector('p').innerHTML = event.target.closest('g').id;
      }
    }
  }   
}
</script>

<style>

</style>