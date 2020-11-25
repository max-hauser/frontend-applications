<template>
  <div class="home">
    <Heading msg="AmsterHeist"/>
    <Description msg="Je hebt net een bank overvallen en bent op de vlucht." str=" Waar laat je de auto?!"/>
    <router-link to="/capacity"><Button msg="Stash de auto!"/></router-link>
    <Sirens />
  </div>
</template>

<script>

import Button from '@/components/Button.vue'
import Heading from '@/components/Heading.vue'
import Description from '@/components/Description.vue'
import Sirens from '@/components/Sirens.vue'

export default {
  name: 'Home',
  components: {
    Button,
    Heading,
    Description,
    Sirens
  },mounted: () => {
    localStorage.clear();
  }
}
</script>
