<template>
  <div class='carAmount'>
    <h1>Car amount</h1>
    <p>
      Kies de grootte van de garage. (scroll op parkeerplek)
    </p>

    <h2>Aantal parkeerplekken: <span>500</span></h2>

    <div class="scrollField" @wheel="zoom">
    </div>

    <router-link to="/carheight" @click="safeData"><button>Auto hoogte</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'CarAmount',
  methods: {
    zoom(event) {
    const viewScale = document.querySelector('h2 span')
    event.preventDefault();

      scale += event.deltaY * 1;

      const upperLimit = 1000;
      const lowerLimit = 200;

      // Restrict scale
      scale = Math.min(Math.max(lowerLimit, scale), upperLimit);

      // Apply scale transform
      event.target.style.backgroundSize = `${scale}` + 'px'; 

      const textScale = (upperLimit+lowerLimit) - scale; //Maths

      viewScale.innerHTML = textScale;
    },
    safeData(event){
      event.preventDefault();
      const capacity = parseInt(document.querySelector('h2 span').textContent);
      
      localStorage.setItem('Capacity', capacity);
      this.$router.push('/carheight');
    } 
  }
}
let scale = 500;

</script>

<style scoped>

.carAmount{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.scrollField{
  height: 50vh;
  width: 80vw;
  background: url('../assets/parkinglot.svg');
  background-position: center;
  background-size: 500px;
  margin: 0 auto;
}

button{
  background-color: #e94560;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 10vh;
  box-shadow: 0px 0px 50px 10px #050c1f;
  left: 0;
  max-width: 50%;
  margin: 5vh auto;
}
</style>