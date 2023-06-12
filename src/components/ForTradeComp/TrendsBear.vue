<template>
  <div>
    <table>
      <thead>
        <th>No.</th>
        <th>Code</th>
        <th>Price</th>
      </thead>
      <tbody>
        <tr v-for="(assets, idx) in holds" :key='idx'>
          <td>{{idx+1}}</td>
          <td>{{assets.code}}</td>
          <td>{{assets.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
  width: 100%;
  height: 100%;
  background: white;
  border: 2px solid black;
  border-collapse: collapse;
}
th, td {
  text-align: center;
  border: 1px solid black;
}
</style>