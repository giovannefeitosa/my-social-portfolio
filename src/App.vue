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
  font-family: 'Roboto', 'Ubuntu', Tahoma, Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #222;
  line-height: 1.3em;
}

body {
  // Same background color used for old-times Orkut
  // We miss you, bro =')
  // background: #d4dded;

  // Changed my mind...
  // Now I'm using facebook's background color
  background: #e9ebee;
}
</style>
