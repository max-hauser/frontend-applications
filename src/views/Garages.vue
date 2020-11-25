<template>
  <div class="home">
    <Heading msg="Beschikbare Garages"/>
    <Description msg="Hover over een stip voor meer informatie"/>
    <Map />
    <router-link to="/"><Button msg="Terug naar home"/></router-link>
  </div>
</template>

<script>

import Button from '@/components/Button.vue'
import Heading from '@/components/Heading.vue'
import Description from '@/components/Description.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Capacity',
  components: {
    Button,
    Heading,
    Description,
    Map
  }
}
</script>
