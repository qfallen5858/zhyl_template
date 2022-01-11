<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html {
  font-size: 16px;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
}
.introbtn {
  display: block;
  position: fixed;
  right: 70px;
  bottom: 100px;
  z-index: 100;
  width: 120px;
  height: 120px;
  /* background: url(~imgs/home/robot1.png) 0 0 no-repeat; */
  background-size: 100%;
  animation-name: pulse;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  cursor: pointer;
}
@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.9;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.9;
  }
}

.browser:hover {
  color: blue;
}
</style>
