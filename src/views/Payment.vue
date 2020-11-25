<template>
  <div class="home">
    <Heading msg="Betaalmethode"/>
    <Description msg="Klik op een betaalmethode"/>
    <Wallet />
  </div>
</template>

<script>

import Heading from '@/components/Heading.vue'
import Description from '@/components/Description.vue'
import Wallet from '@/components/Wallet.vue'

console.log(localStorage)

export default {
  name: 'Payment',
  components: {
    Heading,
    Description,
    Wallet
  } 
}
</script>
