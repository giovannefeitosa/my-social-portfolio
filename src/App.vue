<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
}

body {
  // Same background color used for old-times Orkut
  // We miss you, bro =')
  background: #d4dded;
}
</style>
