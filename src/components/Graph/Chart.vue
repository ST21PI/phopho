<template>
  <section class="container">
    <!-- <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/chartjs">chartjs</router-link></li>
    </ul> -->
    <!-- <h1>ChartJS</h1> -->
    <div class="columns">
      <div class="column">
        <h2>주간 차트</h2>
        <BarChart />
      </div>
    </div>
  </section>
</template>
 
<script>
  import BarChart from './BarChart.vue'
 
  export default {
    name: 'VueChartJS',
    components: {
      BarChart
    }
  }
</script>
 
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
 
  li {
    display: inline-block;
    margin: 0 10px;
  }
 
  a {
    color: #42b983;
  }
</style>