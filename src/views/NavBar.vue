<template>
  <nav>
    <ul>
      <li><router-link to="/">Management</router-link></li>
      <li><router-link to="/trade">Trade</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  grid-area: a;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 12px;
  border-bottom: 2px solid lightgrey;
}
ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
li:first-child:after {
  content: '|';
  margin: 0 10px;
}
a.router-link-exact-active {
  color: #42b983;
}
a {
  text-decoration: none;
  color: black;
}
</style>
