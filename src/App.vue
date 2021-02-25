<template>
  <div class="container">
    <CreateTodo></CreateTodo>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/todo-list/TodoList.vue'
import CreateTodo from './components/create-todo/CreateTodo'

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo,
  },
}
</script>

<style>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
  }

  ul, ol {
    list-style: none;
  }

  button {
    padding: 4px 12px;
    border: 1px solid black;
    border-radius: 4px;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 150ms ease-in-out;
  }

  button:hover {
    border-color: dodgerblue;
    background-color: dodgerblue;
    color: white;
  }

  input {
    width: 250px;
    padding: 4px 8px;
  }

  .container {
    background-color: #e0d7e0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    .container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
