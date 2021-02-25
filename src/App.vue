<template>
  <div class="container">
    <TodoList></TodoList>
  </div>
</template>

<script lang="ts">
import TodoList from './components/todo-list/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
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

  .container {
    background-color: #e0d7e0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    .container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
