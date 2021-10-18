<template>
    <v-container class="text-center">
        <!-- ◟( ˘ ³˘)◞ ♥  -->
        <span class="font-weight-thin title">목표시간 : </span> <span class="font-weight-thin display-1 font-italic"> 00:00 </span> <br>
        <hr> 
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            displaygoaltime: "00:00"
        }
    },
    created() {
        setInterval(() => {
           if(localStorage.getItem('timehours') != null && localStorage.getItem('timeminutes') != null) {
            this.displaygoaltime = localStorage.getItem('timehours') + ' :' +  localStorage.getItem('timeminutes')
        }  
        }, 1000)
    }
} 
</script>