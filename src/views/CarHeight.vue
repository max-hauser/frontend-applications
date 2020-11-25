<template>
  <div class="home">
    <Heading msg="Hoogte van de auto"/>
    <Description msg="Klik op het autotype waarmee je de bank overvalt."/>
    <CarType />
  </div>
</template>

<script>

import Heading from '@/components/Heading.vue'
import Description from '@/components/Description.vue'
import CarType from '@/components/CarType.vue'

export default {
  name: 'CarHeight',
  components: {
    Heading,
    Description,
    CarType
  }
}
</script>