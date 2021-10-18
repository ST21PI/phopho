<template>
  <ul class="list">
    <li class="list__item pt-3 ma-2" v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
      <v-row>
        <v-col col="12" sm="1">
          <!-- v-on:click="hrtodo()"       :class="isChecked ? 'text-decoration-line-through' : ''" -->
          <!-- <input type="checkbox" v-bind:id="todoItem.item" @click="hrTodo" :class="{'text-decoration-line-through' : ischecked}" /> -->
          <input type="checkbox" v-bind:id="todoItem.item" @click="hrTodo()"/>
        </v-col>
        <v-col col="12" sm="7">
          <label v-bind:for="todoItem.item" class="list__label">
          <p :class="isChecked ? 'text-decoration-line-through list__text' : 'list__text'" >{{ todoItem.item }}</p>
        </label>
        </v-col>
        <v-col col="12" sm="2"> 
          <p class="list__date">{{ todoItem.date }}</p>
        </v-col>
        <v-col col="12" sm="2">
          <!-- <button class="list__delete" v-on:click="removeTodo(todoItem, index)">
            <div class="blind">Delete</div>
          </button> -->
          <v-btn
            class="list__delete" 
            v-on:click="removeTodo(todoItem, index)"
            depressed
            color="secondary" 
          >
            Delete 
          </v-btn>
        </v-col>
      </v-row>
      <hr>
    </li>
  </ul>
</template>

<script>
// 실시간 삭제 완료
export default {
  data() {
    return {
      todoItems: [],
      isChecked: false,
    };
  }, 
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) { 
        // || 이거 왜 적용이 안되는지 확인. 계속 얘네 셋때문에 Todo에 있던 애들이 빈칸으로 나타나고 사라짐 .. 
        if (localStorage.key(i) !== "loglevel:webpack-dev-server" || localStorage.key(i) !== "AT" || localStorage.key(i) !== "timehours" || localStorage.key(i) !== "timeminutes" ) {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i))) 
          );
        }
      }
    }
  },
  props: ["propsdata"],
  methods: {
    removeTodo(todoItem, index) {
      // 삭제신호
      this.$emit("removeItem", todoItem, index);
    },
    toggleComplete(todoItem) {
      this.$emit("toggleItem", todoItem);
    },
    hrTodo() {
      // 체크박스에 class="text-decoration-line-through" 를 추가해야 함  
      // v-bind:class="isChecked?yeah:nah"
      if(this.isChecked == false) { //짝수일 때만 실행 
        this.isChecked = true
      } else {
        this.isChecked = false
      }
      
    }
  }
}; 

</script>

<style>

.list__item { list-style: none }

</style>