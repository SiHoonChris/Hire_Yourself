<template>
  <div id="content">
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
#content {
  grid-area: b;
}
#main {
  width: 100%;
  height: 100%;
}
</style>