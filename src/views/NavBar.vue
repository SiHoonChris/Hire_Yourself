<template>
  <div id="nav-bar">
    <input type='text'/>
    <nav>
      <ul>
        <router-link to="/">HOME</router-link>
      </ul>
      <ul>Trade
        <li><router-link to="/chart">Chart</router-link></li>
        <li><router-link to="/trade">Sell & Buy</router-link></li>
        <li><router-link to="/watchlist">Watchlist</router-link></li>
      </ul>
      <ul>Management
        <li><router-link to="/fs">Financial Statements</router-link></li>
        <li><router-link to="/eval">Portfolio Evaluation</router-link></li>
        <li><router-link to="/div-cal">Dividend Calendar</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#nav-bar {
  grid-area: a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid lightgrey;
}
input {
  margin: 10vh 1vw;
  padding: 0.5vw 2vh;
}
ul {
  list-style-type: none;
}
li {
  list-style-type: none;
}
a.router-link-exact-active {
  color: #42b983;
}
a {
  text-decoration: none;
  color: black;
}
</style>
