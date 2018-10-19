<template>
  <v-container v-if="this.$store.state.loading">
  <v-progress-circular id="loading"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
</v-container>

<v-container v-else>
<v-layout>
  <v-flex>
    <v-card>
      <v-text-field 
      label="List Name"
      v-model="todo.list_name"></v-text-field>

      <v-text-field
      label="Todo Item"
      v-model="todo_item.name"
      ></v-text-field>
      <v-btn @click="save_Todo">Save</v-btn>
    </v-card>
  </v-flex>
</v-layout>



</v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Todo",
  data() {
    return {
      todos: [],
      todo: {
        list_name: "",
        done: false,
        todo_items: []
      },
      todo_item: {
        name: "",
        done: false
      }
    };
  },
  methods: {
    reset_todo() {
      this.todo.list_name = "";
      this.todo.todo_items = [];
      this.todo_item.name = "";
    },
    save_Todo(event) {
      this.todo.todo_items.push(this.todo_item);
      console.log(this.todo);
      axios
        .post(
          "https://darkwing42.pythonanywhere.com/api/v1/todolist",
          this.todo
        )
        .then(response => {
          console.log(response);
          reset_todo();
        });
    }
  }
};
</script>

<style>
</style>
