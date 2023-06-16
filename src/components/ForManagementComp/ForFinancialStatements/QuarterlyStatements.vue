<template>
  <div>
    <table>
      <thead>
        <th></th>
        <th>4Q</th>
        <th>3Q</th>
        <th>2Q</th>
        <th>1Q</th>
      </thead>
      <tbody>
        <tr><td style="text-align: center;">Revenue</td></tr>
        <tr><td style="text-align: right;">Transaction</td></tr>
        <tr><td style="text-align: right;">Dividend</td></tr>
        <tr><td style="text-align: right;">Total</td></tr>
        <tr><td style="text-align: center;">Net Income</td></tr>
        <tr><td style="text-align: right;">Transaction</td></tr>
        <tr><td style="text-align: right;">Dividend</td></tr>
        <tr><td style="text-align: right;">Total</td></tr>
        <tr><td style="text-align: right;">Net Profit Margin</td></tr>
        <tr><td style="text-align: center;">Total Assets</td></tr>
        <tr><td style="text-align: right;">Cash</td></tr>
        <tr><td style="text-align: right;">Cash Flow</td></tr>
        <tr><td style="text-align: center;">Total Liabilities</td></tr>
        <tr><td style="text-align: right;">Debt Ratio</td></tr>
        <tr><td style="text-align: center;">Total Equities</td></tr>
        <tr><td style="text-align: right;">ROE</td></tr>
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
th:first-child {
  width: 16%;
}
th:not(:first-child) {
  width: 21%;
}
</style>
