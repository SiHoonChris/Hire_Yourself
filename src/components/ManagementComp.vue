<template> <!-- 당월 배당지급 예정 종목 어떻게 표시? -->
  <main>
    <section id="financial_statement"><FinancialStatement/></section>
    <section id="portfolio_evaluation"><PortfolioEvaluation/></section>
    <section id="dividend_calendar"><DividendCalendar/></section>
  </main>
</template>

<script>
import DividendCalendar from './ForManagementComp/DividendCalendar.vue'
import FinancialStatement from './ForManagementComp/FinancialStatement.vue'
import PortfolioEvaluation from './ForManagementComp/PortfolioEvaluation.vue'

export default {
  components: { DividendCalendar, PortfolioEvaluation, FinancialStatement },
  methods: {}
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(5, 20%);
  grid-template-columns: repeat(5, 20%);
  grid-template-areas:
    "fs fs fs fs pe"
    "fs fs fs fs pe"
    "fs fs fs fs pe"
    "fs fs fs fs pe" 
    "dc dc dc dc dc" ;
}
section {
  padding: 5px;
  border:1px solid black;
}
#financial_statement {
  grid-area: fs;
}
#portfolio_evaluation {
  grid-area: pe;
  overflow-y: scroll;
}
#dividend_calendar {
  grid-area: dc;
  overflow-y: scroll;
}
</style>
