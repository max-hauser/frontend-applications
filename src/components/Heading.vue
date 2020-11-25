<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    msg: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
h1{
  color: #fff;
  font-size: 3em;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>