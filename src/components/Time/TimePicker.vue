<!-- https://github.com/phoenixwong/vue2-timepicker#readme -->
<!-- https://www.npmjs.com/package/vue2-timepicker -->

<template>
    <div>      
    <v-container>
      <v-row>
        <v-col
            class="d-flex"
            cols="12"
            sm="3"
        >
        <h2>목표 시간 : </h2>
        </v-col>
        <v-col
            class="pa-0"
            cols="12"
            sm="2"
        >
          <v-select
          :items="timeitems"
          id="time"
          v-model="time"
          ></v-select>
          <!-- <input 
          v-model="time" 
          placeholder="시간"
          class="mt-4"> -->
        </v-col>
        <v-col
          class="pa-3"
          cols="12"
          sm="3">
          <h2>시간</h2>
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
    
    </v-container>
    
    </div>
</template>

<script type="text/javascript" src="../../node_modules/vue/dist/vue.js"></script>
<script type="text/javascript" src="../../node_modules/requirejs/require.js"></script>


<script>
// import func from '../../../vue-temp/vue-editor-bridge'

  export default {
   
    data() {
        return {
            // start : false,
            timeitems: ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        }
    },
    created() {
        // setinterval........
    },
    methods: {
        
    }
  }
</script>
