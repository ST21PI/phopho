<template>
  <div class="title">
    <p class="title__message font-italic"> 오늘의 할 일 </p>
    <!-- <p class="title__task">
      You've got
      <span class="title__task-total">{{ taskTotal }}</span> tasks today.
    </p> -->
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      message: "Hello",
      taskTotal: 5
    };
  }
};
</script>

<style>
.title__message {
  font-family: 'Avenir', sans-serif;
}
</style>