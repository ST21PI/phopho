<template>
    <date-pick
        v-model="date"
        :hasInputElement="false"
    ></date-pick>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

// var date = this.$moment().format('YYYY-MM-DD')
export default {
    data() {
      return {
        date: this.$moment().format('YYYY-MM-DD')
      }
    },
    components: {DatePick}, 
};
</script>