<template>
  <li class="todo-item" :class="{ completed: todo.completed }">
    <span v-if="!isEditing" class="todo-text">{{ todo.content }}</span>
    <input v-else class="edit-todo" v-model="editedContent">
    <div class="buttons">
      <button @click="toggleTodo(todo.id)">{{ todo.completed ? 'Not done' : 'Done' }}</button>
      <button v-if="!todo.completed" @click="editTodo">Edit</button>
      <button @click="deleteTodo(todo.id)">Delete</button>
    </div>
  </li>
</template>

<script lang="ts">
import store from '../../store/store.js'

export default {
  name: 'TodoItem',
  props: {
    todo: Object,
  },
  data() {
    return {
      isEditing: false,
      editedContent: '',
    }
  },
  methods: {
    toggleTodo(id) {
      store.toggleTodo(id)
    },
    deleteTodo(id) {
      store.deleteTodo(id)
    },
    editTodo() {
      this.isEditing = true
    },
  },
}
</script>

<style scoped>
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .todo-item:not(:last-of-type) {
    margin-bottom: 8px;
  }

  .completed > .todo-text {
    text-decoration: line-through;
    color: darkgrey;
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

  .buttons button:not(:last-of-type) {
    margin-right: 8px;
  }
</style>
