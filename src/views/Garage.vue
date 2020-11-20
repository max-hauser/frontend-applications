<template>
  <div class="garage">
    <GarageMap />
  </div> 
</template>

<script>
// @ is an alias to /src
import GarageMap from '@/components/GarageMap.vue'

export default {
  name: 'Garage',
  components: {
    GarageMap
  }
}
</script>