<template>
  <li class="todo-item" :class="{ completed: todo.completed }">
    <span v-if="!isEditing" class="todo-text">{{ content }}</span>
    <input v-else v-model="content" @keyup.enter="updateTodo">
    <div class="buttons">
      <button type="button" @click="toggleTodo">{{ todo.completed ? 'Not done' : 'Done' }}</button>
      <button type="button" v-if="!todo.completed" @click="editTodo">Edit</button>
      <button type="button" @click="deleteTodo">Delete</button>
    </div>
  </li>
</template>

<script>
import store from '../../store/store.js'

export default {
  name: 'TodoItem',
  props: {
    todo: Object,
  },
  data() {
    return {
      isEditing: false,
      content: this.todo.content,
    }
  },
  methods: {
    toggleTodo() {
      store.toggleTodo(this.todo.id)
    },
    deleteTodo() {
      store.deleteTodo(this.todo.id)
    },
    editTodo() {
      this.isEditing = true
    },
    updateTodo() {
      this.isEditing = false
      store.editTodo(this.todo.id, this.content)
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

  .buttons button:not(:last-of-type) {
    margin-right: 8px;
  }
</style>
