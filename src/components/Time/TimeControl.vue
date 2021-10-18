<!-- 목표시간 - 집중시간 => TimePicker.vue로 보내기-->
<!-- 집중시간 총 합해서 누적시간에 넣기-->

<template>
    <v-container>
        <!-- <v-row 
        class="px-3">
            <h2>목표시간까지&nbsp;&nbsp;</h2>
            <h2 class="text-decoration-underline">&nbsp;&nbsp;&nbsp;{{ remaindertime }}&nbsp;&nbsp;&nbsp;</h2><h2>시간&nbsp;&nbsp;&nbsp;</h2>
            <h2 class="text-decoration-underline">&nbsp;&nbsp;&nbsp;{{ remainderminute }}&nbsp;&nbsp;&nbsp;</h2>
                <h2>&nbsp;&nbsp;분 남았습니다 </h2>
        </v-row> -->
        <v-row>
            <v-col>
            <h1 class="text-center display-4"> {{ focusedtimetext }}  </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            sm="6">
            <v-btn
                id="btn"
                class="my-5"
                block
                color="secondary"
                elevation="3"
                large
                x-large
                @click="starttime()"
                >START</v-btn>
            </v-col>
            <v-col
            cols="12"
            sm="6">
            <v-btn
                id="btn"
                class="my-5"
                block
                color="secondary"
                elevation="3"
                large
                x-large
                @click="stoptime()"
                >STOP</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <span class="font-weight-thin display-1">오늘은 </span> 
                <span class="font-weight-thin display-1 text-decoration-underline font-italic"
                v-bind:key="AT"> 00:00:00 </span> 
                <span class="font-weight-thin display-1">&nbsp;동안 집중했어요 </span>
            </v-col>
        </v-row>
    </v-container>
</template>


<script type="text/javascript" src="../../node_modules/vue/dist/vue.js"></script>
<script type="text/javascript" src="../../node_modules/requirejs/require.js"></script>
<script 
  src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js">
</script>

<script>

// import TimePicker from './TimePicker'
// import moment from 'moment';
import 'moment/locale/ko';
import moment from "moment"
import {time} from './TimePicker'

import EventBus from '../../assets/commonJS/EventBus';


// 현재시간
var nowtime 
// 측정 시작 시간
var starttimer
// 측정 종료 시간 
var stoptimer

var duration

var isStop = false

var asSeconds

var storage_time

export default {
    data() {
        return {
            timehours: '', 
            timeminute: '',
            timeseconds: '',
            focusedtimetext: '',
            accumulatedtimetext: '',
            remaindertime: null,
            remainderminute: null,
            AT:'',
            duration: '',
            a: '',
            storage_time: '',
            todaysdate:'',
            getgoaltime: '',
            getgoalminute: '',
            noformat: ''
        }
    },
    methods: {
        setInterval1() {        //현재시간
            this.timehours = this.$moment().hours()
            this.timeminute = this.$moment().minute()
            this.timeseconds = this.$moment().seconds()
            EventBus.$emit('Accumulated_Time', this.accumulatedtimetext);
        },
        focusedtime() {
            // 집중시간 측정

            // true일때만 현재 시간 기록하기
            // 현재 시간 1초마다 업데이트
            this.nowtime = this.$moment()

            // 집중시간 => 현재시간(nowtime) - 측정시작(starttimer) 
            this.duration = moment.duration(this.nowtime.diff(this.starttimer));
            var hours = this.duration.hours()
            var minutes = this.duration.minutes()
            var seconds = this.duration.seconds()
            this.focusedtimetext = hours + ':' + minutes + ':' + seconds 

            console.log("집중시간: ", this.focusedtimetext);
        },
        accumulatedtime() {
            // 누적시간 측정

            //초기화
            if(this.a != 1) {
                this.storage_time = this.$moment(0,'HH:hh:mm')
                this.a = 1
            }
            // console.log("초기화한 storage_time : ", this.storage_time)
            
            // storage_time += 집중시간(duration)
            // console.log("this.duration : ", moment.duration(this.duration.asMilliseconds()))
            
            this.asSeconds = moment.duration(this.duration.asMilliseconds())
            this.accumulatedtimetext = moment(moment(this.nowtime).add(this.asSeconds, 's'))

            this.accumulatedtimetext = moment.duration(this.accumulatedtimetext.diff(this.nowtime))
            this.accumulatedtimetext = moment.duration(moment.duration(this.accumulatedtimetext).asMilliseconds())
            // console.log("duration됐냐 누적시간 : ", this.storage_time)
            this.storage_time = moment(moment(this.storage_time).add(this.accumulatedtimetext, 's'))
            // console.log("값 저장된 storage_time : ", this.storage_time)
            this.accumulatedtimetext = moment(this.storage_time).format("HH:mm:ss")
            console.log("누적시간 : ", this.accumulatedtimetext)

            // localStorage에 저장하기
            localStorage.setItem('AT', this.accumulatedtimetext)
        },
        starttime: function() {
            // START 버튼 클릭했을 때 초기화 후 시간 측정 시작

            // 멈춰있을 때에만 시작 가능
            if(this.isStop != false) {
                
                // 측정 시작 시간
                this.starttimer = this.$moment()
                console.log("starttimer : ", this.starttimer);

                // 집중시간 업데이트
                this.focusedtime()
            }

            this.isStop = false
        },
        stoptime: function() {
            // Stop 버튼 클릭했을 때 시간 측정 종료
            // stop 버튼 누른 시간을 출력

            // stop 한번만 클릭할 수 있게 하기             
            if(this.isStop != true) {
                // 측정 중지 시간
                this.stoptimer = this.focusedtimetext
                console.log(this.stoptimer)
                // console.log("stoptimer : ", this.stoptimer);

                // focusedtimetext에 측정 중지 시간 출력
                this.focusedtimetext = this.stoptimer

                this.accumulatedtime()
            }

            this.isStop = true
        },
        // start: function(){
        //   this.$refs.TimeControl.setInterval();
        // }, 
        clickStop: function() {

        }
    },
    created() {
        setInterval(() => {
            this.setInterval1() 
            if(this.isStop != true) {
                this.focusedtime() 
            }
        }, 1000)
        
        this.todaysdate = this.$moment().format('YYYY-MM-DD')
        console.log('오늘 날짜 : ', this.todaysdate)

        // 다음날로 넘어갔을때 한번 새로고침
        if(this.todaysdate != this.$moment().format('YYYY-MM-DD')){ 
            localStorage.setItem('AT', moment(moment.duration("0")).format('HH:mm:ss'))
            this.accumulatedtimetext = localStorage.getItem('AT')
            this.a = 0

            // 해당 날짜로 업데이트 
            this.todaysdate = this.$moment().format('YYYY-MM-DD')
        }
        this.accumulatedtimetext = localStorage.getItem('AT')
    }
}

</script>