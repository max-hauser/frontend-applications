<template>
  <p>{{msg}}<strong>{{str}}</strong></p>
</template>

<script>
export default {
  name: 'Description',
  props: {
    msg: String,
    str: String,
  }
}
</script>

<style scoped>
p{
  color: #fff;
  font-size: 1em;
}
</style>