<template>
  <div class="garagemap">
    <h1>Beschikbare Garages</h1>

    <p class="userData"></p>

    <p class='info'>Hover over een stip voor meer informatie</p>

    <div id="map">
      <svg width="1200" height="800" />
    </div>
  </div>
</template>

<script>
import filterGarages from "../scripts/modules/filterGarages.js";

export default {
  name: "GarageMap",
  mounted: () => {
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
    carHeight: ${carHeight} availability: ${availability} electric: ${electric}`;

    filterGarages({
      betaalmethode: payment,
      altijdWegrijden: "1",
      altijdOpen: "1",
      capaciteit: Capacity,
      maximaleVoertuigHoogte: carHeight,
      opladen: electricCar
    });
  }
};
</script>

<style>
body {
  overflow: auto;
}

.garage svg {
  width: 800px;
  height: 500px;
  max-width: initial;
  border: 1px dashed #e8e8e8;
}
</style>