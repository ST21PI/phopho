<!-- https://github.com/phoenixwong/vue2-timepicker#readme -->
<!-- https://www.npmjs.com/package/vue2-timepicker -->

<template>
    <v-container>
      <v-row>
        <v-col
            class="d-flex"
            cols="12"
            sm="5"
        >
        <h3>목표 시간 : </h3>
        </v-col>
        <v-col
            class="pa-0"
            cols="12"
            sm="3"
        >
          <v-select
          :items="timeitems"
          label="시간"
          id="time"
          v-model="time"
          ></v-select>
        </v-col>
        <v-col
          class="pa-3"
          cols="12"
          sm="3">
          <h3>시간</h3>
        </v-col>
        <!-- <v-col
            class="d-flex"
            cols="12"
            sm="3"
        >
          <v-btn
            outlined
            color="indigo"
            v-on:click="insert"
            block
          >확인
          </v-btn>
        </v-col> -->
      </v-row>
      <v-row>
        <v-col
            class="d-flex"
            cols="12"
            sm="5"
        >
        </v-col>
        <v-col
            class="pa-0"
            cols="12"
            sm="3"
        >
          <v-select
          :items="minuteitems"
          label="분"
          id="minute"
          v-model="minute"
          ></v-select>
        </v-col>
        <v-col
          class="pa-3"
          cols="12"
          sm="3">
          <h3>분</h3>
        </v-col>
      </v-row>
        
      <v-row>
          <v-col
          class="d-flex mt-2">
          <br>
          <p class="title font-weight-light">목표시간까지 &nbsp;</p>
          <p class="title text-decoration-underline font-italic"> 00:00 </p>
          <p class="title font-weight-light"> &nbsp; 남았습니다 </p>
          </v-col>
      </v-row>
      <v-row>
        
      </v-row>
      <!-- <v-row>
          <v-col
          class="d-flex">
              <h3>누적시간 : </h3>
          </v-col>
      </v-row> -->
    </v-container>
  
</template>

<script>
  import EventBus from '../../assets/commonJS/EventBus';
  import 'moment/locale/ko';
  import moment from "moment"

  export default {
    data: () => ({
      timeitems: ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', 
      '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
      minuteitems: ['10', '20', '30', '40', '50'],
      time: 0,
      minute: 0,
      a:0,
      times: [],
      lostotimehours: '',
      lostotimeminutes: '',
      remainderhour: '',
      remainderminute: '',
      getaccumulatedtime: '',
      accumulatedtimetext: 0
    }),
    methods: {
      setInterval1() {        
          EventBus.$emit('Goal_Times', this.time);
          EventBus.$emit('Goal_Minutes', this.minute);
      },
      remainder: function() {
          // 목표시간 - 누적시간
          // 그리고 목표시간을 remaindertime과 remainderminute에 넣기

          // 목표시간 : this.time, this.minute
          // 누적시간 : this.accumulatedtimetext
          this.remainderhour = this.lostotimehours - moment.duration(this.getaccumulatedtime).hours()
          this.remainderminute = this.lostotimeminutes - moment.duration(this.getaccumulatedtime).minutes()
      }
    },
    created() {
      setInterval(() => {
        // 값 들어오면 한번 찍고 값 들어오면 멈추기
          if(this.time != '' || this.minute != '' && this.a != 1) {
            this.setInterval1() 
            var t = this.time
            var m = this.minute
            localStorage.setItem('timehours', this.time)  
            localStorage.setItem('timeminutes', this.minute)
            this.a = 1
          } else {
            if(t != this.time || m != this.minute) {
              this.a = 0
            } 
          }
          this.lostotimehours = localStorage.getItem('timehours')
          this.lostotimeminutes = localStorage.getItem('timeminutes')
          this.remainder()
      }, 1000)
      
      EventBus.$on('Accumulated_Time', function(data){
            this.getaccumulatedtime = data
      }.bind(this));  
    }
  }

</script>
