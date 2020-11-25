<template>
  <div>
    <h2>Aantal parkeerplekken: <span>500</span></h2>
    <div class="scrollField" @wheel="zoom"></div>
    <router-link to="/carheight" @click="saveData"><Button msg="Auto hoogte"/></router-link>
  </div>
</template>

<script>
import parkeerData from '../scripts/modules/parkeerData.js'
import Button from '@/components/Button.vue'

export default {
  name: 'ParkingSpots',
  data (){
    return {
    minCapacity : 0, 
    maxCapacity : 0
    }
  },
  components: {
    Button
  },
  methods: {
    zoom(event) {
    const viewScale = document.querySelector('h2 span')
    event.preventDefault();

      scale += event.deltaY * 1;

      const upperLimit = this.maxCapacity;
      const lowerLimit = this.minCapacity;

      // Restrict scale
      scale = Math.min(Math.max(lowerLimit, scale), upperLimit);

      // Apply scale transform
      event.target.style.backgroundSize = `${scale}` + 'px'; 

      const textScale = (upperLimit+lowerLimit) - scale; //Maths

      viewScale.innerHTML = textScale;
    },
    saveData(event){
      event.preventDefault();
      const capacity = parseInt(document.querySelector('h2 span').textContent);
      
      localStorage.setItem('Capacity', capacity);
      this.$router.push('/carheight');
    },
    async getParkeerData(){
      const data = await parkeerData();
      const capaciteit = data.map(locatie => locatie.specificaties.capaciteit);
      const min = Math.min(...capaciteit);
      const max = Math.max(...capaciteit);
      this.minCapacity = min;
      this.maxCapacity = max;
    } 
  },
  created(){
    this.getParkeerData();
  }
}
let scale = 500;
</script>

<style scoped>
  .scrollField{
    height: 50vh;
    width: 80vw;
    background: url('../assets/parkinglot.svg');
    background-position: center;
    background-size: 500px;
    margin: 0 auto;
  }

  h2{
    color: #fff;
  }
</style>