<script>
  import { Bar } from 'vue-chartjs'
  export default {
    extends: Bar,
    data () {
      return {
        datacollection: {
          labels: ['월', '화', '수', '목', '금', '토', '일'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#78909C',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              // 각 날짜의 누적시간% 가져오기
              data: [40, 20, 30, 50, 90, 10, 100]
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>