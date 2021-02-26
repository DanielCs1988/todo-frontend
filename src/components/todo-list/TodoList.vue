<template>
  <div class="list-container">
    <ul>
      <TodoItem v-for="todo of state.todos" :key="todo.id" :todo="todo"></TodoItem>
    </ul>
  </div>
</template>

<script>
  import TodoItem from '../todo-item/TodoItem.vue'
  import store from '../../store/store.js'

  export default {
    name: 'TodoList',
    components: {
      TodoItem,
    },
    data() {
      return {
        state: store.state,
      }
    },
    mounted() {
      store.fetchTodos()
    }
  }
</script>

<style scoped>
  .list-container {
    width: 100%;
    background-color: #fff;
    padding: 20px;
    overflow: auto;
  }

  @media screen and (min-width: 768px) {
    .list-container {
      width: 600px;
      height: 70vh;
      border-radius: 8px;
      box-shadow: 0 0 0 1px #dadce0;
    }
  }
</style>
