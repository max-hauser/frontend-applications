<template>
  <div class="maxCarHeight">
    <CarHeight />
  </div> 
</template>

<script>
// @ is an alias to /src
import CarHeight from '@/components/CarHeight.vue'

export default {
  name: 'MaxCarHeight',
  components: {
    CarHeight
  }
}
</script>