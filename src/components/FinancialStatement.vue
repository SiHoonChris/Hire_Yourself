<template>
  <div>
    <h2 id="period">Period</h2>
    <div id="btns">
      <button>Overall</button>
      <button>Annually</button>
      <button>Quarterly</button>
      <button>Monthly</button>
    </div>
    <div id="fs">
      <table>
        <thead>
          <th>ab</th>
          <th>bc</th>
          <th>cd</th>
        </thead>
        <tbody>
          <tr>
            <td>cd</td>
            <td>cd</td>
            <td>cd</td>
          </tr>
          <tr>
            <td>cd</td>
            <td>cd</td>
            <td>cd</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#period {
  text-align: center;
}
#btns {
  display: flex;
  justify-content: center;
  align-items: center;
}
#fs {
  border: 1px solid black;
}
</style>
