<template>
  <li class="todo-item" :class="{ completed: todo.completed }">
    <span v-if="!isEditing" class="todo-text">{{ content }}</span>
    <input v-else v-model.trim="content" @keyup.enter="updateTodo" autofocus>
    <div class="buttons">
      <template v-if="!isEditing">
        <button type="button" @click="toggleTodo">{{ todo.completed ? 'Not completed' : 'Complete' }}</button>
        <button type="button" v-if="!todo.completed" @click="editTodo">Edit</button>
        <button type="button" @click="deleteTodo">Delete</button>
      </template>
      <button type="button" v-else @click="updateTodo">Done</button>
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
      if (this.content.length === 0) {
        return
      }
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

  .todo-text {
    max-width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .todo-item:not(:last-of-type) {
    margin-bottom: 12px;
  }

  .completed > .todo-text {
    text-decoration: line-through;
    color: darkgrey;
  }

  .buttons button:not(:last-of-type) {
    margin-right: 8px;
  }
</style>
