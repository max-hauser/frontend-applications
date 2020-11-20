<template>
  <div class="capacity">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <CarAmount />
  </div> 
</template>

<script>
// @ is an alias to /src
import CarAmount from '@/components/CarAmount.vue'

export default {
  name: 'Capacity',
  components: {
    CarAmount
  }
}
</script>