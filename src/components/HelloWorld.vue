<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Je hebt net een bank overvallen en bent op de vlucht. <strong>Waar laat je de auto?!</strong>
    </p>
    <button>Stash je auto!</button>

    <div class="police-light-left">
      <div></div>
    </div> 
    <div class="police-light-right">
      <div></div>
    </div>        
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button{
  background-color: #e94560;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 10vh;
  box-shadow: 0px 0px 50px 10px #050c1f;
  left: 0;
}



div.police-light-left{
  width: 100px;
  height: 50vh;
  position: absolute;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 1000px red;
  left: -100px;
  top: 50vh;
  animation: leftLight 1s infinite;
}

div.police-light-right{
  width: 100px;
  height: 50vh;
  position: absolute;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 1000px blue;
  right: -100px;
  top: 50vh;
  animation: rightLight 1s infinite;
}

@keyframes leftLight{
  0% {box-shadow: 0px 0px 1000px blue;}
  50% {box-shadow: 0px 0px 500px red;}
  100% {box-shadow: 0px 0px 1000px blue;}
}

@keyframes rightLight{
  0% {box-shadow: 0px 0px 500px red;}
  50% {box-shadow: 0px 0px 1500px blue;}
  100% {box-shadow: 0px 0px 500px red;}
}

</style>