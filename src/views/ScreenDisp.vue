<template>
  <div id="contents">
    <div id="screen">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
#contents {
  grid-area: b;
  padding: 3vh 2vw;
}
#screen {
  width: 100%;
  height: 100%;
}
</style>