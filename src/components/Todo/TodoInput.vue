<template>
  <div class="add text-center">
    <v-row>
      <v-col cols="12" sm="8">
        <v-text-field
          class="add__input"
          v-model="newTodoItem"
          v-on:keyup.enter="addTodoItem"
          label="할 일을 입력하세요"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <!-- <button class="add__button mt-5" v-on:click="addTodoItem">
          <span class="blind">Add</span>
        </button> -->
        <v-btn
          class="blind mt-4" 
          v-on:click="addTodoItem"
          depressed
          block
          color="secondary"
        >
          Add
        </v-btn>
      </v-col>
    </v-row>

  </div>
</template>
 
<script>
import getDate from "../../assets/commonJS/getDate.js";

export default {
  data() {
    return {
      newTodoItem: ''
    };
  },
  methods: {
    addTodoItem() {
      if (this.newTodoItem !== "") {
          var value = {
          item: this.newTodoItem,
          date: `${getDate().date} ${getDate().week}`,
          time: getDate().time,
          completed: false //새 속성 추가
        };
        localStorage.setItem(this.newTodoItem, JSON.stringify(value));
        this.$emit("addItem", this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>