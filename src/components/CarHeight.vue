<template>
  <div class='carHeight'>
    <h1>Car</h1>
    <p>
      Kies je auto.
    </p>

    <h2>Selecteer een auto</h2>

    <div class="cars">
      <img src="../assets/supercar.svg" alt="supercar" @click="carHeight" data-carheight="130">
      <img src="../assets/sedan.svg" alt="sedan" @click="carHeight" data-carheight="150">
      <img src="../assets/suv.svg" alt="suv" @click="carHeight" data-carheight="180">
      <img src="../assets/van.svg" alt="van" @click="carHeight" data-carheight="220">
    </div>

    <div class="electric">
      <p>Electrisch</p> 
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>      
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
    min-height: 10vh;
    margin-left: -5000px;
    animation: slide 3.5s ease forwards;
  }

  .cars img{
    width: 10vw;
  }


.slider.round:before {
  border-radius: 50%;
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

@keyframes slide{
  from{margin-left: -1000px; opacity: 0;}
  to{margin-left: 0px; opacity: 1;}
}

/*

CODE INSPIRED BY W3SCHOOLS:
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch

*/

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: greenyellow;
}

input:focus + .slider {
  box-shadow: 0 0 1px greenyellow;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>