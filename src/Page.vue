<template>
    <v-app id="app">
        <Appbar />
        
        <v-content>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="4">
                      <v-row>
                        <v-col>
                          <div
                          class="pt-6">
                            <v-card class="pa-6"> 
                              <!-- <Calendar /> -->
                              <h1 class="text-center"> {{ $moment().format('YYYY/MM/DD') }}</h1>
                              <h1 class="text-center font-weight-light font-italic sans-serif">{{ $moment().format('A ') }}{{timehours}}:{{timeminute}}:{{timeseconds}}</h1>
                              <!-- <Calendar /> -->
                              <br><hr><br>
                              <TimeMeasure />
                            </v-card>
                          </div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col>
                          <v-card class="pa-3">
                            <!-- 그래프 -->
                            <h2> 일간 차트 </h2>
                            <br>
                            <PieChart :send="timeseconds"/>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" sm="8">
                      <v-row>
                        <v-col>
                          <div
                          class="pt-6 text-center">
                              <v-card class="pa-6"> 
                                <TimeHeader />
                                <TimeControl />
                                <!-- <TimePicker /> -->
                              </v-card>
                          </div>
                        </v-col>
                        
                      </v-row>
                        
                      <v-row>
                        <v-col>
                          <v-card class="pa-3">
                            <Chart />
                          </v-card>
                        </v-col>
                      </v-row>

                      <!-- <v-row>
                        <v-col> 
                          <Chart />
                        </v-col>
                      </v-row> -->
                    </v-col>
                </v-row>

                <!-- 
                <v-row class="mt-10">
                    <v-col col="12" sm="12">
                      <Chart />
                    </v-col>
                </v-row>
                -->
                <!-- 차트... -->

                <v-row>
                    <v-col col="12" sm="12">
                      <Todo />
                    </v-col>
                </v-row>

            </v-container> 
        </v-content>
        <v-footer>
        </v-footer>
    </v-app>
</template>

<!--  -->

<script src="https://unpkg.com/vue"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>

<script>

//Appbar
import Appbar from './components/Appbar';

//Calendar
import Calendar from "./components/Calendar/Calendar";

//Time 
import TimeHeader from "./components/Time/TimeHeader";
import TimePicker from "./components/Time/TimePicker";
import TimeMeasure from "./components/Time/TimeMeasure";
import TimeControl from "./components/Time/TimeControl";


//Graph
import Chart from "./components/Graph/Chart";
import LineChart from './components/Graph/LineChart'
import PieChart from './components/Graph/PieChart'

//Todo
import Todo from "./components/Todo/Todo";

//DatePicker
// import Calendar from 'v-calendar/lib/components/calendar.umd'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'


//Time
export default {
  name: 'App',
  components: {
    //Appbar
    Appbar,
    //Calendar
    Calendar,
    //Time
    TimeHeader,
    TimePicker,
    TimeControl,
    TimeMeasure,
    //Graph
    Chart,
    LineChart,
    PieChart,
    //Todo
    Todo
  },
  methods: {
    setInterval1() {        //현재시간
        this.timehours = this.$moment().hours()
        this.timeminute = this.$moment().minute()
        this.timeseconds = this.$moment().seconds()
    },
  },
  mounted() {
    setInterval(() => {
        this.setInterval1() 
    }, 1000)
  },
  data() {
    return {
      timehours: '',
      timeminute: '',
      timeseconds: '',
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', sans-serif;
}
#boxcolor {
  background-color: #455A64 ;
}
#boxcolor2 {
  background-color: #37474F ;
}
#boxcolor3 {
  background-color: #263238 ;
}
</style>