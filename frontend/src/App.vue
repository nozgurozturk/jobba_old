<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth">Auth</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">

  @font-face {
    font-family: Roobert;
    src: url("./assets/fonts/Roobert-Bold.woff");
    font-weight: 700;
    font-style:normal;
  }
  @font-face {
    font-family: Roobert;
    src: url("./assets/fonts/Roobert-Regular.woff");
      font-weight: 500;
    font-style:normal;
  }
  @font-face {
    font-family: Roobert;
    src: url("./assets/fonts/Roobert-Light.woff");
    font-weight: 300;
    font-style:normal;
  }

#app {
  font-family: Roobert,  Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #393939;
}
html, * , body {
  font-family: Roobert,  Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
  &:visited{
    color: inherit;
  }
}
body{
  margin:0;
  padding:0;
}

</style>
