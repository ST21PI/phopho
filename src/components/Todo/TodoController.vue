<template>
  <div class="controller">
    <v-row class="select pb-6">
      <v-col class="text-center mt-1" cols="12" sm="2">
        <label for="order">정렬 </label>
      </v-col>
      <v-col cols="12" sm="6">
        <select name="order" id="order" class="selectbox" v-model="selected" v-on:change="sortTodo">
          <option value="date-desc">Latest</option>
          <option value="date-asc">Oldest</option>
        </select>
        <!-- <v-select
          :items="items"
          id="order"
          v-model="selected" 
          v-on:change="sortTodo"
          dense
          outlined
        ></v-select> -->
      </v-col>
      
    </v-row>
    <v-btn
      class="clear" 
      v-on:click="clearTodo"
      depressed
      block
      color="secondary"
    >
      Clear All
    </v-btn>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      selected: "date-asc",
      items: ['Latest', 'Oldest']
    };
  },
  methods: {
    sortTodo() {
      this.$emit("sortItem", { value: this.selected });
    },
    clearTodo() {
      this.$emit("clearAll");
      // 여기서 this는 무엇인고 무엇에 $emit을 하는것인겨 
      // $emit은 이벤트 전달하는 애 
      // 
    },
  }
};


</script>

<style>
#order {
  outline: solid 2px #aaaaaa;
  /* background-color: #444444 ; */
  font-family: arial;
  /* color: white; */
  border-radius: 5px;
  padding: 5px 30px 5px 30px;
  font-style: sa;
}
</style>