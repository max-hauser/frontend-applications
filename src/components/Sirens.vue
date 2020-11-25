<template>
  <div class="sirens">
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
  name: 'Sirens',

}
</script>

<style scoped>
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
  position: relative;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 1000px blue;
  margin-right: -130px;
  float: right;
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