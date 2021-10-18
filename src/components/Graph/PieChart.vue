
<script>
  import { Pie } from 'vue-chartjs'
  import 'moment/locale/ko';
  import moment from "moment"

  var accumulatedtimeHour, accumulatedtimeMinute, accumulatedtime
  var goalhour, goalminute, goaltime
  var a

  export default {
    extends: Pie,
    data () {
      return {
        datacollection: {
          labels: ['누적 시간', '남은 시간'],
          datasets: [
            {
              label: 'Daily One',
              backgroundColor: ['#689F38', '#455A64'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: ['','']
            }
          ],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false,
                stepSize: 100,
                min: 0,
                max: 0
              },
              gridLines: {
                display: false,
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
    props: [
      "send"
    ],
    methods: {
      totalpercent: function(){
        // 목표시간

        // 10분 단위로 쪼개서, 1시간은 6
        // 10분은 1, 50분은 5
        goalhour = localStorage.getItem('timehours')*6
        goalminute = localStorage.getItem('timeminutes')/10
        
        // 더하기
        goaltime = (goalhour + goalminute)

        this.focusedtimepercent()
      },
      focusedtimepercent: function() {
        // 누적시간

        // 정수로 변환
        // localStorage.getItem('AT')
        accumulatedtimeHour = moment.duration(localStorage.getItem('AT')).hours()
        accumulatedtimeMinute = moment.duration(localStorage.getItem('AT')).minutes()
        //accumulatedtimeSecond = moment.duration(localStorage.getItem('AT')).seconds()

        // 10분 단위로 쪼개서, 1시간은 6
        // 10분은 1, 50분은 5
        // 1초는 /60  
        accumulatedtimeHour = accumulatedtimeHour*6
        accumulatedtimeMinute = accumulatedtimeMinute/10
        // accumulatedtimeSecond = accumulatedtimeSecond/60

        // 더하기
        accumulatedtime = (accumulatedtimeHour + accumulatedtimeMinute)

        
        this.remindertotalpercent()
      },
      remindertotalpercent: function() {
          // 남은시간 : 100-누적시간

          // 누적시간%(소수점X)
          let accumulatedtimePercentage1 = Math.floor((accumulatedtime/goaltime) * 100)
          this.datacollection.datasets[0].data[0] = accumulatedtimePercentage1

          // 목표시간 100%
          // remainderPercentage = goalPercentage - accumulatedtimePercentage
          let remainderPercentage1 = 100 - accumulatedtimePercentage1
          this.datacollection.datasets[0].data[1] = remainderPercentage1

      }
    },
    created() {
      a = accumulatedtime
      setInterval(() => {
        this.totalpercent()
        if(a != accumulatedtime) { // 누적시간 업데이트 시 
          this.renderChart(this.datacollection, this.options)
          a = accumulatedtime
        }
      }, 1000)
    }
  }

  
</script>