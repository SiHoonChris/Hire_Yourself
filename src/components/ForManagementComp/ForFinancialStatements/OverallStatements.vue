<template>
  <div>
    <table>
      <thead>
        <th class="Y"></th>
        <th class="REV">Revenue</th>
        <th class="NI">Net Income</th>
        <th class="NPM">NPM</th>
        <th class="TA">Total Assets</th>
        <th class="TL">Total Liabilities</th>
        <th class="TE">Total Equities</th>
        <th class="DR">Debt Rate</th>
      </thead>
      <tbody v-for="(fs, idx) in fs_overall" :key="idx">
        <tr class="per-year">
          <td>FY{{fs.year}}</td>
          <td>{{Number(Number(fs.quarter[0].REV)+Number(fs.quarter[1].REV)+Number(fs.quarter[2].REV)+Number(fs.quarter[3].REV)).toLocaleString()}}</td>
          <td>{{Number(Number(fs.quarter[0].NI)+Number(fs.quarter[1].NI)+Number(fs.quarter[2].NI)+Number(fs.quarter[3].NI)).toLocaleString()}}</td>
          <td>{{((Number(fs.quarter[0].NI)+Number(fs.quarter[1].NI)+Number(fs.quarter[2].NI)+Number(fs.quarter[3].NI))/(Number(fs.quarter[0].REV)+Number(fs.quarter[1].REV)+Number(fs.quarter[2].REV)+Number(fs.quarter[3].REV))*100).toFixed(2)}}%</td>
          <td>{{Number((Number(fs.quarter[0].TL)+Number(fs.quarter[1].TL)+Number(fs.quarter[2].TL)+Number(fs.quarter[3].TL))+(Number(fs.quarter[0].TE)+Number(fs.quarter[1].TE)+Number(fs.quarter[2].TE)+Number(fs.quarter[3].TE))).toLocaleString()}}</td>
          <td>{{Number(Number(fs.quarter[0].TL)+Number(fs.quarter[1].TL)+Number(fs.quarter[2].TL)+Number(fs.quarter[3].TL)).toLocaleString()}}</td>
          <td>{{Number(Number(fs.quarter[0].TE)+Number(fs.quarter[1].TE)+Number(fs.quarter[2].TE)+Number(fs.quarter[3].TE)).toLocaleString()}}</td>
          <td>{{((Number(fs.quarter[0].TL)+Number(fs.quarter[1].TL)+Number(fs.quarter[2].TL)+Number(fs.quarter[3].TL))/(Number(fs.quarter[0].TE)+Number(fs.quarter[1].TE)+Number(fs.quarter[2].TE)+Number(fs.quarter[3].TE))*100).toFixed(2)}}%</td>
        </tr>
        <tr v-for="(data, i) in fs.quarter" :key="i">
          <td class='quarter'>{{data.q}}Q</td>
          <td class='quarter'>{{Number(data.REV).toLocaleString()}}</td>
          <td class='quarter'>{{Number(data.NI).toLocaleString()}}</td>
          <td class='quarter'>{{(Number(data.NI)/Number(data.REV)*100).toFixed(2)}}%</td>
          <td class='quarter'>{{Number(Number(data.TL)+Number(data.TE)).toLocaleString()}}</td>
          <td class='quarter'>{{Number(data.TL).toLocaleString()}}</td>
          <td class='quarter'>{{Number(data.TE).toLocaleString()}}</td>
          <td class='quarter'>{{(Number(data.TL)/Number(data.TE)*100).toFixed(2)}}%</td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      fs_overall: [ // 최근 3년치 데이터
        { 
          year: '2021',
          quarter: [
            { q:'1', REV:'10000000', NI:'8000000', TL:'10000000', TE:'40000000' },
            { q:'2', REV:'10000000', NI:'9000000', TL:'10000000', TE:'40000000' },
            { q:'3', REV:'10000000', NI:'5000000', TL:'10000000', TE:'40000000' },
            { q:'4', REV:'10000000', NI:'9000000', TL:'10000000', TE:'40000000' }
          ]
        },
        { 
          year: '2022',
          quarter: [
            { q:'1', REV:'20000000', NI:'6000000', TL:'10000000', TE:'40000000' },
            { q:'2', REV:'20000000', NI:'9000000', TL:'10000000', TE:'40000000' },
            { q:'3', REV:'20000000', NI:'8000000', TL:'30000000', TE:'30000000' },
            { q:'4', REV:'20000000', NI:'7000000', TL:'20000000', TE:'30000000' }
          ]
        },
        { 
          year: '2023',
          quarter: [
            { q:'1', REV:'30000000', NI:'8000000', TL:'9000000', TE:'41000000' },
            { q:'2', REV:'30000000', NI:'9000000', TL:'10000000', TE:'40000000' },
            { q:'3', REV:'30000000', NI:'8000000', TL:'10000000', TE:'40000000' },
            { q:'4', REV:'30000000', NI:'9000000', TL:'10000000', TE:'40000000' }
          ]
        },
      ]
    }
  },
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
.per-year {
  background: lightgreen;
}
.quarter {
  text-align: right;
  padding-right: 0.5%;
}
.Y {
  width: 7%;
}
.REV, .NI, .TA, .TL, .TE {
  width: 15%;
}
.NPM, .DR {
  width: 9%;
}
</style>
