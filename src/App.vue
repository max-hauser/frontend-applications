<template>
  <div>
    <div id="nav">
      <router-link to="/" @click="cleanStorage"><img src="./assets/home-icon.svg"></router-link>
    </div>

      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    cleanStorage: function (event) {
      event.preventDefault();
      localStorage.clear();
      console.log(this);
      this.$router.push('/');
    }
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
}

#nav {
  padding: 30px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav img{
  width: 32px;
  height: 32px;
}
</style>
