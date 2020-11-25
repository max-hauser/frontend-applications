<template>
  <button>{{msg}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String
  }
}
</script>

<style scoped>
button{
  background-color: #e94560;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 20vh;
  box-shadow: 0px 0px 50px 10px #050c1f;
  left: 0;
  max-width: 50%;
  margin: 10vh auto;
  display: block;
  transition: 0.3s;
  border-radius: 8px;
}

button:hover{
  cursor: pointer;
  background-color: #b8374d;
}
</style>