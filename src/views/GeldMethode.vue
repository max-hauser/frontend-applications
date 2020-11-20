<template>
  <div class="geldmethode">
    <Payment />
  </div> 
</template>

<script>
// @ is an alias to /src
import Payment from '@/components/Payment.vue'

export default {
  name: 'GeldMethode',
  components: {
    Payment
  }
}
</script>