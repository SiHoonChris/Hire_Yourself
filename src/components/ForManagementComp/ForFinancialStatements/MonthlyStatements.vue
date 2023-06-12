<template>
  <div>
    <table>
      <thead>
        <th>
          <select>
            <option>Year</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </th>
        <th>Jan</th>
        <th>Feb</th>
        <th>Mar</th>
        <th>Apr</th>
        <th>May</th>
        <th>Jun</th>
        <th>Jul</th>
        <th>Aug</th>
        <th>Sep</th>
        <th>Oct</th>
        <th>Nov</th>
        <th>Dec</th>
      </thead>
      <tbody>
        <tr><td style="text-align: left;">Revenue</td></tr>
        <tr><td style="text-align: right;">Gain</td></tr>
        <tr><td style="text-align: right;">Dividend / Interest</td></tr>
        <tr><td style="text-align: left;">Net Income</td></tr>
        <tr><td style="text-align: right;">Gain</td></tr>
        <tr><td style="text-align: right;">Dividend / Interest</td></tr>
        <tr><td style="text-align: left;">Net Profit Margin</td></tr>
        <tr><td style="height: 16px;"></td></tr>
        <tr><td style="text-align: left;">Total Assets</td></tr>
        <tr><td style="text-align: right;">Cash</td></tr>
        <tr><td style="text-align: right;">Cash Flow</td></tr>
        <tr><td style="text-align: left;">Total Liabilities</td></tr>
        <tr><td style="text-align: left;">Total Equities</td></tr>
        <tr><td style="text-align: right;">ROE</td></tr>
        <tr><td style="text-align: left;">Debt Ratio</td></tr>
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
</style>
