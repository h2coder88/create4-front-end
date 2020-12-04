<template>
  <div id="app">
    <div id="photo">
      <img src="./assets/christmastree.png" width="100" height="130">
    </div>
    <div id="navbar">
      <div id="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/list">List</router-link> |
        <router-link to="/traditions">Traditions</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FAFAFA;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1fr;
  height: 400dp;
  background-color: gray;
}

#photo {
  width: 100%;
  padding: 5px;
  background-color: lightgray;
  text-align: center;
}

#navbar {
  width: 100%;
  padding: 5px;
  text-align: center;
  background-color: lightgray;
}
</style>
