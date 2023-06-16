<template>
  <div>
    <h1 id="title">Financial Statement</h1>
    <div id="btns">
      <button @click="state('all')">Overall</button>
      <button @click="state('1y')">Annually</button>
      <button @click="state('1q')">Quarterly</button>
      <button @click="state('1m')">Monthly</button>
    </div>
    <OverallStatements v-if="this.statement==='all'"/>
    <AnnuallyStatements v-else-if="this.statement==='1y'"/>
    <QuarterlyStatements v-else-if="this.statement==='1q'"/>
    <MonthlyStatements v-else-if="this.statement==='1m'"/>
  </div>
</template>

<script>
import AnnuallyStatements from './ForFinancialStatements/AnnuallyStatements.vue'
import MonthlyStatements from './ForFinancialStatements/MonthlyStatements.vue'
import OverallStatements from './ForFinancialStatements/OverallStatements.vue'
import QuarterlyStatements from './ForFinancialStatements/QuarterlyStatements.vue'

export default {
  components: { OverallStatements, AnnuallyStatements, QuarterlyStatements, MonthlyStatements },
  data() {
    return {
      statement: "all"
    }
  },
  methods: {
    state(param) { this.statement = param }
  }
}
</script>

<style scoped>
#title {
  text-align: center;
  font-size: 40px;
  margin: 0 0 16px 0;
}
#btns {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
}
</style>
