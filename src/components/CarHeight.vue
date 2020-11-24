<template>
  <div class='carHeight'>
    <h1>Car</h1>
    <p>
      Kies je auto.
    </p>

    <h2>Selecteer een auto<span></span></h2>

    <div class="cars">
      <img src="../assets/supercar.svg" alt="supercar" @click="carHeight" data-carheight="130">
      <img src="../assets/sedan.svg" alt="sedan" @click="carHeight" data-carheight="150">
      <img src="../assets/suv.svg" alt="suv" @click="carHeight" data-carheight="180">
      <img src="../assets/van.svg" alt="van" @click="carHeight" data-carheight="220">
    </div>

    <div class="electric">
      <p>Elektrisch</p> 
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>      
    </div>

    <router-link to="/availability" @click="safeData"><button>Openingstijden</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'CarHeight',
  methods: {
    carHeight: (event) => {
      document.querySelector('h2').style.color = "white";
      document.querySelector('h2').innerHTML = `Hoogte auto in cm: <span></span>`;
      document.querySelector('h2 span').innerHTML =  event.target.dataset['carheight']
    },
    safeData(event){     
      event.preventDefault();
      const carHeight = parseInt(document.querySelector('h2 span').innerHTML);
      localStorage.setItem('CarHeight', carHeight);

      const electricBtn = document.querySelector('input').checked;
      localStorage.setItem('electric', electricBtn);
      console.log(localStorage)
      if(localStorage.CarHeight != "NaN"){
        this.$router.push('/availability');
      }else{
        console.log('show error message');
        document.querySelector('h2').innerHTML = "Selecteer een auto";
        document.querySelector('h2').style.color = "red";
      }
      
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