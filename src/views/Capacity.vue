<template>
  <div class="home">
    <Heading msg="Capaciteit"/>
    <Description msg="Kies de grootte van de garage. (scroll op parkeerplek)"/>
    <ParkingSpots />
  </div>
</template>

<script>

import Heading from '@/components/Heading.vue'
import Description from '@/components/Description.vue'
import ParkingSpots from '@/components/ParkingSpots.vue'

export default {
  name: 'Capacity',
  components: {
    Heading,
    Description,
    ParkingSpots
  }
}
</script>
