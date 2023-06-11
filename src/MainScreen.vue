<template>
  <div id="container">
    <NavBar/>
    <ScreenDisp/>
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue'
import ScreenDisp from './views/ScreenDisp.vue'
export default {
  components: { NavBar, ScreenDisp }
}
</script>

<style>
#container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(20, 5%);
  grid-template-areas:
    "a" "b" "b" "b" "b"
    "b" "b" "b" "b" "b"
    "b" "b" "b" "b" "b"
    "b" "b" "b" "b" "b";
}
</style>
