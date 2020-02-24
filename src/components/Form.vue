<template>
  <div>
    <div>
      <h3>My Form</h3>
      <label class="ml-4">Your name</label>
      <input v-model="input" id="todoItem">
      <button type="button" v-on:click="add()">Add</button>
    </div>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{todo}}
        <button type="button" v-on:click="del(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "Form",
  data() {
    return {
      input: "",
      todos: []
    };
  },
  methods: {
    add() {
      this.todos.push(this.input);
      this.input = "";
    },
    del(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  text-align: center;
}

input {
  margin: 10px 10px;
}
</style>
