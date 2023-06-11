<template>
  <main>
    <section id="charts"><PriceCharts/></section>
    <section id="trends-bull"><TrendsBull/></section>
    <section id="trends-bear"><TrendsBear/></section>
  </main>
</template>
<!-- 보유 - WatchList 종목 전환 어떻게? 차트 및에 watchlist 버튼 만들고, 누르면 즐겨찾기 종목 bear/bull로 나오게 하기-->

<script>
import PriceCharts from './PriceCharts.vue'
import TrendsBear from './TrendsBear.vue'
import TrendsBull from './TrendsBull.vue'
export default {
  components: { TrendsBull, TrendsBear, PriceCharts }
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 25%);
  grid-template-columns: repeat(5, 20%);
  grid-template-areas:
    "ch ch ch ch bl"
    "ch ch ch ch bl"
    "ch ch ch ch br"
    "ch ch ch ch br";
}
section:not(#chart) {
  padding: 10px;
  border:1px solid black;
}
#charts {
  grid-area: ch;
}
#trends-bull {
  grid-area: bl;
}
#trends-bear {
  grid-area: br;
}
</style>
