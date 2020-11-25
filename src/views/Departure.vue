<template>
  <div class="home">
    <Heading msg="Vertrekken"/>
    <Description msg="Wanneer wil je weg kunnen rijden?"/>
    <Clock />
  </div>
</template>

<script>

import Heading from '@/components/Heading.vue'
import Description from '@/components/Description.vue'
import Clock from '@/components/Clock.vue'

export default {
  name: 'Capacity',
  components: {
    Heading,
    Description,
    Clock
  }
}
</script>
