<template>
  <div>
    <h1 id="period">Period</h1>
    <div id="btns">
      <button @click="state('overall')">Overall</button>
      <button @click="state('annually')">Annually</button>
      <button @click="state('quarterly')">Quarterly</button>
      <button @click="state('monthly')">Monthly</button>
    </div>
    <OverallStatements v-if="this.statement==='overall'"/>
    <AnnuallyStatements v-else-if="this.statement==='annually'"/>
    <QuarterlyStatements v-else-if="this.statement==='quarterly'"/>
    <MonthlyStatements v-else-if="this.statement==='monthly'"/>
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
      statement: "overall"
    }
  },
  methods: {
    state(param) { this.statement = param }
  }
}
</script>

<style scoped>
#period {
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
