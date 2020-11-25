<template>
  <div>
    <h2>
      Selecteer een auto
      <span></span>
    </h2>

    <div class="cars">
      <SvgHandler name="supercar" @click="carHeight"/>
      <SvgHandler name="sedan" @click="carHeight"/>
      <SvgHandler name="suv" @click="carHeight"/>
      <SvgHandler name="van" @click="carHeight"/>
    </div>

    <div class="electric">
      <p>Elektrisch</p>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>

    <router-link to="/departure" @click="saveData">
      <Button msg="Openingstijden" />
    </router-link>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import SvgHandler from "./SvgHandler.vue";

console.log(localStorage);

export default {
  name: "CarType",
  components: {
    Button,
    SvgHandler
  },
  methods: {
    carHeight: event => {
      document.querySelector("h2").style.color = "white";
      document.querySelector(
        "h2"
      ).innerHTML = `Hoogte auto in cm: <span></span>`;

      let carElement = event.target;
      if(event.target.dataset["carheight"] === undefined){
        const parent = event.target.closest('svg');
        carElement = parent;
        document.querySelector("h2 span").innerHTML = parent.dataset["carheight"];
      }else{
        document.querySelector("h2 span").innerHTML = event.target.dataset["carheight"];
      }

      const allCars = document.querySelectorAll(".car");
      allCars.forEach(car => {
        if (car.classList.contains('clicked')) {
          car.classList.remove("clicked");
        }
        carElement.classList.add("clicked");
      });
    },
    saveData(event) {
      event.preventDefault();
      const carHeight = parseInt(document.querySelector("h2 span").innerHTML);
      localStorage.setItem("CarHeight", carHeight);

      const electricBtn = document.querySelector("input").checked;
      localStorage.setItem("electric", electricBtn);
      console.log(localStorage);
      if (localStorage.CarHeight != "NaN") {
        this.$router.push("/departure");
      } else {
        console.log("show error message");
        document.querySelector("h2").innerHTML = "Selecteer een auto";
        document.querySelector("h2").style.color = "red";
      }
    }
  }
};
</script>

<style>
h2 {
  color: #fff;
}

.cars {
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0px 100px 0px;
  min-height: 10vh;
  margin-left: -5000px;
  animation: slide 3.5s ease forwards;
}

.cars img {
  width: 10vw;
}

.cars img:hover {
  cursor: pointer;
}

.cars img.clicked {
  transition: 0.5s;
  padding-bottom: 10px;
  box-shadow: 0px 15px 5px -15px #fff;
}

.slider.round:before {
  border-radius: 50%;
}

@keyframes slide {
  from {
    margin-left: -1000px;
    opacity: 0;
  }
  to {
    margin-left: 0px;
    opacity: 1;
  }
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
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