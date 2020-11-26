<template>
  <div>
    <p class="userData"></p>

    <p class='info'></p>
    <Sirens v-if="showSirens"/>
    <div id="map">
      <svg width="1200" height="500" />
    </div>
  </div>
</template>

<script>
import filterGarages from "../scripts/modules/filterGarages.js";
import Sirens from "./Sirens.vue";

export default {
  name: "Map",
  data () {
    return {
      showSirens : false
    }
  },
  components: {
    Sirens
  },
  async mounted () {
    const Capacity =  parseInt(localStorage.Capacity);
    const carHeight = parseInt(localStorage.CarHeight);
    const availability = parseInt( localStorage.availability );
    const electric = localStorage.electric;
    const payment =  localStorage.payment.toUpperCase();

    let electricCar = Boolean;

    if (electric == true) {
      electricCar = 1;
    } else {
      electricCar = 0;
    }

    document.querySelector(".userData").innerHTML = `Capacity: ${Capacity}
    carHeight: ${carHeight} availability: ${availability} electric: ${electric} payment: ${payment}`;

  const data = {
      betaalmethode: payment,
      altijdWegrijden: "1",
      altijdOpen: "1",
      capaciteit: Capacity,
      maximaleVoertuigHoogte: carHeight,
      opladen: electricCar
    }

    const resultCheck = await filterGarages(data);
    
    if(resultCheck === false){
      document.querySelector(".info").innerHTML = "Er is geen ontsnapping mogelijk! Geef jezelf maar alvast aan.";
      this.showSirens = true;
    }
  }
};
</script>

<style>

.garage svg {
  width: 800px;
  height: 500px;
  max-width: initial;
  border: 1px dashed #e8e8e8;
}
</style>