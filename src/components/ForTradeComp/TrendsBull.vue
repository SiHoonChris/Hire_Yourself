<template>
  <table style="width: 100%;">
    <tr>
      <td>
        <table class="head">
          <tr>
            <th style="width: 12%;">No.</th>
            <th style="width: 43%;">Code</th>
            <th style="width: 45%;">Price</th>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <div class="body">
          <table style="width: 100%; background: white;">
            <tr v-for="(assets, idx) in holds" :key='idx'>
              <td style="width: 12%;">{{idx+1}}</td>
              <td style="width: 43%;">{{assets.code}}</td>
              <td style="width: 45%;">{{assets.name}}</td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      holds: this.$store.state.holds
    }
  }
}
</script>

<style scoped>
table {
  background: white;
  border-collapse: collapse;
}
.head {
  background-color: greenyellow;
  width: 100%;
}
.body {
  height: 40vh;
  overflow-y: auto;
}
th, td {
  text-align: center;
  border: 1px solid black;
}
tr:nth-child(even){
  background-color: #f2f2f2;
}
</style>