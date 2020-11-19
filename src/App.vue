<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <HelloWorld msg="Amsterheist"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}

body{

  background: url('/assets/parkinglot.svg'), #1a1a2e;
  background-size: cover;
  background-color: #1a1a2e;
  overflow: hidden;
  /*
  #1a1a2e
  #16213e
  #0f3460
  #e94560
  */


}

@font-face {
  font-family: 'kitchen-police';
  src: url("./assets/fonts/kitchen-police.regular.ttf");
}

h1 {
  font-family: 'kitchen-police';
  font-size: 8vw
}
</style>
