<template>
  <div class="list-container">
    <ul>
      <TodoItem v-for="todo of state.todos" :key="todo.id" :todo="todo"></TodoItem>
    </ul>
  </div>
</template>

<script lang="ts">
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
    background-color: #f7f7f7;
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    .list-container {
      width: 600px;
      height: 70vh;
      border: 1px solid dimgrey;
      border-radius: 4px;
    }
  }
</style>
