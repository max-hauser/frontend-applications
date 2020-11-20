<template>
  <div class='carHeight'>
    <h1>Car Height</h1>
    <p>
      Kies de grootte van de auto.
    </p>

    <h2>Selecteer een auto</h2>

    <div class="cars">
      <img src="../assets/supercar.svg" alt="supercar" @click="carHeight" data-carheight="130">
      <img src="../assets/sedan.svg" alt="sedan" @click="carHeight" data-carheight="150">
      <img src="../assets/suv.svg" alt="suv" @click="carHeight" data-carheight="180">
      <img src="../assets/van.svg" alt="van" @click="carHeight" data-carheight="220">
    </div>

    <router-link to="/availability"><button>Openingstijden</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'CarHeight',
  methods: {
    carHeight: (event) => {
      document.querySelector('h2').innerHTML = "Hoogte auto in cm: " + event.target.dataset['carheight'];
      const allCars = document.querySelectorAll('.cars img');
      allCars.forEach((car)=>{ car.style.fill = "a8a8a8"; });
      event.target.style.backgroundcolor = "blue";
      console.log(event.target);
    }
  }
}
</script>

<style>
  .cars{
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    margin: 50px 0px 100px 0px;
  }

  .cars img{
    width: 10vw;
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