<template>
  <div>
    <table>
      <thead>
        <th></th>
        <th>Revenue</th>
        <th>Net Income</th>
        <th>NPM</th>
        <th>Total Assets</th>
        <th>Total Liabilities</th>
        <th>Total Equities</th>
        <th>Debt Rate</th>
      </thead>
      <tbody>
        <tr><td>FY2021</td></tr>
        <tr><td class='quarter'>1Q</td></tr>
        <tr><td class='quarter'>2Q</td></tr>
        <tr><td class='quarter'>3Q</td></tr>
        <tr><td class='quarter'>4Q</td></tr>
        <tr><td>FY2022</td></tr>
        <tr><td class='quarter'>1Q</td></tr>
        <tr><td class='quarter'>2Q</td></tr>
        <tr><td class='quarter'>3Q</td></tr>
        <tr><td class='quarter'>4Q</td></tr>
        <tr><td>FY2023</td></tr>
        <tr><td class='quarter'>1Q</td></tr>
        <tr><td class='quarter'>2Q</td></tr>
        <tr><td class='quarter'>3Q</td></tr>
        <tr><td class='quarter'>4Q</td></tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
table {
  border: 2px solid black;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  margin-bottom: 6px;
}
th, td {
  border: 1px solid black;
  text-align: center;
}
.quarter {
  text-align: right;
}
</style>
