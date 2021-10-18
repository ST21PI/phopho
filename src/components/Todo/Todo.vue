
<template>
  <div class="py-6 text-no-wrap">
      <v-card class="pa-9">
        <v-row class="mx-10">
          <v-col>
            <TodoHeader />
            <TodoTitle />
            <TodoInput 
            v-on:addItem="addOneItem"
            />
            <TodoController 
            v-on:sortItem="sortAllItem" 
            v-on:clearAll="clearAllItem" 
            />
          </v-col>
          <v-col>
            <TodoList
            v-bind:propsdata="todoItems"
            v-on:removeItem="removeOneItem"
            v-on:toggleItem="toggleOneItem"
            />
          </v-col>
        </v-row>
      </v-card>
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader";
import TodoTitle from "./TodoTitle";
import TodoInput from "./TodoInput";
import TodoController from "./TodoController";
import TodoList from "./TodoList";
import getDate from "../../assets/commonJS/getDate.js";
 
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList
  },
   methods: {
    //실시간 추가 TodoInput
    addOneItem(todoItem) {
      var value = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false
      };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    },
    //TodoList
    //실시간 삭제 
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    //TodoController
    //실시간 전체 삭제 
    clearAllItem() {
      // Todo에서만 add 했던거만 전부 삭제하기 
      this.todoItems = [];
      var timeItem1 = localStorage.getItem('timehours')
      var timeItem2 = localStorage.getItem('timeminutes')
      var ATItem = localStorage.getItem('AT')
      localStorage.clear();
      localStorage.setItem('timehours',timeItem1);
      localStorage.setItem('timeminutes',timeItem2);
      localStorage.setItem('AT',ATItem);
      
      // (!(localStorage.key('AT')) || !(localStorage.key('timehours')) || !(localStorage.key('timeminutes'))
        
    },
    //TodoController
    //정렬 
    //내림차순 desc (리턴값 양수, 최신순)
    sortTodoLatest() {
      this.todoItems.sort(function(a, b) {
        return b.time - a.time;
      });
    },
    //오름차순 asc (리턴값 음수, 오래된순)
    sortTodoOldest() {
      this.todoItems.sort(function(a, b) {
        return a.time - b.time;
      });
    },
    // oldest, Latest 클릭 시 sortTodoOldest(), sortTodoLatest() 실행
    sortAllItem(selectedSort) {
      if (selectedSort.value === "date-desc") {
        this.sortTodoLatest();
      } else if (selectedSort.value === "date-asc") {
        this.sortTodoOldest();
      }
    }
  },
  mounted() {
    this.sortTodoOldest();
  },
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    // 화면에 뜨도록 만드는 애들 
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server" || localStorage.key(i) !== "AT" || localStorage.key(i) !== "timehours" || localStorage.key(i) !== "timeminutes") {
          // timehours때문인지 timeminutes 때문인지 암튼 쟤네 때문에 빈 Todo가 생기고 있음 
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  }
}
</script>