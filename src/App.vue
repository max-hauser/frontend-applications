<template>
  <div>
  <div id="nav">
    <router-link to="/"><img src="./assets/home-icon.svg" width="100px" height="100px"></router-link>
  </div>
  <transition name="slide">
    <router-view></router-view>
  </transition>
  </div>
</template>

<style>

body{
  margin: 0;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #1a1a2e;
  min-height: 100vh;
  overflow: hidden;
}

#nav {
  padding: 30px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav img {
    width: 30px;
    height: 30px;
}

a{
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

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
}

button:hover{
  cursor: pointer;
  background-color: #b8374d;
}
</style>
