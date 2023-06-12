<template>
  <main>
    <section id="charts"><PriceCharts/></section>
    <section id="trends-bull"><TrendsBull/></section>
    <section id="trends-bear"><TrendsBear/></section>
  </main>
</template>
<!-- 보유 - WatchList 종목 전환 어떻게? 차트 및에 watchlist 버튼 만들고, 누르면 즐겨찾기 종목 bear/bull로 나오게 하기-->

<script>
import PriceCharts from './ForTradeComp/PriceCharts.vue'
import TrendsBear from './ForTradeComp/TrendsBear.vue'
import TrendsBull from './ForTradeComp/TrendsBull.vue'
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
#charts {
  grid-area: ch;
  border-right: 1px solid darkgrey;
}
#trends-bull {
  grid-area: bl;
  padding: 10px;
  border-bottom: 1px solid darkgrey;
  background: #33cc33;
  overflow-y: scroll;
}
#trends-bear {
  grid-area: br;
  padding: 10px;
  background: #ff4d4d;
  overflow-y: scroll;
}
</style>
