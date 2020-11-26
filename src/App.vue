<template>
  <div>
    <div id="nav">
      <router-link to="/" @click="cleanStorage"><img src="./assets/home-icon.svg"></router-link>
      <div class="information" @click="showInformation">i</div>
    </div>
      <div class="projectinfo" v-if="readable">
        <h3>AmsterHeist</h3>

        AmsterHeist is a project of the Tech Track.
        The theme of this project is based around a bankheist.
        This concept shows the available parking garages based on the preferences of the user.

        <hr>

        To view the code of this project go to <a href="https://github.com/max-hauser/frontend-applications" target="_blanck">my Github</a>.
      </div>
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      readable: false
    };
  },
  methods: {
    cleanStorage: function (event) {
      event.preventDefault();
      localStorage.clear();
      console.log(this);
      this.$router.push('/');
    },
  showInformation() {
    this.readable = !this.readable
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.information {
    background-color: #fff;
    padding: 3px;
    height: auto;
    border-radius: 100px;
    font-weight: bolder;
    font-size: 1.5em;
    width: 30px;
    color: #1A1A2E;
    margin: 0px;
    transition: 0.3s;
}

.information:hover{
  background-color: #B8374D;
  cursor: pointer;
}

.projectinfo{
    padding: 10px;
    background: rgba(225,225,225,1);
    box-shadow: 0px 0px 10px 3px #000;
    color: #000;
    text-align: left;
    width: 20vw;
    right: 3vw;
    position: absolute;
    border-radius: 5px;
}

</style>
